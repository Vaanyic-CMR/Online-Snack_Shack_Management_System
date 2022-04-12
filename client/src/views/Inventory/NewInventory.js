import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import InventoryForm from "../../components/Inventory/InventoryForm";
import Header from "../../components/Header";

const NewInventory = _props => {
    const navigate = useNavigate()
    const [ errors, setErrors ] = useState({});

    const [ name, setName ] = useState("");
    const [ category, setCategory ] = useState("food & drink");
    const [ price, setPrice ] = useState(0);

    const createItem = e => { e.preventDefault();
        axios.post("http://localhost:8000/api/inventory", { name, category, price })
            .then( _res => navigate("/inventory") )
            .catch( err => setErrors(err.response.data.errors) );
    };

    return(
        <div>
            <Header />
            <InventoryForm
                name={name} setName={setName}
                category={category} setCategory={setCategory}
                price={price} setPrice={setPrice}
                handleSubmit={createItem}
                titleText="New Product"
                btnText="Create"
                errors={errors}/>
        </div>
    )
};
export default NewInventory;