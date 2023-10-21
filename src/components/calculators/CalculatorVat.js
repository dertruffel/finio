import React from 'react';
import './calculator-vat.css';
// React Component


function calculateProductPrices(payload) {
    // Mock API call with payload
    if (payload.isNetCalculation===false) {
        let vatAmount = payload.netPrice * payload.vatPercentage / 100;
        let netPrice = parseFloat(payload.netPrice);
        let grossPrice = parseFloat(payload.netPrice) + parseFloat(vatAmount);
        vatAmount = Math.round(vatAmount * 100) / 100;
        grossPrice = Math.round(grossPrice * 100) / 100;
        netPrice = Math.round(netPrice * 100) / 100;
        return { netPrice ,grossPrice, vatAmount };
    }
    else if (payload.isNetCalculation===true) {
        let vatAmount = payload.grossPrice * payload.vatPercentage / 100;
        let grossPrice = parseFloat(payload.grossPrice);
        let netPrice = parseFloat(payload.grossPrice) - parseFloat(vatAmount);
        vatAmount = Math.round(vatAmount * 100) / 100;
        grossPrice = Math.round(grossPrice * 100) / 100;
        netPrice = Math.round(netPrice * 100) / 100;
        return { netPrice, grossPrice, vatAmount };
    }
}
class CalculatorVAT extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNetCalculation: false,
            netPrice: 0,
            grossPrice: 0,
            vatAmount: 0,
            vatPercentage: 23,
        };
    }

    handleCalculate = () => {
        // let payload = {
        //     netPrice: this.state.netPrice,
        //     grossPrice: this.state.grossPrice,
        // }
        // let request = new Request('http://finio-api.truffel.dev/api/calculator_vat', {
        //     method: 'POST',
        //     headers: new Headers({ 'Content-Type': 'application/json' }),
        //     body: JSON.stringify(payload)
        // });
        // let netPrice = request.netPrice;
        // let grossPrice = request.grossPrice;
        // let vatAmount = request.vatAmount;

        const { netPrice, grossPrice, vatAmount } = calculateProductPrices(this.state);

        // Update state with calculated prices
        this.setState({ netPrice, grossPrice, vatAmount });
    }
    handleSwitchChange = () => {
        // Toggle between net and gross calculation
        this.setState((prevState) => ({
            isNetCalculation: !prevState.isNetCalculation,
            netPrice: 0, // Reset Net Price when switching
            grossPrice: 0,  // Reset Gross Price when switching
            vatAmount: 0, // Reset VAT Amount when switching
        }));
    }

    handleNetPriceChange = (e) => {
        this.setState({ netPrice: e.target.value });
    }

    handleGrossPriceChange = (e) => {
        this.setState({ grossPrice: e.target.value });
    }

    render() {
        return (
            <div className="vat-container">
                <div className="vat-container-box">
                    <h1>VAT Price Calculator</h1>

                        <table>
                            <div className={"column-2"}>
                                <div><span className={"vat-net-label"}>Net</span>
                                    <input
                                        type="number"
                                        placeholder="Net Price"
                                        value={this.state.netPrice}
                                        onChange={(e) => {
                                            this.handleNetPriceChange(e);
                                        }}
                                        disabled={this.state.isNetCalculation}
                                    />
                                </div>
                                <div>
                                    <span className={"vat-gross-label"}>Gross</span>
                                    <input
                                        type="number"
                                        placeholder="Gross Price"
                                        value={this.state.grossPrice}
                                        onChange={(e) => {
                                            this.handleGrossPriceChange(e);
                                        }}
                                        disabled={!this.state.isNetCalculation}
                                    />
                                </div>

                            </div>


                    </table>

                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={this.state.isNetCalculation}
                            onChange={this.handleSwitchChange}
                        />
                        <span className="slider"></span>
                    </label>
                    <span className={"vat-percentage-label"}>VAT Percentage</span>
                    <input
                        type="number"
                        placeholder="VAT percentage (optional)"
                        value={this.state.vatPercentage}
                        className={"vat-percentage-input"}
                        onChange={(e) => {
                            let inputValue = e.target.value;

                            // Ensure it's a number and between 0 and 99
                            if (!isNaN(inputValue)) {
                                inputValue = Math.min(99, Math.max(0, inputValue)); // Clamp between 0 and 99
                                this.setState({ vatPercentage: inputValue });
                            }
                        }}
                    />
                    <button onClick={this.handleCalculate}>Calculate</button>
                    <div className="result">
                        <h2>Gross Price: {this.state.grossPrice}</h2>
                        <h2>Net Price: {this.state.netPrice}</h2>
                        <h2>VAT Amount: {this.state.vatAmount}</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default CalculatorVAT;