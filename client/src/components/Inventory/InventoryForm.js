

const InventoryForm = props => {
    const { name, setName,
            category, setCategory,
            price, setPrice,
            handleSubmit,
            btnText, titleText,
            errors } = props;

    return(
        <form
            style={{margin: "0 25%"}}
            onSubmit={ handleSubmit }
            className="bg-light p-5 mt-5 border border-dark border-2 rounded"
            >
            <h2 className="mb-5">{ titleText }</h2>
            <div className="row m-3 text-start">
                <div className="d-flex justify-content-between">
                    <label className="label-control">Name</label>
                    {
                        errors.name?
                        <label className="label-control text-danger">{ errors.name.message }</label>
                        :null
                    }
                </div>
                <input
                    value={name}
                    onChange={ e => setName(e.target.value) }
                    className="p-1 form-control"/>
            </div>
            <div className="row m-3 text-start">
                <div className="d-flex justify-content-between">
                    <label className="label-control">Category</label>
                    {
                        errors.category?
                        <label className="label-control text-danger">{ errors.category.message }</label>
                        :null
                    }
                </div>
                <select
                    value={category}
                    onChange={ e => setCategory(e.target.value) }
                    className="p-1 form-select"
                >
                    <option value="food & drink" selected>Food & Drink</option>
                    <option value="clothing">Clothing</option>
                    <option value="accessory">Accessory</option>
                </select>
            </div>
            <div className="row m-3 text-start">
                <div className="d-flex justify-content-between">
                    <label className="label-control">Price</label>
                    {
                        errors.price?
                        <label className="label-control text-danger">{ errors.price.message }</label>
                        :null
                    }
                </div>
                <input
                    type="number"
                    min="0"
                    step="0.05"
                    value={price}
                    onChange={ e => setPrice(e.target.value) }
                    className="p-1 form-control"/>
            </div>
            <button
                className="btn btn-secondary shadow border border-dark mt-4 ps-5 pe-5"
            >{ btnText }</button>
        </form>
    )
};
export default InventoryForm;