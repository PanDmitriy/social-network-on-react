import { connect } from 'react-redux';
import { sendMessageActionCreate } from '../../../Redux/dialogsReducer';
import { FormSendMessage } from './FormSendMessage';

const mapDispatchToProps = (dispatch) => {
  return {
      sendMessage: (text) => {
        dispatch(sendMessageActionCreate(text))
      }
    }
}

export const FormSendMessageContainer = connect(null,mapDispatchToProps)(FormSendMessage);