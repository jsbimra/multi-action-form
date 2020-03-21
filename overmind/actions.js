export const updateQRScanResult = ({state, effects, actions }, value) => {
    // console.log("Updating updateQRScanResult", value, state);
    state.qrScan.result = value;
}

export const triggerFetching = ({state, effects, actions }, value) => {
    state.isFetching = value;
};