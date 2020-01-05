import { connect } from 'react-redux';
import PlayerList from "./PlayerList";
import { handleDelete } from "../../Data/Actions/actions.js";

const mapStateToProps = ({ players }) => {
    return {
        players,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleClick: (i) => dispatch(handleDelete(i)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(PlayerList);