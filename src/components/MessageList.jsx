import React from 'react';
import Message from './Message.jsx';
import Firebase from 'firebase';
import _ from 'lodash';

class MessageList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: {}
    };

    this.firebaseRef = new Firebase('https://savedoc-62350.firebaseio.com/messages');
    this.firebaseRef.on("child_added", (msg)=> {
      if(this.state.messages[msg.key()]){
        return;
      }

      let msgVal = msg.val();
      msgVal.key = msg.key();
      this.state.messages[msgVal.key] = msgVal;
      this.setState({messages: this.state.messages});
    });

    this.firebaseRef.on("child_removed", (msg)=> {
      var key = msg.key();
      delete this.state.messages[key];
      this.setState({messages: this.state.messages});
    });
  }

  render(){
    var messageNodes = _.values(this.state.messages).map((message)=> {
      return (
        <Message message={message.message} />
      );
    });

    return (
      <div  className="col-xs-9">
        <div>
          {messageNodes}
        </div>
      </div>
    );
  }
}

export default MessageList;
