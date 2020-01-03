

export const handleTeamCount = (value) => {
    return {
        type: "saveTeamCount",
        value: +value
    }
}

export const handlePlayerCount = (value) => {
    return {
        type: "savePlayerCount",
        value: +value
    }
}

export const handleAddPlayer = (name) => {
    return {
        type:"addPlayer",
        name: name
    }
}

export const handleSplitTeam = () => {
    return {
        type: "splitTeams"
    }
}

export const handleProgress = () => {
    return {
        type: "progressStage"
    }
}

export const handleReset = () => {
    return {
        type: "resetApp"
    }
}