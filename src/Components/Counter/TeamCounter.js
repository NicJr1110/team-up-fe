import { connect } from 'react-redux';
import Counter from "./Counter";
import { handleTeamCount, handleProgress } from "../../Data/Actions/actions";

const mapStateToProps = state => {
    return {
        stage: state.stage,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (value) => dispatch(handleTeamCount(value)),
        handleProgress: () => dispatch(handleProgress()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
