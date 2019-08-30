import {connect} from 'react-redux';
import Dialogs from './Dialogs.jsx'
import {sendMessageCreator} from '../../redux/dialogs-reducer.js';
import {withAuthRedirect} from "../../hoc/withAuthRedirect.js";
import {compose} from "redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    }
  }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
