import React from "react";
import ProfileNavbar from "./ProfileNavbar";
import SideNavbar from "./SideNavbar";
import FriendsNavbar from "./FriendsNavbar";

export default class ConnectedNavbars extends React.Component {
    render() {
        return (
            <div>
                <ProfileNavbar />
                <div className="">
                    <SideNavbar />
                    <div
                        className="position-absolute"
                        style={{
                            left: "15%",
                            right: "15%",
                            overflow: "hidden",
                        }}
                    ></div>
                    <FriendsNavbar />
                </div>
            </div>
        );
    }
}
