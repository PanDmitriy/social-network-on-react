import { connect } from 'react-redux';
import { sendMessage } from '../../../Redux/dialogsReducer';
import { FormSendMessage } from './FormSendMessage';

export const FormSendMessageContainer = connect(null,{
  sendMessage,
})(FormSendMessage);