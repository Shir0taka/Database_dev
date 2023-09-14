import Navbar from "../Navbar";
import Title from "../Title"
import { Wrapper } from './styles'

function Header() {
    return (
        <Wrapper>
            <Title />
            <Navbar />
        </Wrapper>
    );
}

export default Header;