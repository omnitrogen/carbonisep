import React from "react";
import FriendsList from "../FriendsList";

export default class FriendsNavbar extends React.Component {
    render() {
        return (
            <div
                className="position-absolute p-4 d-flex flex-column bg-light"
                style={{
                    borderStyle: "solid",
                    borderColor: "#88B03C",
                    right: 0,
                    overflow: "hidden",
                    height: "85%",
                }}
            >
                <h1>Amis</h1>
                <FriendsList />
            </div>
        );
    }
}
