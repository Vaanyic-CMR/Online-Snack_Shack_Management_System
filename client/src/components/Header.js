import { Link, useNavigate } from "react-router-dom";

const Header = props => {
    const navigate = useNavigate();

    // determines header brand content
    const { brand } = props;
    // parameters to determine active navbar page.
    const { camperList, inventoryList, transactions } = props;

    // useState getters and/or setters
    const { camperID, campers, setCamperData } = props;
    // const { year, setYear } = props;
    const { loadedCamp, camp, setCampData } = props;

    const handleClick = route => navigate( route )

    return (
        <nav className="navbar navbar-expand-md sticky-top rounded navbar-light bg-light p-3">
            <div className="container-fluid">
                <div className="d-flex flex-row">
                    <Link className="navbar-brand mb-0 h1 fs-3" to="/dashboard">
                        {brand?
                        brand
                        :"SSMS"}
                    </Link>
                    {
                        camperList?
                        <button
                            className="btn btn-secondary"
                            onClick={ e => handleClick("/campers/new") }
                        >New Camper</button>
                        :null
                    }
                    {
                        inventoryList?
                        <button
                            className="btn btn-secondary"
                            onClick={ e => handleClick("/inventory/new") }
                        >New Product</button>
                        :null
                    }
                    <div className="row ms-3">
                    {
                        transactions?
                        <select
                            value={camp}
                            className="form-select col"
                            onChange={ e => setCampData(e.target.value) }
                        >
                            <option value="" disabled defaultValue hidden>Select Camp</option>
                            <option value="trekker">Trekker</option>
                            <option value="pathfinder">Pathfinder</option>
                            <option value="journey">Journey</option>
                            <option value="trail blazer">Trail Blazer</option>
                            <option value="navigator">Navigator</option>
                        </select>
                        :null
                    }
                    {
                        campers && loadedCamp?
                        <select
                            value={camperID}
                            className="form-select col"
                            onChange={ e => setCamperData(e.target.value) }
                        >
                            <option value="" disabled defaultValue hidden>Select Camper</option>
                            { campers.map( (camper, index) => {
                                return <option key={index} value={camper._id}>{ camper.firstName } { camper.lastName }</option>
                            }) }
                        </select>
                        :null
                    }
                    </div>
                </div>
                <ul className="navbar-nav mb-md-0">
                    <li className="nav-item">
                        {camperList?
                        <Link className="nav-link fw-bold text-decoration-underline active" to="/campers">Camper Accounts</Link>
                        :<Link className="nav-link fw-bold text-decoration-underline" to="/campers">Camper Accounts</Link>}
                    </li>
                    <li className="fs-4">|</li>
                    <li className="nav-item">
                        {inventoryList?
                        <Link className="nav-link fw-bold text-decoration-underline active" to="/inventory">Inventory</Link>
                        :<Link className="nav-link fw-bold text-decoration-underline" to="/inventory">Inventory</Link>}
                    </li>
                    <li className="fs-4">|</li>
                    <li className="nav-item">
                        {transactions?
                        <Link className="nav-link fw-bold text-decoration-underline active" to="/transactions">Transactions</Link>
                        :<Link className="nav-link fw-bold text-decoration-underline" to="/transactions">Transactions</Link>}
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Header;