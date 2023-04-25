import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//routes
import Home from "./pages/Home";
import Category from "./pages/Category";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import RootLayout from "./layouts/RootLayout";
import Shipping from "./pages/Shipping";
import CartContent from "./components/CartContent";
import CompleteOrder from "./pages/CompleteOrder";
import PersonalInfo from "./pages/PersonalInfo";
import ErrorPage from "./pages/ErrorPage";
import Thanks from "./pages/Thanks";
import SearchResults from "./pages/SearchResults";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" errorElement={<ErrorPage/>} element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="product/:product" element={<Details />} />
      <Route path="search-results" element={<SearchResults />} />
      <Route path=":category" element={<Category />} />
    </Route>
      <Route path="cart" errorElement={<h1>Seems like this page doesn't exist :(</h1>} element={<Cart />} >
        <Route index element={<CartContent/>}/>
        <Route path="shipping" element={<Shipping/>}/>
        <Route path="personal-info" element={<PersonalInfo/>}/>
        <Route path="complete-order" element={<CompleteOrder/>}/>
        <Route path="thanks" element={<Thanks/>}/>
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
