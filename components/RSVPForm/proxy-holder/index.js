import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { animateScroll as scroll } from 'react-scroll';

import { useForm, ErrorMessage, FormContext } from 'react-hook-form';
import { useOvermind } from '../../../overmind';

import { phonePattern1, emailPattern, KTP_SID_SEARCH_HIT_MIN_CHARS, LS_KEY } from '../../../util/constants';
import { reCaptchaInitialize, verifyCaptcha, reRenderCaptcha, saveDataToLocalStorage, getLocalStorageData, resetCaptcha, scrollOptions } from '../../../util/index';
import RSVPProxyHolderSubFields from './sub-fields';
import { withTranslation } from 'react-i18next';
import { objectToFormData } from 'object-to-formdata';

function RSVPProxyHolder({ props }) {

    const { state, actions } = useOvermind();
    const [verifyPostData, setVerifyPostData] = useState(undefined);

    const methods = useForm({
        mode: 'onChange',
        validateCriteriaMode: "all"
    });

    // console.log("props props ", state.rsvp.proxyholder);

    const { title } = props;
    const {
        name,
        optionsKTPOrPassport,
        numberKTPOrPassport,
        address,
        numberOfShares,
        phoneNumber,
        email,
        uploadID,
        uploadArticleOfAssociation,
        uploadProxy,
        proxyOfShareHolderIdentity,
        submitButton,
        infoText,
        successMsgTitle,
        successMsg,
        failedMsgTitle,
        failedMsg,
        redirectURL
    } = state.rsvp.proxyholder || {};

    // console.log('numberKTPOrPassport data ', numberKTPOrPassport);
    // const nameKTPOrPassport = state.rsvp.ktpOrPassport == 1 ? numberKTPOrPassport.ktp.name : numberKTPOrPassport.passport.name;

    //Watches
    const watchHidCaptcha = methods.watch("hidGRecaptchaElement");

    const onSubmit = (data, e) => {
        // console.log("Form submitted ", data, verifyPostData);
        if (data && verifyPostData) {
            const newData = { ...data, ...verifyPostData };
            newData['type'] = 'proxyholder';

            // console.log("newData data formed", newData);

            //to save form data as type to localStorage
            //Store the copy of form data to localStorage, to show user to prefill if captcha validation fails
            saveDataToLocalStorage({ key: LS_KEY.RSVP_FORM_DATA, data: newData });

            //Create Formdata from object
            const formData = objectToFormData(newData);
            //All files of the form 
            formData.append("proxyUploadID", newData.uploadID[0], newData.proxyUploadID[0].name);
            formData.append("proxyUploadBasicCalculation", newData.proxyUploadBasicCalculation[0], newData.proxyUploadBasicCalculation[0].name);
            formData.append("proxyUploadProxy", newData.proxyUploadProxy[0], newData.proxyUploadProxy[0].name);

            formData.append("uploadID", newData.uploadID[0], newData.uploadID[0].name);
            formData.append("uploadBasicCalculation", newData.uploadBasicCalculation[0], newData.uploadBasicCalculation[0].name);

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

                    //form reset & captcha
                    resetForm();
                }
                if (resp && resp.errors) {
                    console.log("Error submitting form ", resp, resp.errors);
                    actions.rsvp.updateAPIResponeErrorState(resp);
                }

            })
        //     .catch(function (error) {
        //         console.log("Error: occured ", error.response);
        //    });

        }
    }

    //reset form
    const resetForm = () => {
        methods.reset();
        resetCaptcha('hidGRecaptchaElement');
    }

    //state update
    const handleOnVerifyPostData = data => {
        if (data) setVerifyPostData(data);
    }

    //handling file change to show filenames
    const handleFileInputChange = (fieldName, file) => {
        if (fieldName && file && file.length) {
            actions.rsvp.updateFileListValue({ fieldName, file })
        }
    }

    //to refill the form with the values
    const handleReFillForm = () => {
        console.log('call updateFileListValue methjod');

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
        // handleReFillForm();
    });

    const form = (
        <FormContext {...methods}>
            <form className="form" onSubmit={methods.handleSubmit(onSubmit)}>
                <h2>{title}</h2>

                {/* <pre> {data && JSON.stringify(data, null, 2)}</pre> */}

                {/* {
                state.rsvp.isSIDKTPVerified === true ? ( */}
                <React.Fragment>
                    <div className="form-group">
                        <label htmlFor={name.name} className="col-form-label">{name.label} {name.required ? (<span className="required">*</span>) : ''}</label>
                        <div className="">
                            <input id={name.name}
                                name={name.name}
                                defaultValue={name.value}
                                placeholder={name.placeholder}
                                ref={methods.register({
                                    required: name.validation.required_msg,
                                })}
                                type="text"
                                className="form-control"
                            />
                            <ErrorMessage as="p" errors={methods.errors} name={name.name} />
                        </div>
                    </div>
                    {/* 
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                id={`${optionsKTPOrPassport.name}1`}
                                name={optionsKTPOrPassport.name}
                                defaultValue={optionsKTPOrPassport.option1.value}
                                defaultChecked={state.rsvp.ktpOrPassport == 1 ? true : false}
                                onChange={handleOptionChange}
                                ref={methods.register({ required: true })}
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
                                ref={methods.register({ required: true })}
                            />
                            <label className="form-check-label" htmlFor={`${optionsKTPOrPassport.name}2`}>{optionsKTPOrPassport.option2.label}</label>
                        </div>
                    </div> */}

                    {/* //For KTP or PASSPORT FIELD CHECK  */}
                    {/* {state.rsvp.ktpOrPassport == 1 ? '' : ''} */}

                    <div className="form-group">
                        <label htmlFor={numberKTPOrPassport.name} className="col-form-label">{numberKTPOrPassport.label} {numberKTPOrPassport.required ? (<span className="required">*</span>) : ''}</label>
                        <div className="">
                            <input id={numberKTPOrPassport.name}
                                name={numberKTPOrPassport.name}
                                defaultValue={numberKTPOrPassport.value}
                                placeholder={numberKTPOrPassport.placeholder}
                                ref={methods.register({
                                    required: numberKTPOrPassport.validation.required_msg
                                })}
                                type="text"
                                className="form-control"
                            />
                            <ErrorMessage as="p" errors={methods.errors} name={numberKTPOrPassport.name} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor={address.name} className="col-form-label">{address.label} {address.required ? (<span className="required">*</span>) : ''}</label>
                        <div className="">
                            <input id={address.name}
                                name={address.name}
                                defaultValue={address.value}
                                placeholder={address.placeholder}
                                ref={methods.register({
                                    required: address.validation.required_msg
                                })}
                                type="text"
                                className="form-control" />
                            <ErrorMessage as="p" errors={methods.errors} name={address.name} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor={numberOfShares.name} className="col-form-label">{numberOfShares.label} {numberOfShares.required ? (<span className="required">*</span>) : ''}</label>
                        <div className="">
                            <input id={numberOfShares.name}
                                name={numberOfShares.name}
                                defaultValue={numberOfShares.value}
                                placeholder={numberOfShares.placeholder}
                                ref={methods.register({
                                    required: numberOfShares.validation.required_msg
                                })}
                                type="text"
                                className="form-control" />
                            <ErrorMessage as="p" errors={methods.errors} name={numberOfShares.name} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor={phoneNumber.name} className="col-form-label">{phoneNumber.label} {phoneNumber.required ? (<span className="required">*</span>) : ''}</label>
                        <div className="">
                            <input id={phoneNumber.name}
                                name={phoneNumber.name}
                                defaultValue={phoneNumber.value}
                                placeholder={phoneNumber.placeholder}
                                ref={methods.register({
                                    required: phoneNumber.validation.required_msg,
                                    pattern: {
                                        value: phonePattern1,
                                        message: phoneNumber.validation.pattern_msg
                                    }
                                })}
                                type="text" className="form-control" />
                            <ErrorMessage as="p" errors={methods.errors} name={phoneNumber.name} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor={email.name} className="col-form-label">{email.label} {email.required ? (<span className="required">*</span>) : ''}</label>
                        <div className="">
                            <input id={email.name}
                                name={email.name}
                                defaultValue={email.value}
                                placeholder={email.placeholder}
                                ref={methods.register({
                                    required: email.validation.required_msg,
                                    pattern: {
                                        value: emailPattern,
                                        message: email.validation.pattern_msg
                                    }
                                })}
                                type="email"
                                className="form-control" />
                            <ErrorMessage as="p" errors={methods.errors} name={email.name} />
                        </div>
                    </div>

                    <div className="form-group">
                        {/* {JSON.stringify(filesList, null, 2)}; */}

                        <div className="file-box">
                            <label htmlFor={uploadID.name} className="input-file-label">
                                <a className="button button--2 button--axiata">{uploadID.label}</a>
                                {state.rsvp.filesList && state.rsvp.filesList[uploadID.name] ? state.rsvp.filesList[uploadID.name] : uploadID.placeholder} {uploadID.required ? (<span className="required">*</span>) : ''}
                                <input id={uploadID.name}
                                    name={uploadID.name}
                                    ref={methods.register({
                                        required: uploadID.validation.required_msg
                                    })}
                                    type="file"
                                    className="input-file"
                                    onChange={(e) => { handleFileInputChange('proxyUploadID', e.target.files) }}
                                />
                                {/* {} */}
                            </label>
                        </div>
                        {uploadID.fileInfoLine1 || uploadID.fileInfoLine2 ? (<div className="file-info">
                            {uploadID.fileInfoLine1 ? (<p>{uploadID.fileInfoLine1}</p>) : ''}
                            {uploadID.fileInfoLine2 ? (<p>{uploadID.fileInfoLine2}</p>) : ''}
                        </div>) : ''}
                        <ErrorMessage as="p" errors={methods.errors} name={uploadID.name} />
                    </div>

                    <div className="form-group">
                        <div className="file-box">
                            <label htmlFor={uploadArticleOfAssociation.name} className="input-file-label"><a className="button button--2 button--axiata">{uploadArticleOfAssociation.label}</a>
                                {state.rsvp.filesList && state.rsvp.filesList[uploadArticleOfAssociation.name] ? state.rsvp.filesList[uploadArticleOfAssociation.name] : uploadArticleOfAssociation.placeholder} {uploadArticleOfAssociation.required ? (<span className="required">*</span>) : ''}
                                <input id={uploadArticleOfAssociation.name}
                                    name={uploadArticleOfAssociation.name}
                                    ref={methods.register({
                                        required: uploadArticleOfAssociation.validation.required_msg
                                    })}
                                    type="file"
                                    className="input-file"
                                    onChange={(e) => { handleFileInputChange('proxyUploadBasicCalculation', e.target.files) }}
                                />
                            </label>
                        </div>
                        {uploadArticleOfAssociation.fileInfoLine1 || uploadArticleOfAssociation.fileInfoLine2 ? (<div className="file-info">
                            {uploadArticleOfAssociation.fileInfoLine1 ? (<p>{uploadArticleOfAssociation.fileInfoLine1}</p>) : ''}
                            {uploadArticleOfAssociation.fileInfoLine2 ? (<p>{uploadArticleOfAssociation.fileInfoLine2}</p>) : ''}
                        </div>) : ''}
                        <ErrorMessage as="p" errors={methods.errors} name={uploadArticleOfAssociation.name} />
                    </div>

                    <div className="form-group">
                        <div className="file-box">
                            <label htmlFor={uploadProxy.name} className="input-file-label"><a className="button button--2 button--axiata">{uploadProxy.label}</a>
                                {state.rsvp.filesList && state.rsvp.filesList[uploadProxy.name] ? state.rsvp.filesList[uploadProxy.name] : uploadProxy.placeholder} {uploadID.required ? (<span className="required">*</span>) : ''}
                                <input id={uploadProxy.name}
                                    name={uploadProxy.name}
                                    ref={methods.register({
                                        required: uploadProxy.validation.required_msg
                                    })}
                                    type="file"
                                    className="input-file"
                                    onChange={(e) => { handleFileInputChange('proxyUploadProxy', e.target.files) }}
                                />
                            </label>
                        </div>
                        {uploadProxy.fileInfoLine1 || uploadProxy.fileInfoLine2 ? (<div className="file-info">
                            {uploadProxy.fileInfoLine1 ? (<p>{uploadProxy.fileInfoLine1}</p>) : ''}
                            {uploadProxy.fileInfoLine2 ? (<p>{uploadProxy.fileInfoLine2}</p>) : ''}
                        </div>) : ''}
                        <ErrorMessage as="p" errors={methods.errors} name={uploadProxy.name} />
                    </div>

                    {/* Sub fields defination from different component for proxyOfShareHolderIdentity - START */}
                    <RSVPProxyHolderSubFields data={proxyOfShareHolderIdentity}
                        onVerifyPostData={handleOnVerifyPostData}
                        onHandleFileChange={handleFileInputChange} />

                    {state.rsvp.isSIDKTPVerified ? (<div className="form-group text-center">
                        <div className="">
                            <button
                                type="submit"
                                id={submitButton.name}
                                name={submitButton.name}
                                className="button"
                                >{submitButton.label}</button>
                        </div>
                    </div>) : null}

                </React.Fragment>
                {/* ) : (<div className="text-center text-info">{infoText}</div>)} */}

            </form>
        </FormContext>);

    return form;
}

export default withTranslation(['common', 'rsvp'])(RSVPProxyHolder);

RSVPProxyHolder.getInitialProps = async () => ({
    namespacesRequired: ['common', 'rsvp'],
})

RSVPProxyHolder.propTypes = {
    t: PropTypes.func.isRequired,
}