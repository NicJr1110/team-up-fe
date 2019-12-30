import { connect } from 'react-redux';
import TeamSplitter from "./TeamSplitter";
import { handleSplitTeam } from "../../Data/Actions/actions";

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: () => dispatch(handleSplitTeam())
    };
};

export default connect(null, mapDispatchToProps)(TeamSplitter);
