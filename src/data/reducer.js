import initial from "./initial";

const addTeamCount = state => ({ ...state, totalTeams: state.totalTeams + 1});
const minusTeamCount = state => ({ ...state, totalTeams: state.totalTeams - 1});

const reducer = (state, action) => {
    switch (action.type) {
        case "increment": return addTeamCount(state);
        case "decrement": return minusTeamCount(state);
        default: return state;
    }
}

export default reducer;