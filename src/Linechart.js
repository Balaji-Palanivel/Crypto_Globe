/*eslint-disable*/
import { Component } from "react";
import moment from "moment";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default class Linechart extends Component {
  dateFormatter = (item) => {
    return moment(new Date(item)).format("MMM YY");
  };
  dateFormatter_1 = (item) => {
    return moment(new Date(item)).format("DD MMM YY");
  };

  render() {
    return (
      <ResponsiveContainer width="100%" height={550}>
        <LineChart
          width={1150}
          height={600}
          data={this.props.data}
          margin={{
            top: 50,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis dataKey="date" tickFormatter={this.dateFormatter} />
          <YAxis />
          <Tooltip
            labelFormatter={this.dateFormatter_1}
            formatter={(value, name) =>
              name === "priceUsd" ? parseInt(value) : value.toLocaleString()
            }
          />
          <Legend />
          <Line type="monotone" dataKey="priceUsd" activeDot={{ r: 2 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
