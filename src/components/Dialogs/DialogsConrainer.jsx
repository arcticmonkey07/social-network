import {connect} from 'react-redux';
import Dialogs from './Dialogs.jsx'
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs-reducer.js';
import {withAuthRedirect} from "../../hoc/withAuthRedirect.js";
import {compose} from "redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
