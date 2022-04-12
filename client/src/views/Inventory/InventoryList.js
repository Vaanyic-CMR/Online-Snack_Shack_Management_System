import InventoryTable from "../../components/Inventory/InventoryTable";
import Header from "../../components/Header";

const InventoryList = _props => {
    return(
        <div>
            <Header inventoryList/>
            <InventoryTable />
        </div>
    )
};
export default InventoryList;