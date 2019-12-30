import { connect } from 'react-redux';
import PlayerList from "./PlayerList";


const mapStateToProps = ({ players }) => {
    return {
        players,
    };
};

export default connect(mapStateToProps)(PlayerList);