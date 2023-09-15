import { Wrapper, A } from './styles';
import styles from './styles.module.css'

import LoginControl from '../LoginControl';

const Navbar = () => {
    const navigation = [
        { id: 1, text: "Main", url: "/" },
        { id: 2, text: "About", url: "/about" },
        { id: 3, text: "Admin", url: "/admin" },
        { id: 4, text: "LoginForm", url: "/login" },
        { id: 5, text: "Register", url: "/register" },
        { id: 6, text: "Numbers", url: "/numbers" },
        { id: 7, text: "Test", url: "/test" },
        { id: 8, text: "Redux", url: "/redux" },
    ]
    let itemList = [];
    navigation.forEach((object, index)=>{
        itemList.push( <div key={object.id}><a className={styles.a} href={object.url}>{object.text}</a></div>)
    })
    return (
        <div className={styles.wrapper}>
            { itemList }
            <div>
                <LoginControl/>
            </div>
        </div>
    );
}

export default Navbar;