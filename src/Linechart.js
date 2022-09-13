import { Component } from 'react';
import moment from 'moment';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default class Linechart extends Component {
    dateFormatter = (item) => { return moment(new Date(item)).format('MMM YY') }

    render() {
        return (

            <LineChart
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
                <Line type="monotone" dataKey="priceUsd" stroke="#8884d8" activeDot={{ r: 8 }} />

            </LineChart>

        );
    }
}
