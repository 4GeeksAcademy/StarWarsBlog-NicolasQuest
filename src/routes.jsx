// Import necessary components and functions from react-router-dom.

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import Characters from "./pages/Characters"
import Planets from "./pages/Planets";
import Starships from "./pages/Starships";
import DataBank from "./pages/DataBank";
import Films from "./pages/Films";
import Vehicles from "./pages/Vehicles";
import Species from "./pages/Species";



export const router = createBrowserRouter(
    createRoutesFromElements(
    // CreateRoutesFromElements function allows you to build route elements declaratively.
    // Create your routes here, if you want to keep the Navbar and Footer in all views, add your new routes inside the containing Route.
    // Root, on the contrary, create a sister Route, if you have doubts, try it!
    // Note: keep in mind that errorElement will be the default page when you don't get a route, customize that page to make your project more attractive.
    // Note: The child paths of the Layout element replace the Outlet component with the elements contained in the "element" attribute of these child paths.

      // Root Route: All navigation will start from here.
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

        {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
        <Route path= "/" element={<Home />} />
        <Route path="/single/:theId" element={ <Single />} />  {/* Dynamic route for single items */}
        <Route path="/demo" element={<Demo />} />
        <Route path="/content-characters" element={<Characters/>} />
        <Route path="/content-planets" element={<Planets /> } />
        <Route path="/content-starships" element={<Starships /> } />
        <Route path="/content-films" element={<Films /> } />
        <Route path="/content-vehicles" element = {<Vehicles />} />
        <Route path="/content-species" element = {<Species />} />
        <Route path="/content-databank/:type/:uid" element={<DataBank /> } />
       
      </Route>
    )
);