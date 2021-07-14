import { connect } from 'react-redux';
import { Dialogs } from './Dialogs';

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages
  }
}

export const DialogsContainer = connect(mapStateToProps, null)(Dialogs);