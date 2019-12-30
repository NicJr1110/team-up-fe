import { connect } from 'react-redux';
import Counter from "./Counter";
import { handlePlayerCount } from "../../Data/Actions/actions";

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (value) => dispatch(handlePlayerCount(value))
    };
};

export default connect(null, mapDispatchToProps)(Counter);
