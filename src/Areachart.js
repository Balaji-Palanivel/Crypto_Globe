import { Component } from 'react';
import moment from 'moment';
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

export default class AreChart extends Component {
  dateFormatter = (item) => { return moment(new Date(item)).format('MMM YY') }
  render() {

    return (<div >
      <AreaChart
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
        <Area type="monotone" dataKey="priceUsd" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>





    </div>);
  }
}