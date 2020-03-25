
export const triggerFetching = ({ state, effects, actions }, value) => {
    state.isFetching = value;
};