/*eslint-disable*/
import { Component } from 'react';
import moment from 'moment';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class Barchart extends Component {
    dateFormatter = (item) => { return moment(new Date(item)).format('MMM YY') }
    dateFormatter_1 = (item) => { return moment(new Date(item)).format('DD MMM YY') }
    render() {

        return (
            <ResponsiveContainer width="100%" height={550}>
            <BarChart
              
                data={this.props.data}
                margin={{
                    top: 130,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <XAxis dataKey="date" tickFormatter={this.dateFormatter} />
                <YAxis />
                <Tooltip labelFormatter={this.dateFormatter_1} formatter={(value, name) => (name === "priceUsd") ? parseInt(value) : value.toLocaleString()} />
                <Legend />
                <Bar dataKey="priceUsd" fill="#8884d8" />
            </BarChart>
            </ResponsiveContainer>
      );
    }
}