import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Component } from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


export default class Compare_Bar extends Component {
    constructor(props){
        super(props);
    }
    render(){ console.log(this.props.data,"Compare - ");
  return (
    <div>
    <ComposedChart
     width={1150}
     height={600}
     data={this.props.data}
     margin={{
         top: 290,
         right: 390,
         left: 450,
         bottom: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis
        dataKey="date"
        label={{ value: "Pages", position: "insideBottomRight", offset: 0 }}
        scale="band"
      />
      <YAxis label={{ value: "Index", angle: -90, position: "insideLeft" }} />
      <Tooltip />
      <Legend />
      <Bar dataKey="priceUsd_1" barSize={20} fill="#413ea" />
      <Bar dataKey="priceUsd_2" barSize={20} fill="#413ea0" />
     
    </ComposedChart>
    </div>
  );
}
}
