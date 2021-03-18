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

const indicatorData = [
  { year: "2016", value: 2, source: "NDHS" },
  { year: "2017", value: 5, source: "NDHS" },
  { year: "2018", value: 10, source: "NDHS" },
  { year: "2019", value: 14, source: "NDHS" },
  { year: "2020", value: 29, source: "NDHS" },
];

const subIndicatorData = [
  { year: "2016", value: 1, source: "NDHS" },
  { year: "2017", value: 2, source: "NDHS" },
  { year: "2018", value: 4, source: "NDHS" },
  { year: "2019", value: 4, source: "NDHS" },
  { year: "2020", value: 9, source: "NDHS" },
];

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
          <YAxis />
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
