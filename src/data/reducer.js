
const saveTeamTotal = (state, { value }) => ({ ...state, totalTeams: value })

const reducer = (state, action) => {
    switch (action.type) {
        case "saveTeamCount": return saveTeamTotal(state, action);
        default: return state;
    }
}

export default reducer;