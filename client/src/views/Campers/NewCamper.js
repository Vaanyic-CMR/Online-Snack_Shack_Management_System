import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import CreateForm from "../../components/Campers/CreateForm";
import Header from "../../components/Header";

const NewCamper = _props => {
    const navigate = useNavigate()
    const [ errors, setErrors ] = useState({});

    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ gender, setGender ] = useState("");
    const [ camp, setCamp ] = useState("");
    const [ initBalance, setInitBalance ] = useState(0);

    const createCamper = e => { e.preventDefault();
        const camper = { firstName, lastName, gender, camp }

        axios.post("http://localhost:8000/api/campers", { camper, account: {initBalance} })
            .then( _res => navigate("/campers") )
            .catch( err => setErrors(err.response.data.errors) );
    };

    return(
        <div>
            <Header />
            <CreateForm
                firstName={firstName} setFirstName={setFirstName}
                lastName={lastName} setLastName={setLastName}
                gender={gender} setGender={setGender}
                camp={camp} setCamp={setCamp}
                initBalance={initBalance} setInitBalance={setInitBalance}

                handleSubmit={createCamper}
                titleText="New Camper Account"
                btnText="Create"
                errors={errors}/>
        </div>
    )
};
export default NewCamper;