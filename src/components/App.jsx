import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <div>
                    <MessageList />
                </div>
                <div className="col-xs-9">
                    <MessageBox />
                </div>
            </div>
        );
    }
}

export default App;
