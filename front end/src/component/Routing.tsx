import * as React from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom';
import AddTrampolina from "../features/trampolina/AddTranpolina";
import SignIn from "../features/user/SignIn";
import Catalog from "./Catalog";
import HomePage from "./HomePage";
import ContactUs from "./ContactUs";
import TrampolinaList from "../features/trampolina/TrampolinaList";
import SignUp from "../features/user/SignUp";
import DryList from "./DryTrampolina";
import WetList from "./WetTrampolina";
import ShoppingCart from "./ShoppingCart";
import SortPrice from "./SortPrice";
import ListUser from "../features/user/ListUser"
import UserTable from "./UserTable";
import NavbarUser from "./NavbarUser";
import Navbar from "./Navbar";
import MapCart from "./MapCart";
import Profil from "./Profil";
import LendUser from "../features/lend/LendUser";
import ShowLendUser from "../features/lend/ShowLendUser"

const Routing = () => {
    let element = useRoutes([
        { path: "/", element: <HomePage/> },
        { path: "Sign-in", element: <SignIn/> },
        { path: "Sign-up", element: <SignUp/> },
        { path: "SortPrice", element: <SortPrice/> },
        { path: "WetList", element: <WetList/> },
        { path: "DryList", element: <DryList/> },
        { path: "ContactUs", element: <ContactUs/> },
        { path: "TrampolinaList", element: <TrampolinaList/> },
        { path: "ListUser", element: <ListUser/> },
        { path: "UserTable", element: <UserTable/> },
        { path: "Navbar", element: <Navbar/> },
        { path: "NavbarUser", element: <NavbarUser/> },
        { path: "MapCart", element: <MapCart/> },
        { path: "AddTrampolina", element: <AddTrampolina/> },
        { path: "Profil", element: <Profil/> },
        { path: "LendUser", element: <LendUser/> },
        { path: "ShowLendUser", element: <ShowLendUser/>}
    ]);


    return element;
}
export default Routing;