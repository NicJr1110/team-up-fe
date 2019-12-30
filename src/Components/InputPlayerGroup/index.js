import { connect } from 'react-redux';
import InputPlayerGroup from "./InputPlayerGroup";
import { handleProgress } from "../../Data/Actions/actions"


const mapStateToProps = state => {
    return {
        stage: state.stage,
        players: state.players,
        totalTeams: state.totalTeams,

    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => dispatch(handleProgress())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(InputPlayerGroup);
