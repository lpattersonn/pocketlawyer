import { prop } from 'ramda';
import React, { useRef, useEffect } from 'react';
import Message from './Messages';
import "../Styles/message.css";

function MessageList(props) {
  const element = useRef(null);
  const elementCurrent = prop('current', element);

  useEffect(() => {
    if (elementCurrent) {
      elementCurrent.scrollTop = elementCurrent.scrollHeight;
    }
  }, [props]);

  return (
    <div className="sc-message-list">
      {props.messages.map((message, i) => <Message message={message} key={i} />)}
    </div>
  );
}

export default MessageList;
