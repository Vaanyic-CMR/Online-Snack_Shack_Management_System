import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CamperTable = _props => {
    const [ campers, setCampers ] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        axios.get("http://localhost:8000/api/campers")
            .then( res => setCampers(res.data) )
            .catch( error => console.log(error) );
    }, [] );

    const removeFromDom = camperID => setCampers( campers.filter(camper => camper._id != camperID) );

    const deleteItem = id => {
        axios.delete(`http://localhost:8000/api/campers/${id}`)
            .then( _res => removeFromDom( id ) )
            .catch( error => console.log(error) );
    };

    return(
        <div className="table-responsive-xxl bg-light mt-3 p-3 rounded">
        <h5 className="text-start">Sorted By: <span className="text-secondary">{ "Camp -> Gender -> Last Name -> First Name" }</span></h5>
        <table className="table table-sm table-light table-striped table-hover table-bordered shadow">
            <thead>
                <tr>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Gender</th>
                    <th>Camp</th>
                    <th>Current Balance</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className="align-middle">
                {
                campers.map( (camper, index) => 
                    <tr key={index}>
                        <td>{ camper.lastName }</td>
                        <td>{ camper.firstName }</td>
                        <td className="text-capitalize">{ camper.gender }</td>
                        <td className="text-capitalize">{ camper.camp }</td>
                        <td>{ camper.account.currBalance.toLocaleString('us-US', { style: 'currency', currency: 'USD' }) }</td>
                        <td className="d-flex justify-content-evenly">
                            <button
                                className="btn btn-secondary"
                                onClick={ _e => navigate(`/campers/view/${camper._id}`) }
                            >View</button>
                            <button
                                className="btn btn-secondary"
                                onClick={ _e => navigate(`/campers/edit/${camper._id}`) }
                            >Edit</button>
                            <button
                                className="btn btn-secondary"
                                onClick={ _e => deleteItem(camper._id) }
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
export default CamperTable;