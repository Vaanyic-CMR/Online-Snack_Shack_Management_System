import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import InventoryForm from "../../components/Inventory/InventoryForm";
import Header from "../../components/Header";

const EditInventory = _props => {
    const [ errors, setErrors ] = useState({});
    const navigate = useNavigate()
    const { id } = useParams();

    const [ name, setName ] = useState("");
    const [ category, setCategory ] = useState("food & drink");
    const [ price, setPrice ] = useState(0);

    useEffect( () => {
        axios.get(`http://localhost:8000/api/inventory/${id}`)
            .then( res => {
                setName(res.data.name);
                setCategory(res.data.category);
                setPrice(res.data.price);
            })
            .catch( err => console.log(err) );
    }, [id] );

    const updateItem = e => { e.preventDefault();
        axios.put(`http://localhost:8000/api/inventory/${id}`, { name, category, price })
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
                handleSubmit={updateItem}
                titleText="Edit Product"
                btnText="Update"
                errors={errors}/>
        </div>
    )
};
export default EditInventory;