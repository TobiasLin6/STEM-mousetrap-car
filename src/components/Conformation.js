function Conformation() {
    return (
        <div className="conf-back initial" id="conf">
            <div className="conf-card initial" id="conf-card">
                <h1>Are you sure you want to return this item?</h1>
                <p>You will be refunded all your money.</p>
                <div className="conf-container">
                    <button title="Click to cancel" className="cancel" id="conf-cancel">Cancel</button>
                    <button title="Click to return" className="return" id="conf-return">Return</button>
                </div>
            </div>
        </div>
    )
}

export default Conformation;