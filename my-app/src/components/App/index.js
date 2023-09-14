import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
import { Wrapper } from './styles';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from '../Product';

const goods = [
  { id: 1, name: "Paste plate", price: 6.99, categoryId: 1 },
  { id: 2, name: "Saucer", price: 4.99, categoryId: 1 },
  { id: 3, name: "Tea spoon", price: 1.99, categoryId: 1 },
  { id: 4, name: "Black jeans", price: 15.99, categoryId: 2 },
  { id: 5, name: "Pattern blouse", price: 20.99, categoryId: 2 },
  { id: 6, name: "Face tonic", price: 8.99, categoryId: 3 },
  { id: 7, name: "Lip balm", price: 6.99, categoryId: 3 },
  { id: 8, name: "Face wash foam", price: 12.99, categoryId: 3 },
  { id: 9, name: "Micellar water", price: 9.99, categoryId: 3 },
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <Content goods={goods}/>,
  },
  {
    path: "product/:productId",
    element: <Product products={goods}/>,
  }
])

function App() {
  return (
    <Wrapper>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </Wrapper>
  );
}

export default App;