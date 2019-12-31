import { connect } from 'react-redux';
import Application from "./Application";


const mapStateToProps = ({ stage }) => {
    return {
        stage,
    }
}

export default connect(mapStateToProps)(Application);