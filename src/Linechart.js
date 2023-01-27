/*eslint-disable*/
import { Component } from 'react';
import moment from 'moment';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default class Linechart extends Component {
    dateFormatter = (item) => { return moment(new Date(item)).format('MMM YY') }
    dateFormatter_1 = (item) => { return moment(new Date(item)).format('DD MMM YY') }

    render() {
        return (

            <LineChart
                width={1150}
                height={600}
                data={this.props.data}
                margin={{
                    top: 190,
                    right: 30,
                    left: 50,
                    bottom: 5,
                }}
            >

                <XAxis dataKey="date" tickFormatter={this.dateFormatter} />
                <YAxis />
                <Tooltip labelFormatter={this.dateFormatter_1} formatter={(value, name) => (name === "priceUsd") ? parseInt(value) : value.toLocaleString()} />
                <Legend />
                <Line type="monotone" dataKey="priceUsd"  activeDot={{ r: 2 }} />

            </LineChart>

        );
    }
}
