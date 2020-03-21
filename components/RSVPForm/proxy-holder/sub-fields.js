import React, { useEffect, useRef, useState } from 'react';
import { ErrorMessage, useFormContext } from 'react-hook-form';
import { useOvermind } from '../../../overmind';
import { emailPattern, KTP_SID_SEARCH_HIT_MIN_CHARS, phonePattern1, RSVP_STAKE_HOLDER_TYPE } from '../../../util/constants';
import { verifyCaptcha } from '../../../util/index';

import Message from '../../Message';

export default function RSVPProxyHolderSubFields(props) {

    const { state, actions } = useOvermind();
    const {
        register,
        errors,
        watch,
        getValues,
        setValue,
    } = useFormContext();

    const [verifyPostData, setVerifyPostData] = useState(undefined);

    //Refs for form fields
    const nameRef = useRef();
    const addressRef = useRef();

    const { label, required, subFields } = props.data;
    const {
        numberSID,
        optionsKTPOrPassport,
        numberKTPOrPassport,
        numberKTUR,
        name,
        address,
        numberOfShares,
        phoneNumber,
        email,
        uploadID,
        uploadArticleOfAssociation,
        infoText,
        captcha,
        userAcceptance,
    } = subFields || {};

    const nameKTPOrPassport = state.rsvp.ktpOrPassport == 1 ? numberKTPOrPassport.ktp.name : numberKTPOrPassport.passport.name;
    // console.log('nameKTPOrPassport ', nameKTPOrPassport);

    //Watches
    const watchNoSID = watch(numberSID.name);
    const watchPassportOrKTP = watch(nameKTPOrPassport);
    const watchHidCaptcha = watch("hidGRecaptchaElement");

    const isSIDAndKTPOrPPValid = (watchNoSID && watchNoSID.length > KTP_SID_SEARCH_HIT_MIN_CHARS) && (watchPassportOrKTP && watchPassportOrKTP.length > KTP_SID_SEARCH_HIT_MIN_CHARS) || false;

    const handleOptionChange = (e) => {
        // console.log('handle options change triggered ', nameKTPOrPassport)
        actions.rsvp.updateKTPOrPassportState({ stateName: 'proxyKtpOrPassport', value: e.target.value });

        if (isSIDAndKTPOrPPValid) {
            triggerSIDKTPCheck();
        }
    }

    const triggerSIDKTPCheck = () => {
        const formValues = getValues()
        // console.log('formValues >>>>', formValues);

        const queryData = {
            stakeholderType: RSVP_STAKE_HOLDER_TYPE.proxyholder, //default to one because we are loading personal component form for entity and proxy set 2 and 3 respectiviely
            numberSID: formValues && formValues.numberSID,
            identityType: formValues && formValues.identityType,
            identityNumber: formValues && formValues.identityNumber,
            proxyIdentityNumber: formValues.proxyIdentityNumber // file for proxyholer form only
        }

        setVerifyPostData(queryData);

        if (queryData) {
            console.log('verifyPostData found', queryData);

            actions.triggerFetching(true);

            actions.rsvp.verifyValidSIDKTPUser(JSON.stringify(queryData)).then(resp => {
                // console.log("verify response ", resp);
                const data = resp;

                if (data) {
                    const address = data.address1 && data.address2 ? data.address1 + ', ' + data.address2 : (data.address1 ? data.address1 : null);
                    data['address'] = address;

                    console.log("REFORM - DATA ", data);

                    setValuesAndReadonly(data);

                    //State Lift up action!
                    props.onVerifyPostData(verifyPostData);
                }

                if (resp && resp.errors) {
                    actions.rsvp.handleAPIResponeError(resp)
                }

                actions.triggerFetching(false);

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

    useEffect(() => {
        console.log("Personal: ffect fired when: isSIDKTPVerified value changed");
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
        <div>
            {/* <pre> {data && JSON.stringify(data, null, 2)}</pre> */}
            <h5>{label} {required ? (<span className="required">*</span>) : ''}</h5>
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
                        onChange={handleSIdKTPVerify}
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
            {/* {'state.rsvp.proxyKtpOrPassport' + state.rsvp.proxyKtpOrPassport} */}

            {
                state.rsvp.proxyKtpOrPassport == 1 ? (
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
                                    type="text" className="form-control" />
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
                                    ref={register({
                                        required: name.validation.required_msg,
                                    })}
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
                                    ref={register({
                                        required: address.validation.required_msg
                                    })}
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
                            <div className="file-box">
                                <label htmlFor={uploadID.name} className="input-file-label"><a className="button button--2 button--axiata">{uploadID.label}</a>
                                    {uploadID.placeholder} {uploadID.required ? (<span className="required">*</span>) : ''}
                                    <input id={uploadID.name}
                                        name={uploadID.name}
                                        ref={register({
                                            required: uploadID.validation.required_msg
                                        })}
                                        type="file"
                                        className="input-file" />
                                </label>
                            </div>
                            {uploadID.fileInfoLine1 || uploadID.fileInfoLine2 ? (<div className="file-info">
                                {uploadID.fileInfoLine1 ? (<p>{uploadID.fileInfoLine1}</p>) : ''}
                                {uploadID.fileInfoLine2 ? (<p>{uploadID.fileInfoLine2}</p>) : ''}
                            </div>) : ''}
                            <ErrorMessage as="p" errors={errors} name={uploadID.name} />
                        </div>

                        <div className="form-group">
                            <div className="file-box">
                                <label htmlFor={uploadArticleOfAssociation.name} className="input-file-label"><a className="button button--2 button--axiata">{uploadArticleOfAssociation.label}</a>
                                    {uploadArticleOfAssociation.placeholder} {uploadArticleOfAssociation.required ? (<span className="required">*</span>) : ''}
                                    <input id={uploadArticleOfAssociation.name}
                                        name={uploadArticleOfAssociation.name}
                                        ref={register({
                                            required: uploadArticleOfAssociation.validation.required_msg
                                        })}
                                        type="file"
                                        className="input-file" />
                                </label>
                            </div>
                            {uploadArticleOfAssociation.fileInfoLine1 || uploadArticleOfAssociation.fileInfoLine2 ? (<div className="file-info">
                                {uploadArticleOfAssociation.fileInfoLine1 ? (<p>{uploadArticleOfAssociation.fileInfoLine1}</p>) : ''}
                                {uploadArticleOfAssociation.fileInfoLine2 ? (<p>{uploadArticleOfAssociation.fileInfoLine2}</p>) : ''}
                            </div>) : ''}
                            <ErrorMessage as="p" errors={errors} name={uploadArticleOfAssociation.name} />
                        </div>

                        <div className="form-group">
                            <div className="form-check form-check-inline">
                                <input
                                    id={userAcceptance.name}
                                    name={userAcceptance.name}
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
                    </React.Fragment>
                ) :
                    state.isFetching ? (<Message type="info" data={'Fetching information...'} />) : state.rsvp.errors && state.rsvp.errors.message ?
                        (<Message type="error" data={state.rsvp.errors.message} />) :
                        (<Message type="info" data={infoText} />)}

        </div>
    );
}
