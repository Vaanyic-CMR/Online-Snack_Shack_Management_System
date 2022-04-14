import InventoryBlock from "./subcomponents/InventoryBlock";

const TransactionBody = props => {
    const { updateValues, rows } = props;

    return (
        <div className="pb-5 mb-5">
            {
                rows.map( (row, index) => {
                    return (
                    <div key={index} className="row p-2">
                        <InventoryBlock
                            row={row}
                            changeHandler={updateValues}
                        />
                        <InventoryBlock
                            row={row}
                            changeHandler={updateValues}
                        />
                        <InventoryBlock
                            row={row}
                            changeHandler={updateValues}
                        />
                        <InventoryBlock
                            row={row}
                            changeHandler={updateValues}
                        />
                        <InventoryBlock
                            row={row}
                            changeHandler={updateValues}
                        />
                    </div>
                ) } )
            }
            {/* <InventoryBlock />
            <InventoryBlock />
            <InventoryBlock />
            <InventoryBlock />
            <InventoryBlock /> */}
        </div>
    );
};
export default TransactionBody;