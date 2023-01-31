/*eslint-disable*/
import { Component } from "react";
import moment from "moment";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default class AreChart extends Component {
  dateFormatter = (item) => {
    return moment(new Date(item)).format("MMM YY");
  };
  dateFormatter_1 = (item) => {
    return moment(new Date(item)).format("DD MMM YY");
  };
  render() {
    return (
      <div>
        <ResponsiveContainer width="100%" height={550}>
          <AreaChart
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
            <Area
              type="monotone"
              dataKey="priceUsd"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
