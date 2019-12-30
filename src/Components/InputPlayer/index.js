import { connect } from 'react-redux';
import InputPlayer from "./InputPlayer";
import { handleAddPlayer } from "../../Data/Actions/actions";

const mapDispatchToProps = dispatch => {
    return {
        handleAddPlayer: (name) => dispatch(handleAddPlayer(name))
    };
};

export default connect(null, mapDispatchToProps)(InputPlayer);
