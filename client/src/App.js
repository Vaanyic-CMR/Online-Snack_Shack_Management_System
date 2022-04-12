import { BrowserRouter, Routes, Route } from "react-router-dom";

import InventoryList from "./views/Inventory/InventoryList";
import NewInventory from "./views/Inventory/NewInventory";
import EditInventory from "./views/Inventory/EditInventory";

import CamperList from "./views/Campers/CamperList";

import Transactions from "./views/Transactions";

import Dashboard from "./views/Dashboard";
import Index from "./views/Index";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = _props => {
    return (
        <BrowserRouter>
        <Routes>

            <Route path="/" element={ <Index /> }/>
            <Route path="/dashboard" element={ <Dashboard /> } />

            <Route path="/campers" element={ <CamperList /> } />

            <Route path="/inventory" element={ <InventoryList /> } />
            <Route path="/inventory/new" element={ <NewInventory /> } />
            <Route path="/inventory/edit/:id" element={ <EditInventory /> } />

            <Route path="/transactions" element={ <Transactions /> } />

        </Routes>
        </BrowserRouter>
    );
};
export default App;