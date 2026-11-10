
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function WellnessChart({ data }) {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <h3>Wellness Trends</h3>
          <p style={{ color: "#71879D", fontSize: 10, marginTop: 5 }}>
            Your last 7 days
          </p>
        </div>

        <span style={{ color: "#71879D", fontSize: 10 }}>
          LAST 7 DAYS
        </span>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 8, left: -25, bottom: 0 }}
          >
            <CartesianGrid
              stroke="#26364A"
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              stroke="#71879D"
              tick={{ fill: "#91A5B9", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[0, 5]}
              ticks={[0, 1, 2, 3, 4, 5]}
              stroke="#71879D"
              tick={{ fill: "#91A5B9", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "#192A40",
                border: "1px solid #26364A",
                borderRadius: 10,
                color: "#F1F5FA",
                fontSize: 11,
              }}
            />

            <Line
              type="monotone"
              dataKey="mood"
              name="Mood"
              stroke="#818CF8"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 5 }}
            />

            <Line
              type="monotone"
              dataKey="stress"
              name="Stress"
              stroke="#55D6E8"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-legend">
        <div className="legend-item">
          <span
            className="legend-dot"
            style={{ background: "#818CF8" }}
          />
          Mood
        </div>

        <div className="legend-item">
          <span
            className="legend-dot"
            style={{ background: "#55D6E8" }}
          />
          Stress
        </div>
      </div>
    </section>
  );
}
