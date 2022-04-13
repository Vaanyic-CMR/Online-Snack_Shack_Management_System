import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CamperInfo = _props => {
    const { id } = useParams();
    const [ loaded, setLoaded ] = useState(false);

    const [ camper, setCamper ] = useState({});

    useEffect( () => {
        axios.get(`http://localhost:8000/api/campers/${id}`)
            .then( res => { setCamper(res.data); setLoaded(true); } )
            .catch( error => console.log(error) );
    }, [id]);

    return(
        <div
        style={{margin: "0 25%"}}
        className="bg-light p-5 mt-5 border border-dark border-2 rounded"
        >
        { 
            loaded?
            <div className="row">
                <div className="col text-start">
                    <h2>{ camper.firstName } { camper.lastName }</h2>
                    <hr />
                    <p
                        className="fw-bold"
                    >Gender: <span
                                className="text-capitalize fw-normal"
                            >{ camper.gender }</span>
                    </p>
                    <p
                        className="fw-bold"
                    >Camp: <span
                                className="text-capitalize fw-normal"
                            >{ camper.camp }</span>
                    </p>
                    {/* <p
                        className="fw-bold"
                    >End of Week Remainder: <span
                                className="text-capitalize fw-normal"
                            >{ camper.eow_remaining }</span>
                    </p> */}
                </div>
                <div className="col text-end">
                    <h2>Account</h2>
                    <hr />
                    <p
                        className="fw-bold"
                    >ID: <span
                                className="text-capitalize fw-normal"
                            >{ camper.account._id }</span>
                    </p>
                    <p
                        className="fw-bold"
                    >Initial Balance: <span
                                className="text-capitalize fw-normal"
                            >{ camper.account.initBalance.toLocaleString('us-US', { style: 'currency', currency: 'USD' }) }
                            </span>
                    </p>
                    <p
                        className="fw-bold"
                    >Current Balance: <span
                                className="text-capitalize fw-normal"
                            >{ camper.account.currBalance.toLocaleString('us-US', { style: 'currency', currency: 'USD' }) }
                            </span>
                    </p>
                    <p
                        className="fw-bold"
                    >Current Spent: <span
                                className="text-capitalize fw-normal"
                            >{ camper.account.currSpent.toLocaleString('us-US', { style: 'currency', currency: 'USD' }) }
                            </span>
                    </p>
                    <p
                        className="fw-bold"
                    >Total Donations: <span
                                className="text-capitalize fw-normal"
                            >{ camper.account.totalDonation.toLocaleString('us-US', { style: 'currency', currency: 'USD' }) }
                            </span>
                    </p>
                    <p
                        className="fw-bold"
                    >End of Week Returned: <span
                                className="text-capitalize fw-normal"
                            >{ camper.account.eowReturns.toLocaleString('us-US', { style: 'currency', currency: 'USD' }) }
                            </span>
                    </p>
                </div>
            </div>
            :null
        }
        </div>
    )
};
export default CamperInfo;