import { useState, useEffect } from "react";
import axios from "axios";

const InventoryBlock = props => {
    // watches for a complete transaction to reset values.
    const { completeReset, setCompleteReset } = props;
    
    const { col, changeHandler } = props
    const [ invNames, setInvNames ] = useState([]);

    const [ windowHeight, setWindowHeight ] = useState(window.innerHeight);

    const [ count, setCount ] = useState(0);
    const [ itemID, setItemID ] = useState("");
    const [ item, setItem ] = useState({});

    useEffect( () => {
        axios.get("http://localhost:8000/api/inventory/names")
            .then( res => setInvNames(res.data) )
            .catch( error => console.log(error) );
        
        // Resizes select tag to fit window.
        const handleResize = () => {
            setWindowHeight(window.innerHeight)
        };
        window.addEventListener('resize', handleResize )
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect( () => {
        if (itemID) {
            axios.get(`http://localhost:8000/api/inventory/${itemID}`)
                .then( res => setItem(res.data) )
                .catch( error => console.log(error) );
        };
    }, [itemID]);

    useEffect( () => {
        if (itemID) {
            col.blockTotal = item.price * count;
            changeHandler();
        };
    }, [item, count]);

    useEffect( () => {
        // console.log(completeReset);
        if ( completeReset ) {
            setItemID(""); setCount(0); setItem({});
            setCompleteReset(false);
        };
    }, [completeReset]);

    return (
        <div className="col bg-light p-2 m-2 border border-dark rounded">
            <input
                type="number"
                min={ 0 }
                className="form-control mb-2"
                value={ count }
                onChange={ e => setCount( e.target.value) }
            />
            <select
                className="form-select"
                value={ itemID }
                onChange={ e => setItemID( e.target.value ) }
                size={ windowHeight / 50 }
                aria-label="multiple select"
            >
                <option value="" disabled defaultValue hidden></option>
                {invNames.map( (item, index) =>
                    <option
                        key={index}
                        value={item._id}
                        className="p-1"
                    >{ item.name }</option>
                )}
            </select>
        </div>
    );
};
export default InventoryBlock;