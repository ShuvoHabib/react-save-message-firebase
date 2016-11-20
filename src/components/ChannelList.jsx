import React from 'react';
import Channel from './Channel.jsx';

class ChannelList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      channels: [
        'Dogs',
        'Cats'
      ]
    };
  }

  render(){
    var channelNodes = this.state.channels.map((channel)=> {
      return (
        <Channel channel={channel} />
      );
    });

    return (
      <div className="col-xs-3">
        <div>
          {channelNodes}
        </div>
      </div>
    );
  }
}

export default ChannelList;
