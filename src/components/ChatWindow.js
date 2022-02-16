import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MessageList from './MessageList';
import UserInput from './UserInput';
import Header from './Header';
import PinMessage from './PinMessage';

function ChatWindow(props) {
  // const {
  //   isOpen,
  //   onClose,
  //   agentProfile,
  //   showEmoji,
  //   fileUpload,
  //   messageList,
  //   onUserInputSubmit,
  //   onFilesSelected,
  //   pinMessage,
	//   onPinMessage,
  //   placeholder,
  // } = props;

  // const {
  //   teamName,
  //   imageUrl,
  // } = agentProfile;

  return (
  <div className='sc-chat-window'>

       {/* <Header
        teamName={teamName}
        imageUrl={imageUrl}
        onClose={onClose}
      /> 

      {/* {pinMessage && <PinMessage pinMessage={pinMessage} onPinMessage={onPinMessage} />} */}
      
      <MessageList
        messages={[]}
        imageUrl={"https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9hNDE3NTFiNWUxMDAxYWJlNjE3NjA3ZjMxYzI2NTU5Yz9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.BmbsZ0tJHd0a2Qlxk-p7Gci99M1o9-64cIhpMyKT8ek"}
      />

      <UserInput
    
      /> 
    </div>
  );
}

// ChatWindow.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
//   agentProfile: PropTypes.object.isRequired,
//   showEmoji: PropTypes.bool,
//   fileUpload: PropTypes.bool,
//   messageList: PropTypes.array,
//   onUserInputSubmit: PropTypes.func.isRequired,
//   onFilesSelected: PropTypes.func,
//   pinMessage: PropTypes.object,
//   onPinMessage: PropTypes.func,
//   placeholder: PropTypes.string,
// };

export default ChatWindow;
