import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
  VictoryLine,
  VictoryArea,
} from "victory";
import map from "underscore/modules/map.js";
import _ from "lodash";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.getData() };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({ data: this.getData() });
    }, 4000);
  }

  getData() {
    return _.range(7).map(() => {
      return [
        { x: 1, y: 4 },
        { x: 2, y: 2 },
        { x: 3, y: 1 },
        { x: 4, y: 5 },
        { x: 5, y: 3 },
      ];
    });
  }

  render() {
    return (
      <VictoryChart theme={VictoryTheme.material} animate={{ duration: 1000 }}>
        <VictoryStack colorScale={"blue"}>
          {this.state.data.map((data, i) => {
            return <VictoryArea key={i} data={data} interpolation={"basis"} />;
          })}
        </VictoryStack>
        <VictoryAxis
          style={{
            axis: { stroke: "transparent" },
            ticks: { stroke: "transparent" },
            tickLabels: { fill: "transparent" },
          }}
        />
      </VictoryChart>
    );
  }
}
