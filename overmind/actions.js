
export const triggerFetching = ({ state, effects, actions }, value) => {
    state.isFetching = value;
};

export const updateAppLoadingState = ({state, effects, actions }, value) => {
    state.appLoading = value || false;
}