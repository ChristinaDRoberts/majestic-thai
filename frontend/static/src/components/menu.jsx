
import React, { Component } from 'react';

class Menu extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <div className="mainMenu">
                <h1>Welcome to Majestic Thai</h1>
            </div>)
     }

    }

class MenuList extends Component {
    constructor(props) {
        super(props)


    }
    render() {
        return (
            <div className="menuList">
                <ul>
                    <li> Order.message</li>
                    <li>Order.name</li>
                    <li>Order.status</li>
                </ul>
            </div>

        )
    }

}

export default Menu;
// export default MenuList;


