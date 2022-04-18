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

    // Retrieves all campers' name & IDs associated with selected camp.
    const setCampData = selectedCamp => {
        setCamp(selectedCamp);
        axios.get(`http://localhost:8000/api/campers/camp/${selectedCamp}`)
            .then( res => {
                setCampers(res.data);
                if (res.data.length > 0) { setLoadedCamp(true) }
                else { setLoadedCamp(false) };
            } )
            .catch( error => console.log(error) );
    };
    // Retrieves all of selected camper's data.
    const setCamperData = camper_ID => {
        setCamperID(camper_ID);
        axios.get(`http://localhost:8000/api/campers/${camper_ID}`)
            .then( res => {
                setCamper(res.data);
                setBalance(res.data.account.currBalance)
            } )
            .catch( error => console.log(error) );
    };

    // Footer Button methods and row control
    class Row {
        constructor() {
            this.col1 = { blockTotal: 0 }
            this.col2 = { blockTotal: 0 }
            this.col3 = { blockTotal: 0 }
            this.col4 = { blockTotal: 0 }
            this.col5 = { blockTotal: 0 }
        };
        display() {
            console.log(`Col 1 | Block Total: ${this.col1.blockTotal}`);
            console.log(`Col 2 | Block Total: ${this.col2.blockTotal}`);
            console.log(`Col 3 | Block Total: ${this.col3.blockTotal}`);
            console.log(`Col 4 | Block Total: ${this.col4.blockTotal}`);
            console.log(`Col 5 | Block Total: ${this.col5.blockTotal}`);
        };
    };
    const [ rows, setRows ] = useState([new Row()]);

    // used to trigger an InventoryBlock value reset.
    const [ completeReset, setCompleteReset ] = useState(false);
    const completeTransaction = () => {
        camper.account.currBalance -= sumTotal;
        camper.account.currSpent += sumTotal;

        axios.put(`http://localhost:8000/api/campers/${camper._id}`,
            { camper, account: camper.account })
            // .then( res => console.log( res ) )
            .catch( error => console.log(error) );

        setCamperID(""); setCamper({});
        setBalance(0); setSumTotal(0);

        setRows([new Row()]);
        setCompleteReset(true);
    };
    // Adds a row of blocks for more items to be purchased.
    const addRow = () => setRows( [...rows, new Row()] );

    // prevents alert loop on initial render.
    const [ loaded, setLoaded ] = useState(false);
    // Updates all values used to calculate purchase.
    const updateValues = () => {
        if ( !loaded ) { setLoaded(true) }
        else if ( !camp ) {
            alert("Warning: Camp not selected.\nPlease select a camp.")
        }
        else if ( !camperID ) {
            alert("Warning: Camper not selected.\nPlease select a camper.")
        }
        else {
            let sum = 0;
            for ( let i=0; i<rows.length; i++) {
                sum += rows[i].col1.blockTotal;
                sum += rows[i].col2.blockTotal;
                sum += rows[i].col3.blockTotal;
                sum += rows[i].col4.blockTotal;
                sum += rows[i].col5.blockTotal;
            };
            setSumTotal(sum);
        };
    };

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
                changeHandler={updateValues}
                completeReset={completeReset} setCompleteReset={setCompleteReset}
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