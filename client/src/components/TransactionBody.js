import InventoryBlock from "./subcomponents/InventoryBlock";

const TransactionBody = props => {
    const {
        rows, changeHandler,
        completeReset, setCompleteReset
    } = props;

    return (
        <div className="pb-5 mb-5">
            {
                rows.map( (row, index) => {
                    return (
                    <div key={index} className="row p-2">
                        <InventoryBlock
                            col={row.col1}
                            changeHandler={changeHandler}
                            completeReset={completeReset}
                            setCompleteReset={setCompleteReset}
                        />
                        <InventoryBlock
                            col={row.col2}
                            changeHandler={changeHandler}
                            completeReset={completeReset}
                            setCompleteReset={setCompleteReset}
                        />
                        <InventoryBlock
                            col={row.col3}
                            changeHandler={changeHandler}
                            completeReset={completeReset}
                            setCompleteReset={setCompleteReset}
                        />
                        <InventoryBlock
                            col={row.col4}
                            changeHandler={changeHandler}
                            completeReset={completeReset}
                            setCompleteReset={setCompleteReset}
                        />
                        <InventoryBlock
                            col={row.col5}
                            changeHandler={changeHandler}
                            completeReset={completeReset}
                            setCompleteReset={setCompleteReset}
                        />
                    </div>
                ) } )
            }
        </div>
    );
};
export default TransactionBody;