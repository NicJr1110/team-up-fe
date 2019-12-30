import { connect } from 'react-redux';
import TeamCards from "./TeamCards";


const mapStateToProps = ({ stage, teams }) => {
    return {
        stage,
        teams,
    };
};

export default connect(mapStateToProps)(TeamCards);