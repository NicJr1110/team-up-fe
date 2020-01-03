import { connect } from 'react-redux';
import TeamSplitter from "./TeamSplitter";
import { handleSplitTeam, handleProgress } from "../../Data/Actions/actions";

const mapStateToProps = state => {
    return {
        stage: state.stage,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: () => dispatch(handleSplitTeam())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamSplitter);
