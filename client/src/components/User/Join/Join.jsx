import React from "react";
import Button from "react-bootstrap/Button";

import { Navigation } from "components/App/Navigation";

const noms = ["Jean", "Pierre", "Martin", "Paul", "François"];
const listItems = noms.map((nom) => <li>{nom}</li>);

const url = new URL(window.location.href);
const code = url.searchParams.get("code");

const owner = true;

function startbutton() {
    if (owner) {
        return (
            <Button variant="success" href="home" size="lg" type="submit">
                {"Lancer la partie"}
            </Button>
        );
    }
    return "";
}

function copier() {
    document.getElementById("LienPartage").select();
    document.execCommand("copy");
    return false;
}

function Join() {
    return (
        <div>
            <Navigation />
            <div
                style={{
                    width: 800,
                    margin: "auto",
                }}
            >
                <div
                    style={{
                        border: "solid 1px black",
                        borderRadius: 25,
                        textAlign: "center",
                        fontSize: 32,
                        fontWeight: "bold",
                    }}
                >
                    <p>Join the game :</p>
                    <p>Code : {code}</p>
                </div>
                <div>
                    <ul
                        style={{
                            listStyleType: "none",
                            fontSize: 25,
                            padding: 20,
                        }}
                    >
                        {listItems}
                    </ul>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        padding: "50px",
                    }}
                >
                    <input
                        readOnly
                        id="LienPartage"
                        value={url}
                        style={{
                            width: 500,
                            fontSize: 20,
                            border: "1px solid black",
                            boxSizing: "border-box",
                            boxShadow: "0px 4px 4px #888888",
                            borderRadius: 5,
                            padding: "3px 12px",
                        }}
                    />
                    <Button variant="primary" type="button" onClick={copier}>
                        Copier
                    </Button>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        padding: "50px",
                    }}
                >
                    <Button
                        variant="danger"
                        href="home"
                        size="lg"
                        type="submit"
                    >
                        Quitter la partie
                    </Button>
                    {startbutton()}
                </div>
            </div>
        </div>
    );
}

export { Join };

// Code de Jaques en dessous
// Il y avait deux versions de Join donc j'en ai gardé une et mise l'autre en dessous en commentaire en attendant de voir...

// import React, { Component } from "react";
// import Button from "react-bootstrap/Button";
// import { Redirect } from "react-router-dom";
// import NotFound from "./NotFound";

// const noms = ["Jean", "Pierre", "Martin", "Paul", "François"];
// const listItems = noms.map((nom) => <li>{nom}</li>);

// const url = new URL(window.location.href);
// const code = url.searchParams.get("code");

// const owner = true;

// export default class Join extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             loading: true,
//         };
//     }

//     componentWillMount() {
//         fetch("http://localhost:8000/join?code=" + code)
//             .then((res) => res.json())
//             .then((res) =>
//                 this.setState({ loading: false, gameExist: res.exist })
//             );
//     }

//     render() {
//         return this.state.loading ? this.page_loading() : this.page();
//     }

//     page_loading() {
//         return <br />;
//     }
//     page() {
//         if (!this.state.gameExist) {
//             return <NotFound />;
//         }
//         return (
//             <div
//                 style={{
//                     width: 800,
//                     margin: "auto",
//                 }}
//             >
//                 <div
//                     style={{
//                         margin: 15,
//                         border: "solid 1px black",
//                         borderRadius: 25,
//                         textAlign: "center",
//                         fontSize: 32,
//                         fontWeight: "bold",
//                     }}
//                 >
//                     <p>Join the game :</p>
//                     <p>Code : {code}</p>
//                 </div>
//                 <div>
//                     <ul
//                         style={{
//                             listStyleType: "none",
//                             fontSize: 25,
//                             padding: 20,
//                         }}
//                     >
//                         {listItems}
//                     </ul>
//                 </div>
//                 <div
//                     style={{
//                         display: "flex",
//                         justifyContent: "space-around",
//                         alignItems: "center",
//                         padding: "50px",
//                     }}
//                 >
//                     <input
//                         readOnly
//                         id="LienPartage"
//                         value={url}
//                         style={{
//                             width: 500,
//                             fontSize: 20,
//                             border: "1px solid black",
//                             boxSizing: "border-box",
//                             boxShadow: "0px 4px 4px #888888",
//                             borderRadius: 5,
//                             padding: "3px 12px",
//                         }}
//                     />
//                     <Button
//                         variant="primary"
//                         type="button"
//                         onClick={this.copier}
//                     >
//                         Copier
//                     </Button>
//                 </div>
//                 <div
//                     style={{
//                         display: "flex",
//                         justifyContent: "space-around",
//                         alignItems: "center",
//                         padding: "50px",
//                     }}
//                 >
//                     <Button
//                         variant="danger"
//                         href="home"
//                         size="lg"
//                         type="submit"
//                     >
//                         Quitter la partie
//                     </Button>
//                     <Button
//                         variant="success"
//                         href="home"
//                         size="lg"
//                         type="submit"
//                         style={{ display: owner ? "auto" : "none" }}
//                     >
//                         Lancer la partie
//                     </Button>
//                 </div>
//             </div>
//         );
//     }

//     copier() {
//         document.getElementById("LienPartage").select();
//         document.execCommand("copy");
//         return false;
//     }
// }
