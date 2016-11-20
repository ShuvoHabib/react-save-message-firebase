import React from 'react';

class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="message-list"
                 leftAvatar={<div
                     src="https://lh5.googleusercontent.com/--NpXExobqfc/AAAAAAAAAAI/AAAAAAAAA9A/rJmu_EPyr4c/photo.jpg"/>}
            >
                <div>{this.props.message}</div>
            </div>
        );
    }
}

export default Message;
