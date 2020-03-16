export const handleChangeRSVPType = ({state, effects, actions}, value) => {
    console.log('handleChangeRSVPType value received ', value);
    state.rsvp.selectedType = value;
}

export const updateSIDKTPVerifedStatus = ({state, effects, actions}, value) => {
    console.log('updateSIDKTPVerifedStatus value received ', value);
    actions.rsvp.verifyValidUser();
}

export const verifyValidUser = async ({state, effects}) => {
    console.log('verifyValidUser value received ', );
    // conso
    const resp = await effects.rsvp.api.getSIDKTPVerifiedStatus();

    console.log('response data ', resp.data);

    if (resp.data && resp.data.quote) {
        // state.rsvp.personal.data = resp.data;
        state.rsvp.isSIDKTPVerified = true;
    } else {
        state.rsvp.isSIDKTPVerified = false;
    }
}

export const updateVerifyCaptchaStatus = ({state, effects, actions}, value) => {

}

