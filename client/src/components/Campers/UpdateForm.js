const UpdateForm = props => {
    const { firstName, setFirstName,
            lastName, setLastName,
            gender, setGender,
            camp, setCamp,
            initBalance, setInitBalance,

            // For Update Page Only
            currBalance, setCurrBalance,
            currSpent, setCurrSpent,
            totalDonation, setTotalDonation,
            eowReturns, setEowReturns,

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
            <div className="col-1">
                <div
                className="bg-dark rounded"
                style={{display:"inline-block", height:"100%", width:"3px"}} />
            </div>
            <div className="col">
                <div className="row m-3 text-start">
                    <div className="d-flex justify-content-between">
                        <label className="label-control">Current Balance</label>
                        {
                            errors.currBalance?
                            <label className="label-control text-danger">{ errors.currBalance.message }</label>
                            :null
                        }
                    </div>
                    <input
                        type="number"
                        min="0"
                        step="0.05"
                        value={currBalance}
                        onChange={ e => setCurrBalance(e.target.value) }
                        className="p-1 form-control"/>
                </div>
                <div className="row m-3 text-start">
                    <div className="d-flex justify-content-between">
                        <label className="label-control">Current Spent</label>
                        {
                            errors.currSpent?
                            <label className="label-control text-danger">{ errors.currSpent.message }</label>
                            :null
                        }
                    </div>
                    <input
                        type="number"
                        min="0"
                        step="0.05"
                        value={currSpent}
                        onChange={ e => setCurrSpent(e.target.value) }
                        className="p-1 form-control"/>
                </div>
                <div className="row m-3 text-start">
                    <div className="d-flex justify-content-between">
                        <label className="label-control">Total Donations</label>
                        {
                            errors.totalDonation?
                            <label className="label-control text-danger">{ errors.totalDonation.message }</label>
                            :null
                        }
                    </div>
                    <input
                        type="number"
                        min="0"
                        step="0.05"
                        value={totalDonation}
                        onChange={ e => setTotalDonation(e.target.value) }
                        className="p-1 form-control"/>
                </div>
                <div className="row m-3 text-start">
                    <div className="d-flex justify-content-between">
                        <label className="label-control">End of Week Returns</label>
                        {
                            errors.eowReturns?
                            <label className="label-control text-danger">{ errors.eowReturns.message }</label>
                            :null
                        }
                    </div>
                    <input
                        type="number"
                        min="0"
                        step="0.05"
                        value={eowReturns}
                        onChange={ e => setEowReturns(e.target.value) }
                        className="p-1 form-control"/>
                </div>
            </div>
        </form>
    );
};
export default UpdateForm;