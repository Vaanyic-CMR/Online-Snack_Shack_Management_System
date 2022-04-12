import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const InventoryTable = _props => {
    const [ inventory, setInventory ] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        axios.get("http://localhost:8000/api/inventory")
            .then( res => setInventory(res.data) )
            .catch( error => console.log(error) );
    }, [inventory] );

    const removeFromDom = itemID => setInventory( inventory.filter(item => item._id != itemID) );

    const deleteItem = id => {
        axios.delete(`http://localhost:8000/api/inventory/${id}`)
            .then( res => removeFromDom( id ) )
            .catch( error => console.log(error) );
    };

    return(
        <div className="table-responsive-xxl bg-light mt-3 p-3 rounded">
        <table className="table table-sm table-light table-striped table-hover table-bordered shadow">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    {/* <th># in Stock</th> */}
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className="align-middle">
                {
                inventory.map( (item, index) => 
                    <tr key={index}>
                        <td>{ item.name }</td>
                        <td className="text-capitalize">{ item.category }</td>
                        <td>{ item.price.toLocaleString('us-US', { style: 'currency', currency: 'USD' }) }</td>
                        {/* <td>{ item.in_stock }</td> */}
                        <td className="d-flex justify-content-evenly">
                            <button disabled
                                className="btn btn-secondary"
                                onClick={ _e => navigate(`/inventory/${item._id}`) }
                            >View</button>
                            <button
                                className="btn btn-secondary"
                                onClick={ _e => navigate(`/inventory/edit/${item._id}`) }
                            >Edit</button>
                            <button
                                className="btn btn-secondary"
                                onClick={ _e => deleteItem(item._id) }
                            >Delete</button>
                        </td>
                    </tr>
                )
                }
            </tbody>
        </table>
        </div>
    )
};
export default InventoryTable;