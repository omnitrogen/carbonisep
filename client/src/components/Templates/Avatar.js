import React, { Component } from "react";
import defaultAvatar from "../../assets/default_avatar.png";

export default class Avatar extends Component {
    render() {
        return (
            <div>
                {/*change_src if user has photo */}
                <img src={defaultAvatar} className="" alt="avatar" />
            </div>
        );
    }
}
