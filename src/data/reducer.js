import initial from "./initial";

const saveTeamTotal = (state, { value }) => ({ ...state, totalTeams: value })
const savePlayerTotal = (state, { value }) => ({ ...state, totalPlayers: value })
const addPlayer = (state, { name }) => ({...state, players: [...state.players, name]})
const progressStage = (state) => ({...state, stage: state.stage + 1})

function shuffleArray(array) {

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function splitTeams(arr, chunkCount) {
    let newArr = shuffleArray(arr);
    const chunks = [];
    while(newArr.length) {
      const chunkSize = Math.ceil(newArr.length / chunkCount--);
      const chunk = newArr.slice(0, chunkSize);
      chunks.push(chunk);
      newArr = newArr.slice(chunkSize);
      
    }
    return chunks;
}

const generateTeams = (state) => ({...state, teams: (splitTeams(state.players, state.totalTeams)), stage: state.stage + 1});

const resetApp = (state) => ({...state, 
    totalTeams: initial.totalTeams,
    totalPlayers: initial.totalPlayers,
    stage: initial.stage,
    players: initial.players,
    teams: initial.teams,
})

const splice = (arr, index)=> {
        return arr.filter ((_, i) => {
            return i !== index
        }
    );
} 

const deletePlayer = (state, { index }) => ({...state, players: splice(state.players, index)})


const reducer = (state, action) => {
    switch (action.type) {
        case "saveTeamCount": return saveTeamTotal(state, action);
        case "savePlayerCount": return savePlayerTotal(state, action);
        case "addPlayer": return addPlayer(state,action);
        case "splitTeams": return generateTeams(state);
        case "progressStage": return progressStage(state);
        case "resetApp": return resetApp(state);
        case "deletePlayer": return deletePlayer(state, action);
        default: return state;
    }
}

export default reducer;