import { Component } from 'react';
import moment from 'moment';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default class Barchart extends Component {
    dateFormatter = (item) => { return moment(new Date(item)).format('MMM YY') }
    render() {

        return (<div >
            <BarChart
                width={1000}
                height={400}
                data={this.props.data}
                margin={{
                    top: 50,
                    right: 30,
                    left: 50,
                    bottom: 5,
                }}
            >
                <XAxis dataKey="date" tickFormatter={this.dateFormatter} />
                <YAxis />
                <Tooltip labelFormatter={this.dateFormatter} formatter={(value, name) => (name === "priceUsd") ? parseInt(value) : value.toLocaleString()} />
                <Legend />
                <Bar dataKey="priceUsd" fill="#8884d8" />
            </BarChart>

        </div>);
    }
}