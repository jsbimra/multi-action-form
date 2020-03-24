import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { animateScroll as scroll } from 'react-scroll';

import { useForm, ErrorMessage } from 'react-hook-form';
import { useOvermind } from '../../../overmind';

import { phonePattern1, emailPattern, KTP_SID_SEARCH_HIT_MIN_CHARS, RSVP_STAKE_HOLDER_TYPE, LS_KEY } from '../../../util/constants';
import { saveDataToLocalStorage, getLocalStorageData, reCaptchaInitialize, verifyCaptcha, onLoadCaptchaExplicitHandler, reRenderCaptcha, scrollOptions, resetCaptcha } from '../../../util/index';
import { withTranslation } from 'react-i18next';
import { objectToFormData } from 'object-to-formdata';

import Message from '../../Message';

function RSVPEntity({ props }) {

    const { state, actions } = useOvermind();
    const { register, errors, handleSubmit, watch, getValues, setValue, reset, formState } = useForm({
        mode: 'onChange',
        validateCriteriaMode: "all"
    });
    const [verifyPostData, setVerifyPostData] = useState(undefined);
    // console.log("Entity state from entity file", state.rsvp.persoentitynal);

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
        uploadArticleOfAssociation,
        uploadProxy,
        captcha,
        userAcceptance,
        submitButton,
        infoText,
        successMsgTitle,
        successMsg,
        failedMsgTitle,
        failedMsg,
        redirectURL
    } = state.rsvp.entity || {};

    const nameKTPOrPassport = state.rsvp.ktpOrPassport == 1 ? numberKTPOrPassport.ktp.name : numberKTPOrPassport.passport.name;
    // console.log('nameKTPOrPassport ', nameKTPOrPassport);

    //Watches
    const watchNoSID = watch(numberSID.name);
    const watchPassportOrKTP = watch(nameKTPOrPassport);
    const watchHidCaptcha = watch("hidGRecaptchaElement");

    const isSIDAndKTPOrPPValid = (watchNoSID && watchNoSID.length > KTP_SID_SEARCH_HIT_MIN_CHARS) && (watchPassportOrKTP && watchPassportOrKTP.length > KTP_SID_SEARCH_HIT_MIN_CHARS) || false;

    const onSubmit = async (data, e) => {
        // console.log("Form submitted ", data, e);
        if (data && verifyPostData) {
            const newData = { ...data, ...verifyPostData };
            newData['type'] = 'entity';

            // console.log("newData data formed", newData);

            //to save form data as type to localStorage
            //Store the copy of form data to localStorage, to show user to prefill if captcha validation fails
            saveDataToLocalStorage({ key: LS_KEY.RSVP_FORM_DATA, data: newData });

            //Create Formdata from object
            const formData = objectToFormData(newData);
            formData.append("uploadID", newData.uploadID[0], newData.uploadID[0].name);
            formData.append("uploadBasicCalculation", newData.uploadBasicCalculation[0], newData.uploadBasicCalculation[0].name);
            formData.append("uploadProxy", newData.uploadProxy[0], newData.uploadProxy[0].name);

            //To log formData purpose only, as offically formData doesn't log in browser constole
            // console.log("Form data formed", formData);
            // for (var key of formData.entries()) {
            //     console.log(key[0] + ', ' + key[1])
            // }

            // console.log('watchHidCaptcha', watchHidCaptcha);
            //First verify catpcha and then post the form:
            // actions.rsvp.verifyCaptchaRequest(newData.hidGRecaptchaElement);
            actions.rsvp.handleSubmitFormRequest(formData).then(resp => {
                // console.log('form submitted response: ', resp)
                
                if (resp && resp.success) {
                    actions.rsvp.updateSubmitSuccess(true);
                    scroll.scrollToTop(scrollOptions);

                    resetForm();
                }

                if (resp && resp.errors) {
                    actions.rsvp.handleAPIResponeError(resp);
                }

            })
            // .catch(error => {
            //     console.error("Error: occured ", error.response);
            // });
        }
    }

    const triggerSIDKTPCheck = () => {
        const formValues = getValues()
        // console.log('formValues >>>>', formValues);

        const queryData = {
            stakeholderType: RSVP_STAKE_HOLDER_TYPE.entity, //default to one because we are loading personal component form for entity and proxy set 2 and 3 respectiviely
            numberSID: formValues && formValues.numberSID,
            identityType: formValues && formValues.identityType,
            identityNumber: formValues && formValues.identityNumber,
            // proxyIdentityNumber: "" // file for proxyholer form only
        }
        setVerifyPostData(queryData);

        if (queryData) {
            // console.log('verifyPostData found', queryData);

            actions.rsvp.verifyValidSIDKTPUser(JSON.stringify(queryData)).then(resp => {
                // console.log("verify response ", resp);
                const data = resp;

                if (data) {
                    const address = data.address1 && data.address2 ? data.address1 + ', ' + data.address2 : (data.address1 ? data.address1 : null);
                    data['address'] = address;

                    // console.log("REFORM - DATA ", data);
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
        // console.log("setValuesAndReadonly response ", values);
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

    //reset form
    const resetForm = () => {
        reset();
        resetCaptcha('hidGRecaptchaElement');
    }

    //handling file change to show filenames
    const handleOptionChange = (e) => {
        // console.log('handle options change triggered ', e.target.value)
        actions.rsvp.updateKTPOrPassportState(e.target.value);

        console.log('isSIDAndKTPOrPPValid ', watchNoSID, watchPassportOrKTP, isSIDAndKTPOrPPValid);

        if (isSIDAndKTPOrPPValid) {
            triggerSIDKTPCheck();
        }
    }

    //handling file change to show filenames
    const handleFileInputChange = (fieldName, file) => {
        if (fieldName && file && file.length) {
            actions.rsvp.updateFileListValue({ fieldName, file })
        }
    }

    //to refill the form with the values
    const handleReFillForm = () => {
        // console.log('call updateFileListValue methjod');

        const lsd = getLocalStorageData(LS_KEY.RSVP_FORM_DATA);
        if (lsd && lsd.type) {
            // actions.rsvp.updateFormState({ type: lsd.type, data: lsd })
            for (const k of Object.keys(lsd)) {
                console.log(k);
                if (typeof lsd[k] === "object") {
                    methods.setValue(k, [])
                } else {
                    methods.setValue(k, lsd[k])
                }
            }
        }
    }

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // console.log("Entity: ffect fired when: isSIDKTPVerified value changed");
        if (state.rsvp.isSIDKTPVerified) {
            const st = setTimeout(() => {
                //Trigger verifyCaptcha observer 
                verifyCaptcha(captcha.hiddenField.name);

                if (!window.grecaptcha) reCaptchaInitialize('v2');
                if (window.grecaptcha) reRenderCaptcha();
            }, 0);

            return () => {
                clearTimeout(st);
            }
        }

    }, [state.rsvp.isSIDKTPVerified]);

    const form = (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h2>{title}</h2>

            {/* <pre> {state.rsvp.entity && JSON.stringify(state.rsvp.entity, null, 2)}</pre> */}

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

            <div className="form-group pt-3">
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
                state.rsvp.ktpOrPassport == 1 ? (<div className="form-group">
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
                            <div className="file-box">
                                <label htmlFor={uploadID.name} className="input-file-label"><a className="button button--2 button--axiata">{uploadID.label}</a>
                                    {state.rsvp.filesList && state.rsvp.filesList[uploadID.name] ? state.rsvp.filesList[uploadID.name] : uploadID.placeholder} {uploadID.required ? (<span className="required">*</span>) : ''}
                                    <input id={uploadID.name}
                                        name={uploadID.name}
                                        ref={register({
                                            required: uploadID.validation.required_msg
                                        })}
                                        type="file"
                                        className="input-file"
                                        multiple
                                        onChange={(e) => { handleFileInputChange('uploadID', e.target.files) }}
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
                            <div className="file-box">
                                <label htmlFor={uploadArticleOfAssociation.name} className="input-file-label"><a className="button button--2 button--axiata">{uploadArticleOfAssociation.label}</a>
                                    {state.rsvp.filesList && state.rsvp.filesList[uploadArticleOfAssociation.name] ? state.rsvp.filesList[uploadArticleOfAssociation.name] : uploadArticleOfAssociation.placeholder} {uploadArticleOfAssociation.required ? (<span className="required">*</span>) : ''}
                                    <input id={uploadArticleOfAssociation.name}
                                        name={uploadArticleOfAssociation.name}
                                        ref={register({
                                            required: uploadArticleOfAssociation.validation.required_msg
                                        })}
                                        type="file"
                                        className="input-file"
                                        multiple
                                        onChange={(e) => { handleFileInputChange('uploadBasicCalculation', e.target.files) }}
                                    />
                                </label>
                            </div>
                            {uploadArticleOfAssociation.fileInfoLine1 || uploadArticleOfAssociation.fileInfoLine2 ? (<div className="file-info">
                                {uploadArticleOfAssociation.fileInfoLine1 ? (<p>{uploadArticleOfAssociation.fileInfoLine1}</p>) : ''}
                                {uploadArticleOfAssociation.fileInfoLine2 ? (<p>{uploadArticleOfAssociation.fileInfoLine2}</p>) : ''}
                            </div>) : ''}
                            <ErrorMessage as="p" errors={errors} name={uploadArticleOfAssociation.name} />
                        </div>

                        <div className="form-group">
                            <div className="file-box">
                                <label htmlFor={uploadProxy.name} className="input-file-label"><a className="button button--2 button--axiata">{uploadProxy.label}</a>
                                    {state.rsvp.filesList && state.rsvp.filesList[uploadProxy.name] ? state.rsvp.filesList[uploadProxy.name] : uploadProxy.placeholder}  {uploadID.required ? (<span className="required">*</span>) : ''}
                                    <input id={uploadProxy.name}
                                        name={uploadProxy.name}
                                        ref={register({
                                            required: uploadProxy.validation.required_msg
                                        })}
                                        type="file"
                                        className="input-file"
                                        multiple
                                        onChange={(e) => { handleFileInputChange('uploadProxy', e.target.files) }}
                                    />
                                </label>
                            </div>
                            {uploadProxy.fileInfoLine1 || uploadProxy.fileInfoLine2 ? (<div className="file-info">
                                {uploadProxy.fileInfoLine1 ? (<p>{uploadProxy.fileInfoLine1}</p>) : ''}
                                {uploadProxy.fileInfoLine2 ? (<p>{uploadProxy.fileInfoLine2}</p>) : ''}
                            </div>) : ''}
                            <ErrorMessage as="p" errors={errors} name={uploadProxy.name} />
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
                                    className="col-form-label"> {userAcceptance.label}</label>
                            </div>
                            <ErrorMessage as="p" errors={errors} name={userAcceptance.name} />
                        </div>

                        <div className="form-group">
                            <div className="g-recaptcha" id={captcha.id}></div>
                            <input type="hidden" 
                                id={captcha.hiddenField.name} 
                                name={captcha.hiddenField.name}
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
                                    className="button"
                                    >{submitButton.label}</button>
                            </div>
                        </div>
                    </React.Fragment>) :
                    state.isFetching ? (<Message type="info" data={'Fetching information...'} />) : !state.rsvp.errors.message ? (<Message type="info" data={infoText} />) : (<Message type="error" data={state.rsvp.errors.message} />)}

        </form>
    );

    return form;
}

export default withTranslation(['common', 'rsvp'])(RSVPEntity);

// RSVPEntity.getInitialProps = async () => ({
//     namespacesRequired: ['common', 'rsvp'],
// })

// RSVPEntity.propTypes = {
//     t: PropTypes.func.isRequired,
// }