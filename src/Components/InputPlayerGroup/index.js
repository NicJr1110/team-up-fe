import { connect } from 'react-redux';
import InputPlayerGroup from "./InputPlayerGroup";
import { handleProgress } from "../../Data/Actions/actions"


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


export default connect(mapStateToProps, mapDispatchToProps)(InputPlayerGroup);
