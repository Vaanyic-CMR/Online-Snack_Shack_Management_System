const Footer = props => {
    const {
        completeTransaction,
        addRow,
        balance,
        sumTotal
    } = props;

    return (
        <div className="row fixed-bottom rounded bg-light pt-3 pb-1 d-flex justify-content-between align-items-center m-3">
            <div className="col-5">
                <div className="row d-flex justify-content-between align-items-center">
                    <p className="col">Account Balance</p>
                    <p className="col">Sum Total</p>
                    <p className="col">Remaining Balance</p>
                </div>
                <div className="row d-flex justify-content-between align-items-center">
                    <p className="col">{ balance.toLocaleString('us-US', { style: 'currency', currency: 'USD' }) }</p>
                    <p className="col">{ sumTotal.toLocaleString('us-US', { style: 'currency', currency: 'USD' }) }</p>
                    <p className="col">{ (balance-sumTotal).toLocaleString('us-US', { style: 'currency', currency: 'USD' }) }</p>
                </div>
            </div>
            <div className="col border"></div>
            <div className="col-3">
                <button
                    className="btn btn-secondary m-2"
                    onClick={ completeTransaction }
                >Complete Transaction</button>
                <button
                    className="btn btn-secondary m-2"
                    onClick={ addRow }
                >Add Row</button>
            </div>
        </div>
    );
};
export default Footer;