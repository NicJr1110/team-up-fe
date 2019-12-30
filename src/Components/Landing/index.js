import { connect } from 'react-redux';
import Landing from "./Landing";
import { handleProgress } from "../../Data/Actions/actions";

const mapStateToProps = state => {
    return {
        stage: state.stage,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => dispatch(handleProgress())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
