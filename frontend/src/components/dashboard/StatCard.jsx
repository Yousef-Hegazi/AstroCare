
import {
  Brain,
  Activity,
  BatteryMedium,
  Users,
} from "lucide-react";

const icons = {
  brain: Brain,
  activity: Activity,
  battery: BatteryMedium,
  users: Users,
};

export default function StatCard({ item }) {
  const Icon = icons[item.type];

  return (
    <div className="stat-card">
      <div className="stat-top">
        <div
          className="stat-icon"
          style={{
            background: `${item.color}18`,
            color: item.color,
          }}
        >
          <Icon size={19} />
        </div>

        <span className="stat-label">{item.title}</span>
      </div>

      <div className="stat-value">
        {item.value}
        <span style={{ fontSize: 13, color: "#71879D" }}>
          {item.unit}
        </span>
      </div>

      <div className="stat-footer">
        {item.status}
      </div>
    </div>
  );
}
