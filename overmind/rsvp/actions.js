import { reCaptchaInitialize } from "../../util";
import { LS_KEY } from "../../util/constants";

export const handleChangeRSVPType = ({ state, effects, actions }, value) => {
    // console.log('handleChangeRSVPType value received ', value);
    state.rsvp.selectedType = value;
}

export const updateKTPOrPassportState = ({ state, effects, actions }, payload) => {
    // console.log('updateKTPOrPassportState value received ', value);

    if (payload.stateName && payload.value) {
        state.rsvp[payload.stateName] = payload.value;
    }
    else if (payload) {
        state.rsvp.ktpOrPassport = payload;
    }
}

export const updateFormState = ({ state }, value) => {
    // console.log('updateFormState value: ', value);

    if (value.type && value.data) {
        switch (value.type) {
            case 'personal':
                state.rsvp.personal = value.data;
                break;
            case 'entity':
                state.rsvp.entity = value.data;
                break;
            case 'proxyholder':
                state.rsvp.proxyholder = value.data;
                break;

            default:
                state.rsvp.personal = value.data;
                break;
        }
    }
}

export const updateSubmitSuccess = ({ state }, value) => {
    // console.log('updateSubmitSuccess fired', value)
    if (value && typeof value === 'boolean') {
        state.rsvp.isSubmitSuccess = value;
    }
};

export const updateSIDKTPVerifedStatus = ({ state, effects, actions }, payload) => {
    // console.log('updateSIDKTPVerifedStatus payload received ', payload);
    state.rsvp.isSIDKTPVerified = payload;
    state.rsvp.ktpOrPassport = 1;
}

export const verifyValidSIDKTPUser = async ({ state, actions, effects }, payload) => {
    // console.log('verifyValidSIDKTPUser value received ', value);

    if (payload) {
        actions.triggerFetching(true);

        const resp = await effects.rsvp.api.getSIDKTPVerifiedStatus(payload);
        // console.log('response ', resp);

        //If no response due to no API network connectivity or API not working
        if (resp) {
            const { data, messages, statusCode } = resp.data;
            // console.log('response data ', data);
            // console.log('state.rsvp.isSIDKTPVerified ', state.rsvp.isSIDKTPVerified);

            if (data && data.identityNumber) {
                // state.rsvp.personal.data = resp.data;
                state.rsvp.isSIDKTPVerified = true;
                // console.log('IN CONDITION state.rsvp.isSIDKTPVerified ', state.rsvp.isSIDKTPVerified);
                actions.triggerFetching(false);

                return data;
            }
            if (data && !data.identityNumber && messages && statusCode) {
                state.rsvp.isSIDKTPVerified = false;
                actions.triggerFetching(false);

                return { errors: { message: messages, statusCode } };
            }

            actions.triggerFetching(false);

        }
        else {
            actions.triggerFetching(false);
            return { errors: { message: "Network Error: Sorry server is down try again later", statusCode: null } };
        }
    }
    else {
        actions.triggerFetching(false);
        console.error(new Error("Whoops no post data set"));
    }
}

export const updateVerifyCaptchaStatus = ({ state, effects, actions }, payload) => {

}

export const handleAPIResponeError = ({ state, effects, actions }, payload) => {
    // console.log('Hanlding API response error ', payload)
    if (payload && payload.errors) {
        state.rsvp.errors = payload.errors;
    }
}

export const handleSubmitFormRequest = async ({ state, effects, actions }, payload) => {
    // console.log('handleSubmitFormRequest value', payload);
    state.rsvp.isSubmitting = true;

    const result = await effects.rsvp.api.submitForm(payload)
    // console.log('response  ', result );

    // const result = await resp.json();
    // console.log('result  using fetch ', result);

    //If no response due to no API network connectivity or API not working
    if (result && result.data) {
        const { data, messages, statusCode } = result.data;
        // console.log('response data ', data);

        //return if post is successfull need to compelete this code upon be service is available
        if (data && messages && statusCode && statusCode === '00') {
            // console.log('in form submit sucess case')
            state.rsvp.isSubmitSuccess = true;
            state.rsvp.isSubmitting = false;
            return { success: { message: messages, statusCode } };
        }

        if (data && messages && statusCode && statusCode === '01') {
            // console.log('in form submit error case')
            state.rsvp.isSubmitSuccess = false;
            state.rsvp.isSubmitting = false;
            return { errors: { message: messages, statusCode } };
        }
        // console.log('handle submit form request response ', result);
    }
    else {
        state.rsvp.isSubmitting = false;
        state.rsvp.isSubmitSuccess = false;
        return { errors: { message: "Network Error: Sorry server is down try again later", statusCode: null } };
    }
}

export const verifyCaptchaRequest = async ({ state, effects, actions }, value) => {

    if (value) {
        const payload = JSON.stringify({ "g-recaptcha-response": value });

        const resp = await effects.rsvp.api.verifyCaptchaRequest(payload)
        //If no response due to no API network connectivity or API not working
        if (resp) {
            const { data, messages, statusCode } = resp.data;
            // console.log('response data ', data);

            if (data) {
                return { success: { message: messages, statusCode } };
            }
            if (data && !data.identityNumber && messages && statusCode) {

                return { errors: { message: messages, statusCode } };
            }
        }
        else {
            return { errors: { message: "Network Error: Sorry server is down try again later", statusCode: null } };
        }
        console.log('handle verify captcha before form submit response ', resp);
    }
}


export const updateFileListValue = ({ state, effects, actions }, payload) => {
    const { fieldName, file } = payload;
    const name = file[0].name;
    state.rsvp.filesList = {
        ...state.rsvp.filesList,
        [fieldName]: name
    };
    // console.log('updateFileListValue updated', state.rsvp.filesList)
}