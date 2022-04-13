const CreateForm = props => {
    const { firstName, setFirstName,
            lastName, setLastName,
            gender, setGender,
            camp, setCamp,
            initBalance, setInitBalance,

            // Page text, errors, & submit handler
            handleSubmit,
            btnText, titleText,
            errors } = props;

    return(
        <form
            style={{margin: "0 25%"}}
            onSubmit={ handleSubmit }
            className="bg-light p-5 mt-5 border border-dark border-2 rounded row"
            >
            <div className="col">
                <h2 className="mb-5">{ titleText }</h2>
                <div className="row m-3 text-start">
                    <div className="d-flex justify-content-between">
                        <label className="label-control">First Name</label>
                        {
                            errors.firstName?
                            <label className="label-control text-danger">{ errors.firstName.message }</label>
                            :null
                        }
                    </div>
                    <input
                        value={firstName}
                        onChange={ e => setFirstName(e.target.value) }
                        className="p-1 form-control"/>
                </div>
                <div className="row m-3 text-start">
                    <div className="d-flex justify-content-between">
                        <label className="label-control">Last Name</label>
                        {
                            errors.lastName?
                            <label className="label-control text-danger">{ errors.lastName.message }</label>
                            :null
                        }
                    </div>
                    <input
                        value={lastName}
                        onChange={ e => setLastName(e.target.value) }
                        className="p-1 form-control"/>
                </div>
                <div className="row m-3 text-start">
                    <div className="d-flex justify-content-between">
                        <label className="label-control">Gender</label>
                        {
                            errors.gender?
                            <label className="label-control text-danger">{ errors.gender.message }</label>
                            :null
                        }
                    </div>
                    <select
                        value={gender}
                        onChange={ e => setGender(e.target.value) }
                        className="p-1 form-select"
                    >
                        <option value="" disabled defaultValue hidden>Select A Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="row m-3 text-start">
                    <div className="d-flex justify-content-between">
                        <label className="label-control">Camp</label>
                        {
                            errors.camp?
                            <label className="label-control text-danger">{ errors.camp.message }</label>
                            :null
                        }
                    </div>
                    <select
                        value={camp}
                        onChange={ e => setCamp(e.target.value) }
                        className="p-1 form-select"
                    >
                        <option value="" disabled defaultValue hidden>Select A Camp</option>
                        <option value="trekker">Trekker</option>
                        <option value="pathfinder">Pathfinder</option>
                        <option value="journey">Journey</option>
                        <option value="trail blazer">Trail Blazer</option>
                        <option value="navigator">Navigator</option>
                    </select>
                </div>
                <div className="row m-3 text-start">
                    <div className="d-flex justify-content-between">
                        <label className="label-control">Initial Balance</label>
                        {
                            errors.initBalance?
                            <label className="label-control text-danger">{ errors.initBalance.message }</label>
                            :null
                        }
                    </div>
                    <input
                        type="number"
                        min="0"
                        step="0.05"
                        value={initBalance}
                        onChange={ e => setInitBalance(e.target.value) }
                        className="p-1 form-control"/>
                </div>
                <button
                    className="btn btn-secondary shadow border border-dark mt-4 ps-5 pe-5"
                >{ btnText }</button>
            </div>
        </form>
    );
};
export default CreateForm;