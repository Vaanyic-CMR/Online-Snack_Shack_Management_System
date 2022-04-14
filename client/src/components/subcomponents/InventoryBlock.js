import { useState, useEffect } from "react";
import axios from "axios";

const InventoryBlock = props => {
    const { changeHandler } = props;

    const [ invNames, setInvNames ] = useState([]);

    const [ windowHeight, setWindowHeight ] = useState(window.innerHeight);

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

    return (
        <div className="col bg-light p-2 m-2 border border-dark rounded">
            <input
                type="number"
                min="0"
                className="form-control mb-2"
                onChange={ changeHandler }
            />
            <select
                className="form-select"
                onChange={ changeHandler }
                multiple
                size={ windowHeight / 50 }
                aria-label="multiple select"
            >
                {
                    invNames.map( (item, index) => {
                        return <option
                            key={index}
                            value={item._id}
                            className="p-1"
                        >{ item.name }</option>
                    })
                }
            </select>
        </div>
    );
};
export default InventoryBlock;