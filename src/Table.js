/*eslint-disable*/
import { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default class Table_1 extends Component {
    constructor(props) {
        super(props);
     
    }

    render() {
        return (

            <div className="currency flex g-2">
                <table className="table table100 ver5">
                    <thead style={{position : "sticky" , top : "0px"}}>
                        <tr ><th>Currency</th></tr>
                    </thead>
                    <tbody >{this.props.All_assests ? this.props.All_assests.map((coin, index) =>
                        <tr key={index}>
                            <td onClick={(e) => this.props.SetCoin(coin.id,coin.name,coin.symbol,index)}>{coin.symbol +" - "+ coin.name} </td>
                        </tr>
                    ): ""}
                    </tbody>
                </table>
            </div>
            
        );
    }
}
