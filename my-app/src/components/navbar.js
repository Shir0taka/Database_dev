import React, { Component } from "react";

class Navbar extends Component {
    constructor() {
        super();
        this.navigation = [
            {
                id: 1,
                text: "Main",
                url: "/main"
            },
            {
                id: 2,
                text: "About",
                url: "/about"
            }
        ]
        this.itemList = [];
        this.navigation.forEach((Object, index)=>{
            this.itemList.push(
                <div>
                    <a href={Object.url}>
                        {Object.text}
                    </a>
                </div>
            )
        })
    }
    render() {
        return (
            <nav>
                {this.itemList}
            </nav>
        );
    }
}

export default Navbar;