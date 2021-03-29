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

function IndicatorDetailGraph({ indicator }) {
  return (
    <div style={{ height: "400px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={indicator.data_set}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis dataKey="value" />
          <Tooltip />
          <Legend />
          <Line data={indicator.data_set} type="monotone" dataKey="value" />
          {indicator.indicator_set.map((subindicator) => (
            <Line
              data={subindicator.data_set}
              type="monotone"
              dataKey="value"
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default IndicatorDetailGraph;
