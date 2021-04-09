import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Colors = ["red", "green", "blue", "pink", "orange", "purple"];

function IndicatorDetailGraph({ indicator }) {
  return (
    <div style={{ height: "400px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={indicator.data_set.sort((k, v) => k.year - v.year)}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" allowDuplicatedCategory={false} />
          <YAxis dataKey="value" />
          <Tooltip />
          <Legend />
          <Line
            data={indicator.data_set.sort((k, v) => k.year - v.year)}
            type="monotone"
            dataKey="value"
            name={indicator.name}
          />
          {indicator.subindicators.map((subindicator, index) => (
            <Line
              data={subindicator.data_set.sort((k, v) => k.year - v.year)}
              type="monotone"
              dataKey="value"
              stroke={Colors[index]}
              name={subindicator.name}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default IndicatorDetailGraph;
