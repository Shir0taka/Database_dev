import { Wrapper, Title } from "./styles";
import { useParams } from "react-router-dom";

import FeedbackForm from "../FeedbackForm";
import Price from "../Price";


function сonvertfromJpyToUah(jpy) {
    const course = 0.25;
    const result = jpy * course;
    const rounded = Math.round(result * 100) / 100;
    return rounded.toString();
}

function Product(props) {
    let { productId } = useParams();

    let product = props.products.find(p => p.id == productId);

    const jpy = product.price;
    const uah = сonvertfromJpyToUah(jpy);
    return(
        <Wrapper>
            <div>
                <Title>{product.name}</Title>
                <div>Here is the difference in currency</div>
            </div>
            <div>
                <Price currency="uah" amount={uah}/>
                <Price currency="jpy" amount={jpy}/>
            </div>
            <div><FeedbackForm/></div>
        </Wrapper>
    )
}

export default Product;