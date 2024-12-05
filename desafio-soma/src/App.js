import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import { GlobalStyle } from "./GlobalCss.styled";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    element: <Header/>,
    children: [
      {
        path: "/",
        element: <Home/>
      }
    ]
  }
])

function App() {
  return (
    <>
      <GlobalStyle/>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;