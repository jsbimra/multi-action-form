import React, { useEffect, useRef } from 'react';
import { useForm, ErrorMessage, FormContext } from 'react-hook-form';
import { useOvermind } from '../../../overmind';

import { phonePattern1, emailPattern, KTP_SID_SEARCH_HIT_MIN_CHARS } from '../../../util/constants';
import { reCaptchaInitialize, verifyCaptcha } from '../../../util/index';
import RSVPProxyHolderSubFields from './sub-fields';

export default function RSVPProxyHolder(props) {

    const { state, actions } = useOvermind();
    // const { methods.register, errors, handleSubmit, watch, formState } = useForm({
    //     mode: 'onChange',
    //     validateCriteriaMode: "all"
    // });

    const methods = useForm({
        mode: 'onChange',
        validateCriteriaMode: "all"
    });
console.log(methods);

    const { title, data } = state.rsvp.proxyHolder;
    const {
        name,
        passport,
        address,
        numberOfShares,
        phoneNumber,
        email,
        uploadID,
        uploadArticleOfAssociation,
        uploadProxy,
        proxyOfShareHolderIdentity,
        captcha,
        userAcceptance,
        submitButton,
        infoText,
        successMsgTitle,
        successMsg,
        failedMsgTitle,
        failedMsg,
        redirectURL
    } = data || {};


    const watchHidCaptcha = methods.watch("hidGRecaptchaElement");

    const onSubmit = (data, e) => {
        console.log("Form submitted ", data, e)
    };

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // if(!window.grecaptcha) reCaptchaInitialize('v2');

        // console.log('watchHidCaptcha', watchHidCaptcha);

    }, [watchHidCaptcha]);

    useEffect(() => {
        // if (state.rsvp.isSIDKTPVerified) {
        //     // verifyCaptcha
        //     verifyCaptcha(captcha.hiddenField.name);
        // }
        // console.log('watchNoKtur', watchNoKtur);
        // console.log('watchNoSID', watchNoSID);

        // if ((watchNoKtur && watchNoKtur.length > KTP_SID_SEARCH_HIT_MIN_CHARS) && (watchNoSID && watchNoSID.length > KTP_SID_SEARCH_HIT_MIN_CHARS)) {
        //     console.log('trigger api call to verify use is having valid sid and ktp ');

        //     // actions.rsvp.verifyValidUser();

        //     actions.rsvp.updateSIDKTPVerifedStatus();

        //     // if(window.grecaptcha) grecaptcha.reset('gRecaptchaElement');
        // }
        if (!window.grecaptcha) reCaptchaInitialize('v2');

    });

    return (
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
                                ref={methods.register({
                                    required: name.validation.required_msg,
                                })}
                                type="text"
                                className="form-control"
                            />
                            <ErrorMessage as="p" errors={methods.errors} name={name.name} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor={passport.name} className="col-form-label">{passport.label} {passport.required ? (<span className="required">*</span>) : ''}</label>
                        <div className="">
                            <input id={passport.name} name={passport.name}
                                placeholder={passport.placeholder}
                                ref={methods.register({
                                    required: passport.validation.required_msg
                                })}
                                type="text"
                                className="form-control" />
                            <ErrorMessage as="p" errors={methods.errors} name={passport.name} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor={address.name} className="col-form-label">{address.label} {address.required ? (<span className="required">*</span>) : ''}</label>
                        <div className="">
                            <input id={address.name}
                                name={address.name}
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
                        <div className="file-box">
                            <label htmlFor={uploadID.name} className="input-file-label"><a className="button button--2 button--axiata">{uploadID.label}</a>
                                {uploadID.placeholder} {uploadID.required ? (<span className="required">*</span>) : ''}
                                <input id={uploadID.name}
                                    name={uploadID.name}
                                    ref={methods.register({
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
                        <ErrorMessage as="p" errors={methods.errors} name={uploadID.name} />
                    </div>

                    <div className="form-group">
                        <div className="file-box">
                            <label htmlFor={uploadArticleOfAssociation.name} className="input-file-label"><a className="button button--2 button--axiata">{uploadArticleOfAssociation.label}</a>
                                {uploadArticleOfAssociation.placeholder} {uploadArticleOfAssociation.required ? (<span className="required">*</span>) : ''}
                                <input id={uploadArticleOfAssociation.name}
                                    name={uploadArticleOfAssociation.name}
                                    ref={methods.register({
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
                        <ErrorMessage as="p" errors={methods.errors} name={uploadArticleOfAssociation.name} />
                    </div>

                    <div className="form-group">
                        <div className="file-box">
                            <label htmlFor={uploadProxy.name} className="input-file-label"><a className="button button--2 button--axiata">{uploadProxy.label}</a>
                                {uploadProxy.placeholder} {uploadID.required ? (<span className="required">*</span>) : ''}
                                <input id={uploadProxy.name}
                                    name={uploadProxy.name}
                                    ref={methods.register({
                                        required: uploadProxy.validation.required_msg
                                    })}
                                    type="file"
                                    className="input-file" />
                            </label>
                        </div>
                        {uploadProxy.fileInfoLine1 || uploadProxy.fileInfoLine2 ? (<div className="file-info">
                            {uploadProxy.fileInfoLine1 ? (<p>{uploadProxy.fileInfoLine1}</p>) : ''}
                            {uploadProxy.fileInfoLine2 ? (<p>{uploadProxy.fileInfoLine2}</p>) : ''}
                        </div>) : ''}
                        <ErrorMessage as="p" errors={methods.errors} name={uploadProxy.name} />
                    </div>

                    {/* Sub fields defination from different component for proxyOfShareHolderIdentity - START */}
                    <RSVPProxyHolderSubFields data={proxyOfShareHolderIdentity} />
                    {/* Sub fields defination from different component - END */}
                    <div className="clearfix">
                        <div className="form-check form-check-inline">
                            <input
                                name={userAcceptance.name}
                                id={userAcceptance.name}
                                ref={methods.register({
                                    required: userAcceptance.validation.required_msg
                                })}
                                type="checkbox"
                                className="form-check-label" />
                            <label
                                htmlFor={userAcceptance.name}
                                className="col-form-label pl-1"> {userAcceptance.label}</label>
                        </div>
                        <ErrorMessage as="p" errors={methods.errors} name={userAcceptance.name} />
                    </div>

                    <div className="form-group">
                        <div className="g-recaptcha" id={captcha.id}></div>
                        <input type="hidden" name={captcha.hiddenField.name} defaultValue={state.rsvp.captchaValue}
                            ref={methods.register({
                                required: captcha.validation.required_msg
                            })} />
                        <ErrorMessage as="p" errors={methods.errors} name={captcha.hiddenField.name} />
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
                </React.Fragment>
                {/* ) : (<div className="text-center text-info">{infoText}</div>)} */}

            </form>
        </FormContext>);
}
