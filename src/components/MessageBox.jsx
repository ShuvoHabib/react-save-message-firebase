import React from 'react';
import trim from 'trim';
import Firebase from 'firebase';

class MessageBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: ''
    }
    this.firebaseRef = new Firebase('https://savedoc-62350.firebaseio.com/messages');
  }

  onChange(evt){
    this.setState({
      message: evt.target.value
    });
  }

  onKeyUp(evt){
    if(evt.keyCode === 13 && trim(evt.target.value) != ''){
      evt.preventDefault();

      this.firebaseRef.push({
        message: this.state.message
      });

      this.setState({
        message: ''
      });

    }
  }

  render(){
    return (
      <div>
        <textarea
          value={this.state.message}
          onChange={this.onChange.bind(this)}
          onKeyUp={this.onKeyUp.bind(this)}
          style={{
            width: '100%',
            borderColor: '#D0D0D0',
            resize: 'none',
            borderRadius: 3,
            minHeight: 50,
            color: '#555',
            fontSize: 14,
            outline: 'auto 0px'
          }} />
      </div>
    );
  }
}

export default MessageBox;
