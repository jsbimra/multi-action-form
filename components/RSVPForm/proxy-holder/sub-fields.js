import React, { useEffect } from 'react';
import { ErrorMessage, useFormContext } from 'react-hook-form';
import { useOvermind } from '../../../overmind';
import { emailPattern, KTP_SID_SEARCH_HIT_MIN_CHARS, phonePattern1 } from '../../../util/constants';
import { verifyCaptcha } from '../../../util/index';


export default function RSVPProxyHolderSubFields(props) {

    const { state, actions } = useOvermind();
    const {
        register,
        errors,
      } = useFormContext();

    console.log('data from props', props.data);

    const { label, required, subFields } = props.data;
    const {
        numberKTUR,
        numberSID,
        name,
        numberKTPOrPassport,
        address,
        numberOfShares,
        phoneNumber,
        email,
        uploadID,
        uploadArticleOfAssociation,
    } = subFields || {};

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // if(!window.grecaptcha) reCaptchaInitialize('v2');
        // console.log('watchHidCaptcha', watchHidCaptcha);
    });

    return (
        <div>
            {/* <pre> {data && JSON.stringify(data, null, 2)}</pre> */}
            <h5>{label} {required ? (<span className="required">*</span>) : ''}</h5>
            <div className="form-group">
                <label htmlFor={numberKTUR.name} className="col-form-label">{numberKTUR.label} {numberKTUR.required ? (<span className="required">*</span>) : ''}</label>
                <div className="">
                    <input id={numberKTUR.name} name={numberKTUR.name}
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
                <label htmlFor={numberSID.name} className="col-form-label">{numberSID.label} {numberSID.required ? (<span className="required">*</span>) : ''}</label>
                <div className="">
                    <input id={numberSID.name} name={numberSID.name}
                        placeholder={numberSID.placeholder}
                        ref={register({
                            required: numberSID.validation.required_msg,
                            minLength: {
                                value: 6,
                                message: numberSID.validation.minlength_msg
                            }
                        })}
                        type="text"
                        className="form-control" />
                    <ErrorMessage as="p" errors={errors} name={numberSID.name} />
                </div>
            </div>
            {/* {'state.rsvp.isSIDKTPVerified : ' + state.rsvp.isSIDKTPVerified} */}
            {/* {
                state.rsvp.isSIDKTPVerified === true ? ( */}
                    <React.Fragment>
                        <div className="form-group">
                            <label htmlFor={name.name} className="col-form-label">{name.label} {name.required ? (<span className="required">*</span>) : ''}</label>
                            <div className="">
                                <input id={name.name}
                                    name={name.name}
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
                            <label htmlFor={numberKTPOrPassport.name} className="col-form-label">{numberKTPOrPassport.label} {numberKTPOrPassport.required ? (<span className="required">*</span>) : ''}</label>
                            <div className="">
                                <input id={numberKTPOrPassport.name} name={numberKTPOrPassport.name}
                                    placeholder={numberKTPOrPassport.placeholder}
                                    ref={register({
                                        required: numberKTPOrPassport.validation.required_msg
                                    })}
                                    type="text"
                                    className="form-control" />
                                <ErrorMessage as="p" errors={errors} name={numberKTPOrPassport.name} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor={address.name} className="col-form-label">{address.label} {address.required ? (<span className="required">*</span>) : ''}</label>
                            <div className="">
                                <input id={address.name}
                                    name={address.name}
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
                    </React.Fragment>
                    {/* ) : ("Please set subFields data")} */}

        </div>
    );
}
