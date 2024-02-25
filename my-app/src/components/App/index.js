import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
import { Wrapper } from './styles';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Product from '../Product';
import LoginForm from '../LoginForm';
import AdminPanel from '../AdminPanel';
import RegisterForm from '../RegisterForm';
import NumberForm from '../NumberForm';
import TestComponent from '../TestComponent';
import ReduxComponent from '../ReduxComponent';

const food = [
  { id: 1, name: "Ham Ramen", price: 7.99, categoryId: 1 },
  { id: 2, name: "Tonkotsu", price: 3.99, categoryId: 1 },
  { id: 3, name: "Miso Soup", price: 1.99, categoryId: 1 },
  { id: 4, name: "Dorayaki", price: 2.99, categoryId: 2 },
  { id: 5, name: "Mochi", price: 0.99, categoryId: 2 },
  { id: 6, name: "Dango", price: 1.99, categoryId: 2 },
  { id: 7, name: "Unagi", price: 30.99, categoryId: 3 },
  { id: 8, name: "Natto", price: 10.99, categoryId: 3 },
  { id: 9, name: "Sushi", price: 14.99, categoryId: 3 },
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <Content />,
  },
  {
    path: "product/:productId",
    element: <Product />,
  },
  {
    path: "categories/:categoryId",
    element: <Content />
  },
  {
    path: "admin/",
    element: <AdminPanel />
  },
  {
    path: "login/",
    element: <LoginForm />
  },
  {
    path: "register/",
    element: <RegisterForm />
  },
  {
    path: "numbers/",
    element: <NumberForm />
  },
  {
    path: "test/",
    element: <TestComponent />
  },
  {
    path: "redux/",
    element: <ReduxComponent />
  },
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