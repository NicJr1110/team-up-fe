import { connect } from 'react-redux';
import Counter from "./Counter";
import { handleTeamCount } from "../../Data/Actions/actions";

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (value) => dispatch(handleTeamCount(value))
    };
};

export default connect(null, mapDispatchToProps)(Counter);
