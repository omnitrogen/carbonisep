import React from "react";
import Avatar from "./Avatar";

export default class Friend extends React.Component {
    render() {
        return (
            <div className="w-50">
                <div className="d-flex p-3">
                    <Avatar />
                    <p className="ml-2 mt-3 h-100">Jean Dujardin</p>
                </div>
            </div>
        );
    }
}
