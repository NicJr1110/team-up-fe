import initial from "./initial";


const saveTeamTotal = (state, { value }) => ({ ...state, totalTeams: value })
const savePlayerTotal = (state, { value }) => ({ ...state, totalPlayers: value })
const addPlayer = (state, { name }) => ({...state, players: [...state.players, name]})

// This is will used to navigate through the application/components, Linked to componets to specific stages
const progressStage = (state) => ({...state, stage: state.stage + 1})


// As part of the team splitting, i wanted to suffle the array randomly first so that the teams would be random
function shuffleArray(array) {

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


// The following function was used to split the array of players into the set number of teams with the and remainders being shared equally.
function splitTeams(arr, teamCount) {
    // first shuffle the array so that its random. 
    let newArr = shuffleArray(arr);
    //declare the array into which the team arrays will be inserted
    const teams = [];
    while(newArr.length) {
      //calculates the size of the team that is needed. this will change through the duration of the while loop if the total players isn't divisible by the number of teams. each time the teamCount will decrease by 1 until 0. at 0 the while loop stops.
      const teamSize = Math.ceil(newArr.length / teamCount--); 
      // slice used to create a the team the first teamSize from the arr,
      const team = newArr.slice(0, teamSize);
      // push this arr into the teams array
      teams.push(team);
      // reassigning the value of newArr to the remaining values for the process to continue.
      newArr = newArr.slice(teamSize);
      
    }
    return teams;
}

const generateTeams = (state) => ({...state, teams: (splitTeams(state.players, state.totalTeams)), stage: state.stage + 1});

const resetApp = (state) => ({...state, 
    totalTeams: initial.totalTeams,
    totalPlayers: initial.totalPlayers,
    stage: initial.stage,
    players: initial.players,
    teams: initial.teams,
})


// used to remove the deleted player 
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