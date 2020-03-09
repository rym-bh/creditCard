import React, { Component } from 'react'

class CreditCard extends Component {
    state = {
        cardNumber: "**** **** **** ****",
        name: "********************",
        expiry: "**/**"
    }
    handleNumber = (e) => {
        e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
        this.setState({
            cardNumber: e.target.value

        })
    }
    handleName = (n) => {
        {
            this.setState({
                name: n.target.value
            })
            this.setState({ name: n.target.value.toUpperCase() })
        }
    }
    handleExpiry = (c) => {
        if (c.target.value.substring(0, 2) < 13)
            this.setState({
                expiry: c.target.value.split("").slice(0, 2).concat("/", ((c.target.value).split("").slice(2, 4)))
                // expiry:c.target.value
            })
    }









    render() {
        return (
            <div className="credit">
                <div className="creditCard">
                    <h1 className="creditCard-title">Credit Card</h1>
                    <div className="creditCard-chip" >
                        </div>
                    <div className="creditCard-content">
                        
                        <div className="creditCard-logo">
                         
                            <h2 className="creditCard-number">{this.state.cardNumber}</h2>
                            <h2 className="creditCard-thru">
                                {this.state.expiry}</h2>
                            <h2 className="creditCard-name">{this.state.name}</h2>
                        </div>
                    </div>



                </div>
                <div className="box">
                    <input placeholder ="CardNumber"maxLength="19" onChange={this.handleNumber} ></input>
                    <input placeholder ="Name" maxLength="20" onChange={this.handleName}></input>
                    <input placeholder ="Thru" maxLength="4" onChange={this.handleExpiry} ></input>
                </div>
            </div>



        )
    }
}


export default CreditCard