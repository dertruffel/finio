import React, { Component } from 'react';
import './calculator-gn.css';
// React Component


function calculateNetPay(payload) {
    // Mock API call with payload
    const netPay = payload.monthlyPayGross * 0.8;
    let months = [
        { month: 'January', pay: netPay },
        { month: 'February', pay: netPay },
        { month: 'March', pay: netPay },
        { month: 'April', pay: netPay },
        { month: 'May', pay: netPay },
        { month: 'June', pay: netPay },
        { month: 'July', pay: netPay },
        { month: 'August', pay: netPay },
        { month: 'September', pay: netPay },
        { month: 'October', pay: netPay },
        { month: 'November', pay: netPay },
        { month: 'December', pay: netPay },
    ];

    return months;
}
class CalculatorEarning extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contract: 'uop',
            zus: 'zus-my-employeer',
            zusb2b: 'zus-my-employeer',
            companyRunningCost: 0,
            incomeTax: '12/32',
            sickLeave: 'no',
            costOfIncome: 20,
            time: 'full-time',
            workFromHome: 'no',
            under26: 'no',
            monthlyPayGross: 0,
            monthlyPayNet: 0,
            months: [],
            partner: 'no',
            isCalculating: false,
        };
    }

    handleCalculate = () => {
        // let payload = {
        //     contract: this.state.contract,
        //     zus: this.state.zus,
        //     zusb2b: this.state.zusb2b,
        //     companyRunningCost: this.state.companyRunningCost,
        //     incomeTax: this.state.incomeTax,
        //     sickLeave: this.state.sickLeave,
        //     costOfIncome: this.state.costOfIncome,
        //     time: this.state.time,
        //     workFromHome: this.state.workFromHome,
        //     under26: this.state.under26,
        //     monthlyPayGross: this.state.monthlyPayGross,
        //     monthlyPayNet: this.state.monthlyPayNet,
        //     partner: this.state.partner,
        // }
        // let request = new Request('http://finio-api.truffel.dev/api/calculator_earnings', {
        //     method: 'POST',
        //     headers: new Headers({ 'Content-Type': 'application/json' }),
        //     body: JSON.stringify(payload)
        // });
        // fetch(request)
        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         return response.json();
        //     })
        //     .then(data => {
        //         let months = data;
        //         this.setState({ months });
        //         this.setState({ isCalculating: true });
        //     })
        //     .catch(error => {
        //         console.error('There was a problem with the fetch operation:', error);
        //     });
        //

        const months = calculateNetPay(this.state);


        this.setState({ months });
        this.setState({ isCalculating: true });
    }

    render() {
        return (
            <div className="gn-container ">
                <div className="gn-container-box">
                    <h1>Gross/Net Calculator</h1>
                    <table>
                        <tr>
                            <td>Contract type:</td>
                            <td>
                                <select
                                    className={"gn-select"}
                                    value={this.state.contract}
                                    onChange={(e) => this.setState({ contract: e.target.value })}
                                >
                                    <option value="uop">UoP</option>
                                    <option value="uz">UZ</option>
                                    <option value="ud">UD</option>
                                    <option value="b2b">B2B</option>
                                </select>
                            </td>
                        </tr>
                        {this.state.contract === 'uop' && (
                            <tr>
                                <td>Time:</td>
                                <td>
                                    <select
                                        className={"gn-select"}
                                        value={this.state.time}
                                        onChange={(e) => this.setState({ time: e.target.value })}
                                    >
                                        <option value="full-time">Full Time</option>
                                        <option value="half-time">Half Time</option>
                                    </select>
                                </td>
                            </tr>

                        )}
                        {this.state.contract === 'uop' && (
                        <tr>
                            <td>Do you work from home?</td>
                            <td>
                                <select
                                    className={"gn-select"}
                                    value={this.state.workFromHome}
                                    onChange={(e) => this.setState({ workFromHome: e.target.value })}
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </td>
                        </tr>
                        )}
                        {this.state.contract === 'b2b' && (
                            <tr>
                                <td>Zus:</td>
                                <td>
                                    <select
                                        className={"gn-select"}
                                        value={this.state.zusb2b}
                                        onChange={(e) => this.setState({ zusb2b: e.target.value })}
                                    >
                                        <option value="none">No Zus (1st half a year)</option>
                                        <option value="preference">Preferential Zus (2 years)</option>
                                        <option value="normalZus">Normal Zus</option>
                                    </select>
                                </td>
                            </tr>
                        )}
                        {this.state.contract === 'b2b' && (
                            <tr>
                                <td>Income tax level:</td>
                                <td>
                                    <select
                                        className={"gn-select"}
                                        value={this.state.incomeTax}
                                        onChange={(e) => this.setState({ incomeTax: e.target.value })}
                                    >
                                        <option value="12/32">12% / 32%</option>
                                        <option value="19%-linear">19% Linear tax</option>
                                    </select>
                                </td>
                            </tr>
                        )}
                        {(this.state.contract === 'uop' || this.state.contract === 'uz') && (
                        <tr>
                            <td>Are you under 26yo (pit 0)?</td>
                            <td>
                                <select
                                    className={"gn-select"}
                                    value={this.state.under26}
                                    onChange={(e) => this.setState({ under26: e.target.value })}
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </td>
                        </tr>
                        )}
                        {(this.state.contract === 'uz') && (
                            <tr>
                                <td>Choose an option</td>
                                <td>
                                    <select
                                        className={"gn-select"}
                                        value={this.state.zus}
                                        onChange={(e) => this.setState({ zus: e.target.value })}
                                    >
                                        <option value="zus-my-employeer">Zus is paid with my employeer</option>
                                        <option value="zus-another-employeer">Zus is paid by another employeer</option>
                                        <option value="under-26-student">Im a student under 26 years old</option>
                                    </select>
                                </td>
                            </tr>
                        )}
                        {(this.state.contract === 'uz' || this.state.contract === 'b2b') && (
                            <tr>
                                <td>Voluntary sick leave payment?</td>
                                <td>
                                    <select
                                        className={"gn-select"}
                                        value={this.state.sickLeave}
                                        onChange={(e) => this.setState({ sickLeave: e.target.value })}
                                    >
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </td>
                            </tr>
                        )}
                        {this.state.contract === 'uop' && (
                        <tr>
                            <td>Are you filling PIT with your partner?</td>
                            <td>
                                <select
                                    className={"gn-select"}
                                    value={this.state.partner}
                                    onChange={(e) => this.setState({ partner: e.target.value })}
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </td>
                        </tr>
                        )}
                        {this.state.contract === 'ud' && (
                            <tr>
                                <td>Cost of income</td>
                                <td>
                                    <select
                                        className={"gn-select"}
                                        value={this.state.costOfIncome}
                                        onChange={(e) => this.setState({ costOfIncome: e.target.value })}
                                    >
                                        <option value="20">20%</option>
                                        <option value="50">50%</option>
                                    </select>
                                </td>
                            </tr>
                        )}
                        {this.state.contract === 'b2b' && (
                            <tr>
                                <td>Cost of running the company</td>
                                <td>
                                    <input
                                        className={"gn-input"}
                                        type="number"
                                        value={this.state.companyRunningCost}
                                        onChange={(e) => this.setState({ companyRunningCost: e.target.value })}
                                    />
                                </td>
                            </tr>
                        )}
                        <tr>
                            <td>Monthly pay gross:</td>
                            <td>
                                <input
                                    className={"gn-input"}
                                    type="number"
                                    value={this.state.monthlyPayGross}
                                    onChange={(e) => this.setState({ monthlyPayGross: e.target.value })}
                                />
                            </td>
                        </tr>
                    </table>
                    <button onClick={this.handleCalculate}>Calculate</button>
                    {this.state.isCalculating && (
                        <div>
                            <h2>Monthly Net Pay for Each Month</h2>
                            <ul>
                                {this.state.months.map((item, index) => (
                                    <li key={index}>
                                        <span className="gn-month">{item.month}:</span>
                                        <span className="gn-pay">{item.pay}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                </div>
        );
    }
}

export default CalculatorEarning;