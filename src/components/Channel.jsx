import React from 'react';

class Channel extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>{this.props.channel}</div>
    );
  }
}

export default Channel;
