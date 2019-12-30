

const saveTeamTotal = (state, { value }) => ({ ...state, totalTeams: value })
const savePlayerTotal = (state, { value }) => ({ ...state, totalPlayers: value })
const addPlayer = (state, { name }) => ({...state, players: [...state.players, name]})

const reducer = (state, action) => {
    switch (action.type) {
        case "saveTeamCount": return saveTeamTotal(state, action);
        case "savePlayerCount": return savePlayerTotal(state, action);
        case "addPlayer": return addPlayer(state,action);
        default: return state;
    }
}

export default reducer;