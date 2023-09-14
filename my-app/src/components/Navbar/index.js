import { Wrapper, A } from './styles';
import LoginControl from '../LoginControl';

const Navbar = () => {
    const navigation = [
        { id: 1, text: "Main", url: "/" },
        { id: 2, text: "About", url: "/about" }
    ]
    let itemList = [];
    navigation.forEach((object, index)=>{
        itemList.push( <div key={object.id}><A href={object.url}>{object.text}</A></div>)
    })
    return (
        <Wrapper>
            { itemList }
            <div>
                <LoginControl/>
            </div>
        </Wrapper>
    );
}

export default Navbar;