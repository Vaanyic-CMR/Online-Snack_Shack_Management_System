import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import UpdateForm from "../../components/Campers/UpdateForm";
import Header from "../../components/Header";

const EditCamper = _props => {
    const [ errors, setErrors ] = useState({});
    const navigate = useNavigate()
    const { id } = useParams();

    // Form left side variables
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ gender, setGender ] = useState("");
    const [ camp, setCamp ] = useState("");
    const [ initBalance, setInitBalance ] = useState(0);

    // Form right side variables
    const [ currBalance, setCurrBalance ] = useState(0);
    const [ currSpent, setCurrSpent ] = useState(0);
    const [ totalDonation, setTotalDonation ] = useState(0);
    const [ eowReturns, setEowReturns ] = useState(0);

    // id of camper's account.
    const [ accountID, setAccountID ] = useState("");

    useEffect( () => {
        axios.get(`http://localhost:8000/api/campers/${id}`)
            .then( res => {
                setFirstName( res.data.firstName );
                setLastName( res.data.lastName );
                setGender( res.data.gender );
                setCamp( res.data.camp );
                setInitBalance( res.data.account.initBalance );
                
                setCurrBalance( res.data.account.currBalance );
                setCurrSpent( res.data.account.currSpent );
                setTotalDonation( res.data.account.totalDonation );
                setEowReturns( res.data.account.eowReturns );

                setAccountID( res.data.account._id )
            })
            .catch( err => setErrors(err.response.data.errors) );
    }, [id])

    const updateCamper = e => { e.preventDefault();
        const camper = { firstName, lastName, gender, camp }
        const account = { _id: accountID, initBalance, currBalance, currSpent, totalDonation, eowReturns }

        axios.put(`http://localhost:8000/api/campers/${id}`, { camper, account })
            .then( _res => navigate("/campers") )
            .catch( err => setErrors(err.response.data.errors) );
    };

    return(
        <div>
            <Header />
            <UpdateForm
                firstName={firstName} setFirstName={setFirstName}
                lastName={lastName} setLastName={setLastName}
                gender={gender} setGender={setGender}
                camp={camp} setCamp={setCamp}
                initBalance={initBalance} setInitBalance={setInitBalance}

                currBalance={currBalance} setCurrBalance={setCurrBalance}
                currSpent={currSpent} setCurrSpent={setCurrSpent}
                totalDonation={totalDonation} setTotalDonation={setTotalDonation}
                eowReturns={eowReturns} setEowReturns={setEowReturns}

                handleSubmit={updateCamper}
                titleText="Update Camper Account"
                btnText="Update"
                errors={errors}
            />
        </div>
    )
};
export default EditCamper;