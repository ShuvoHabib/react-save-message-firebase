import React from 'react';

class Message extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div
        leftAvatar={<div src="https://lh5.googleusercontent.com/--NpXExobqfc/AAAAAAAAAAI/AAAAAAAAA9A/rJmu_EPyr4c/photo.jpg" />}
      >{this.props.message}</div>
    );
  }
}

export default Message;
