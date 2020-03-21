import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm, ErrorMessage } from 'react-hook-form';
import { useOvermind } from '../../../overmind';

import { phonePattern1, emailPattern, KTP_SID_SEARCH_HIT_MIN_CHARS, RSVP_STAKE_HOLDER_TYPE } from '../../../util/constants';
import { reCaptchaInitialize, verifyCaptcha, onLoadCaptchaExplicitHandler, reRenderCaptcha } from '../../../util/index';
import { withTranslation } from 'react-i18next';
import { objectToFormData } from 'object-to-formdata';
import Message from '../../Message';
import { action } from 'overmind';

function RSVPPersonal({ props }) {

    const { state, actions } = useOvermind();
    const { register, errors, handleSubmit, watch, getValues, setValue } = useForm({
        mode: 'onChange',
        validateCriteriaMode: "all"
    });
    const [verifyPostData, setVerifyPostData] = useState(undefined);
    // console.log("Personal state from personal file", state.rsvp.personal);

    //Refs for form fields
    const nameRef = useRef();
    const addressRef = useRef();

    //populate data from props and state form form
    const { title } = props;
    const {
        numberSID,
        numberKTUR,
        optionsKTPOrPassport,
        numberKTPOrPassport,
        name,
        address,
        numberOfShares,
        phoneNumber,
        email,
        uploadID,
        captcha,
        userAcceptance,
        submitButton,
        infoText,
        successMsgTitle,
        successMsg,
        failedMsgTitle,
        failedMsg,
        redirectURL
    } = state.rsvp.personal || {};

    const nameKTPOrPassport = state.rsvp.ktpOrPassport == 1 ? numberKTPOrPassport.ktp.name : numberKTPOrPassport.passport.name;
    // console.log('nameKTPOrPassport ', nameKTPOrPassport);

    //Watches
    const watchNoSID = watch(numberSID.name);
    const watchPassportOrKTP = watch(nameKTPOrPassport);
    const watchHidCaptcha = watch("hidGRecaptchaElement");

    const isSIDAndKTPOrPPValid = (watchNoSID && watchNoSID.length > KTP_SID_SEARCH_HIT_MIN_CHARS) && (watchPassportOrKTP && watchPassportOrKTP.length > KTP_SID_SEARCH_HIT_MIN_CHARS) || false;

    const onSubmit = (data, e) => {
        console.log("Form submitted ", data, e);
        if (data && verifyPostData) {
            const newData = { ...data, ...verifyPostData };
            console.log("newData data formed", newData);
            const formData = objectToFormData(newData);
            //To log formData purpose only, as offically formData doesn't log in browser constole
            // console.log("Form data formed", formData);
            // for (var key of formData.entries()) {
            //     console.log(key[0] + ', ' + key[1])
            // }

            actions.rsvp.handleSubmitFormRequest(formData);
        }
    };

    const handleOptionChange = (e) => {
        // console.log('handle options change triggered ', e.target.value)
        actions.rsvp.updateKTPOrPassportState(e.target.value);

        console.log('isSIDAndKTPOrPPValid ', watchNoSID, watchPassportOrKTP, isSIDAndKTPOrPPValid);

        if (isSIDAndKTPOrPPValid) {
            triggerSIDKTPCheck();
        }
    }

    const triggerSIDKTPCheck = () => {
        const formValues = getValues()
        // console.log('formValues >>>>', formValues);

        const queryData = {
            stakeholderType: RSVP_STAKE_HOLDER_TYPE.personal, //default to one because we are loading personal component form for entity and proxy set 2 and 3 respectiviely
            numberSID: formValues && formValues.numberSID,
            identityType: formValues && formValues.optionKTPPassport,
            identityNumber: formValues && formValues.identityNumber || formValues && formValues.identityNumber,
            // proxyIdentityNumber: "" // file for proxyholer form only
        }

        setVerifyPostData(queryData);

        if (queryData) {
            console.log('verifyPostData found', queryData);

            actions.rsvp.verifyValidSIDKTPUser(JSON.stringify(queryData)).then(resp => {
                // console.log("verify response ", resp);
                const data = resp;

                if (data) {
                    const address = data.address1 && data.address2 ? data.address1 + ', ' + data.address2 : (data.address1 ? data.address1 : null);
                    data['address'] = address;
                    
                    console.log("REFORM - DATA ", data);

                    setValuesAndReadonly(data);
                }

                if (resp && resp.errors) {
                    actions.rsvp.handleAPIResponeError(resp)
                }
                
            });
        }
    }

    const handleSIdKTPVerify = (e) => {
        // console.log('handle handleSIdKTPVerify key up triggered ')
        // const curVal = e.target.value;
        // console.log('curVal <<<>>>>', curVal);

        if (isSIDAndKTPOrPPValid) {
            triggerSIDKTPCheck();
        }
    }

    const setValuesAndReadonly = values => {
        console.log("setValuesAndReadonly response ", values);
        setTimeout(() => {
            if (values.name) {
                setValue(name.name, values.name);
                if (nameRef.current) nameRef.current.setAttribute('readOnly', true);
            }

            if (values.address) {
                setValue(address.name, values.address);
                if (addressRef.current) addressRef.current.setAttribute('readOnly', true);
            }
        }, 0);
    }

    // Similar to componentDidMount and componentDidUpdate:
    // useEffect(() => {
    //     // console.log(state.rsvp.personal)
    //     // if(!window.grecaptcha) reCaptchaInitialize('v2');
    //     // console.log('watchHidCaptcha', watchHidCaptcha);
    // }, [watchHidCaptcha]);

    useEffect(() => {
        console.log("Personal: effect fired when: isSIDKTPVerified value changed");
        if (state.rsvp.isSIDKTPVerified) {
            const st = setTimeout(() => {
                // verifyCaptcha
                if (captcha.hiddenField.name)
                    verifyCaptcha(captcha.hiddenField.name);
                else
                    console.error('Set data in locale for form captcha (captcha.hiddenField.name)');

                if (!window.grecaptcha) reCaptchaInitialize('v2');
                if (window.grecaptcha) reRenderCaptcha();
            }, 0);

            return () => {
                clearTimeout(st);
            }
        }
    }, [state.rsvp.isSIDKTPVerified]);

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h2>{title}</h2>

            {/* <pre> {state.rsvp.personal && JSON.stringify(state.rsvp.personal, null, 2)}</pre> */}

            <div className="form-group">
                <label htmlFor={numberSID.name} className="col-form-label">{numberSID.label} {numberSID.required ? (<span className="required">*</span>) : ''}</label>
                <div className="">
                    <input id={numberSID.name}
                        name={numberSID.name}
                        defaultValue={numberSID.value}
                        placeholder={numberSID.placeholder}
                        ref={register({
                            required: numberSID.validation.required_msg,
                            minLength: {
                                value: 6,
                                message: numberSID.validation.minlength_msg
                            }
                        })}
                        type="text"
                        className="form-control"
                        onKeyUp={handleSIdKTPVerify}
                    />
                    <ErrorMessage as="p" errors={errors} name={numberSID.name} />
                </div>
            </div>

            <div className="form-group">
                <div className="form-check form-check-inline">
                    <input className="form-check-input"
                        type="radio"
                        id={`${optionsKTPOrPassport.name}1`}
                        name={optionsKTPOrPassport.name}
                        defaultValue={optionsKTPOrPassport.option1.value}
                        defaultChecked={state.rsvp.ktpOrPassport == 1 ? true : false}
                        onChange={handleOptionChange}
                        ref={register({ required: true })}
                    />
                    <label className="form-check-label" htmlFor={`${optionsKTPOrPassport.name}1`}>{optionsKTPOrPassport.option1.label}</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input"
                        type="radio"
                        id={`${optionsKTPOrPassport.name}2`}
                        name={optionsKTPOrPassport.name}
                        defaultValue={optionsKTPOrPassport.option2.value}
                        defaultChecked={state.rsvp.ktpOrPassport == 2 ? true : false}
                        onChange={handleOptionChange}
                        ref={register({ required: true })}
                    />
                    <label className="form-check-label" htmlFor={`${optionsKTPOrPassport.name}2`}>{optionsKTPOrPassport.option2.label}</label>
                </div>
            </div>

            {/* //For KTP or PASSPORT FIELD CHECK  */}
            {
                state.rsvp.ktpOrPassport == 1 ? (
                    <div className="form-group">
                        <label htmlFor={numberKTPOrPassport.ktp.name} className="col-form-label">{numberKTPOrPassport.ktp.label} {numberKTPOrPassport.ktp.required ? (<span className="required">*</span>) : ''}</label>
                        <div className="">
                            <input id={numberKTPOrPassport.ktp.name}
                                name={numberKTPOrPassport.ktp.name}
                                defaultValue={numberKTPOrPassport.ktp.value}
                                placeholder={numberKTPOrPassport.ktp.placeholder}
                                ref={register({
                                    required: numberKTPOrPassport.ktp.validation.required_msg
                                })}
                                type="text"
                                className="form-control"
                                onKeyUp={handleSIdKTPVerify}
                            />
                            <ErrorMessage as="p" errors={errors} name={numberKTPOrPassport.ktp.name} />
                        </div>
                    </div>) :
                    (<div className="form-group">
                        <label htmlFor={numberKTPOrPassport.passport.name} className="col-form-label">{numberKTPOrPassport.passport.label} {numberKTPOrPassport.passport.required ? (<span className="required">*</span>) : ''}</label>
                        <div className="">
                            <input id={numberKTPOrPassport.passport.name}
                                name={numberKTPOrPassport.passport.name}
                                defaultValue={numberKTPOrPassport.passport.value}
                                placeholder={numberKTPOrPassport.passport.placeholder}
                                ref={register({
                                    required: numberKTPOrPassport.passport.validation.required_msg
                                })}
                                type="text"
                                className="form-control"
                                onKeyUp={handleSIdKTPVerify}
                            />
                            <ErrorMessage as="p" errors={errors} name={numberKTPOrPassport.passport.name} />
                        </div>
                    </div>)
            }

            {/* {'state.rsvp.isSIDKTPVerified : ' + state.rsvp.isSIDKTPVerified} */}

            {
                state.rsvp.isSIDKTPVerified === true ? (
                    <React.Fragment>

                        <div className="form-group">
                            <label htmlFor={numberKTUR.name} className="col-form-label">{numberKTUR.label} {numberKTUR.required ? (<span className="required">*</span>) : ''}</label>
                            <div className="">
                                <input id={numberKTUR.name}
                                    name={numberKTUR.name}
                                    defaultValue={numberKTUR.value}
                                    placeholder={numberKTUR.placeholder}
                                    ref={register({
                                        required: numberKTUR.validation.required_msg,
                                        minLength: {
                                            value: 6,
                                            message: numberKTUR.validation.minlength_msg
                                        }
                                    })}
                                    type="text"
                                    className="form-control" />
                                <ErrorMessage as="p" errors={errors} name={numberKTUR.name} />
                            </div>
                        </div>


                        <div className="form-group">
                            <label htmlFor={name.name} className="col-form-label">{name.label} {name.required ? (<span className="required">*</span>) : ''}</label>
                            <div className="">
                                <input id={name.name}
                                    name={name.name}
                                    defaultValue={name.value}
                                    placeholder={name.placeholder}
                                    ref={(e) => {
                                        register(e, {
                                            required: name.validation.required_msg,
                                        })
                                        nameRef.current = e
                                    }}
                                    type="text"
                                    className="form-control"
                                />
                                <ErrorMessage as="p" errors={errors} name={name.name} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor={address.name} className="col-form-label">{address.label} {address.required ? (<span className="required">*</span>) : ''}</label>
                            <div className="">
                                <input id={address.name}
                                    name={address.name}
                                    defaultValue={address.value}
                                    placeholder={address.placeholder}
                                    ref={(e) => {
                                        register(e, {
                                            required: address.validation.required_msg
                                        })
                                        addressRef.current = e
                                    }}
                                    type="text"
                                    className="form-control" />
                                <ErrorMessage as="p" errors={errors} name={address.name} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor={numberOfShares.name} className="col-form-label">{numberOfShares.label} {numberOfShares.required ? (<span className="required">*</span>) : ''}</label>
                            <div className="">
                                <input id={numberOfShares.name}
                                    name={numberOfShares.name}
                                    defaultValue={numberOfShares.value}
                                    placeholder={numberOfShares.placeholder}
                                    ref={register({
                                        required: numberOfShares.validation.required_msg
                                    })}
                                    type="text"
                                    className="form-control" />
                                <ErrorMessage as="p" errors={errors} name={numberOfShares.name} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor={phoneNumber.name} className="col-form-label">{phoneNumber.label} {phoneNumber.required ? (<span className="required">*</span>) : ''}</label>
                            <div className="">
                                <input id={phoneNumber.name}
                                    name={phoneNumber.name}
                                    defaultValue={phoneNumber.value}
                                    placeholder={phoneNumber.placeholder}
                                    ref={register({
                                        required: phoneNumber.validation.required_msg,
                                        pattern: {
                                            value: phonePattern1,
                                            message: phoneNumber.validation.pattern_msg
                                        }
                                    })}
                                    type="text" className="form-control" />
                                <ErrorMessage as="p" errors={errors} name={phoneNumber.name} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor={email.name} className="col-form-label">{email.label} {email.required ? (<span className="required">*</span>) : ''}</label>
                            <div className="">
                                <input id={email.name}
                                    name={email.name}
                                    defaultValue={email.value}
                                    placeholder={email.placeholder}
                                    ref={register({
                                        required: email.validation.required_msg,
                                        pattern: {
                                            value: emailPattern,
                                            message: email.validation.pattern_msg
                                        }
                                    })}
                                    type="email"
                                    className="form-control" />
                                <ErrorMessage as="p" errors={errors} name={email.name} />
                            </div>
                        </div>

                        <div className="form-group">
                            {/* <label htmlFor="uploadID" className="col-form-label">Upload ID {element.required ? (<span className="required">*</span>) : ''}</label> */}
                            {/* <div className="">
                            <input name="uploadID" ref={register({ required: 'This is required' })} type="file" className="form-control" id="uploadID" />
                        </div> */}
                            <div className="file-box">
                                <label htmlFor={uploadID.name} className="input-file-label"><a className="button button--2 button--axiata">{uploadID.label}</a>
                                    {uploadID.placeholder} {uploadID.required ? (<span className="required">*</span>) : ''}
                                    <input id={uploadID.name}
                                        name={uploadID.name}
                                        ref={register({
                                            required: uploadID.validation.required_msg
                                        })}
                                        type="file"
                                        className="input-file"
                                        multiple
                                    />
                                </label>
                            </div>
                            {uploadID.fileInfoLine1 || uploadID.fileInfoLine2 ? (<div className="file-info">
                                {uploadID.fileInfoLine1 ? (<p>{uploadID.fileInfoLine1}</p>) : ''}
                                {uploadID.fileInfoLine2 ? (<p>{uploadID.fileInfoLine2}</p>) : ''}
                            </div>) : ''}
                            <ErrorMessage as="p" errors={errors} name={uploadID.name} />
                        </div>

                        <div className="form-group">
                            <div className="form-check form-check-inline">
                                <input
                                    name={userAcceptance.name}
                                    id={userAcceptance.name}
                                    defaultValue={userAcceptance.value}
                                    ref={register({
                                        required: userAcceptance.validation.required_msg
                                    })}
                                    type="checkbox"
                                    className="form-check-label" />
                                <label
                                    htmlFor={userAcceptance.name}
                                    className="col-form-label pl-1"> {userAcceptance.label}</label>
                            </div>
                            <ErrorMessage as="p" errors={errors} name={userAcceptance.name} />
                        </div>

                        <div className="form-group">
                            <div className="g-recaptcha" id={captcha.id}></div>
                            <input type="hidden" name={captcha.hiddenField.name} defaultValue={state.rsvp.captchaValue}
                                ref={register({
                                    required: captcha.validation.required_msg
                                })} />
                            <ErrorMessage as="p" errors={errors} name={captcha.hiddenField.name} />
                        </div>

                        <div className="form-group text-center">
                            <div className="">
                                <button
                                    type="submit"
                                    id={submitButton.name}
                                    name={submitButton.name}
                                    className="button">{submitButton.label}</button>
                            </div>
                        </div>
                    </React.Fragment>) :
                        state.isFetching ? (<Message type="info" data={'Fetching information...'} />) : state.rsvp.errors && state.rsvp.errors.message ?
                        (<Message type="error" data={state.rsvp.errors.message} />) : 
                        (<Message type="info" data={infoText} />) }

                    {/* {state.isFetching ? (<Message type="info" data={'Fetching information...'} />) : null} */}

        </form>
    );
}

export default withTranslation(['common', 'rsvp'])(RSVPPersonal);

// RSVPPersonal.getInitialProps = async () => ({
//     namespacesRequired: ['common', 'rsvp'],
// })

// RSVPPersonal.propTypes = {
//     t: PropTypes.func.isRequired,
// }