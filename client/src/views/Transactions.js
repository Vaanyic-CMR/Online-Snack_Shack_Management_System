import { useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";
import TransactionBody from "../components/TransactionBody";

const Transactions = _props => {
    // list of all campers
    const [ campers, setCampers ] = useState([]);
    // currently selected camp
    const [ camp, setCamp ] = useState("");
    // Checks if a camp has loaded.
    const [ loadedCamp, setLoadedCamp ] = useState(false);
    // currently selected camper
    const [ camperID, setCamperID ] = useState("");
    const [ camper, setCamper ] = useState({});

    // values displayed in footer.
    const [ balance, setBalance ] = useState(0);
    const [ sumTotal, setSumTotal ] = useState(0);

    const setCampData = selectedCamp => {
        setCamp(selectedCamp);
        axios.get(`http://localhost:8000/api/campers/camp/${selectedCamp}`)
            .then( res => {
                setCampers(res.data);
                if (res.data.length > 0){ setLoadedCamp(true) }
                else{ setLoadedCamp(false) };
            } )
            .catch( error => console.log(error) );
    };
    const setCamperData = camper_ID => {
        setCamperID(camper_ID);
        axios.get(`http://localhost:8000/api/campers/${camper_ID}`)
            .then( res => {
                setCamper(res.data);
                setBalance(res.data.account.currBalance)
            } )
            .catch( error => console.log(error) );
    };

    const updateValues = () => {

    };

    // Footer Button methods and row control
    class Row {
        constructor() {
            this.col1 = { count: 0, item: "" }
            this.col2 = { count: 0, item: "" }
            this.col3 = { count: 0, item: "" }
            this.col4 = { count: 0, item: "" }
            this.col5 = { count: 0, item: "" }
        }
    }
    const [ rows, setRows ] = useState([new Row()]);
    const completeTransaction = () => {
        setRows([new Row()]);
    };
    const addRow = () => setRows( [...rows, new Row()] );

    return(
        <div>
            <Header
                transactions
                camperID={camperID} campers={campers}
                camp={camp} setCampData={setCampData} loadedCamp={loadedCamp}
                setCamperData={setCamperData}
            />
            <TransactionBody
                rows={rows}
                updateValues={updateValues}
            />
            <Footer
                completeTransaction={completeTransaction}
                addRow={addRow}
                balance={balance}
                sumTotal={sumTotal}
            />
        </div>
    );
};
export default Transactions;