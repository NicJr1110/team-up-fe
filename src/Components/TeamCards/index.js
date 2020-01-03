import { connect } from 'react-redux';
import TeamCards from "./TeamCards";
import { handleReset } from "../../Data/Actions/actions";


const mapStateToProps = ({ stage, teams }) => {
    return {
        stage,
        teams,
    };
};

const mapDispatchToProps = dispatch => {
    return{
        handleClick: () => dispatch(handleReset())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamCards);