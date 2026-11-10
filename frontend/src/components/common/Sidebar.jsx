
import {
  Orbit,
  LayoutDashboard,
  Brain,
  Moon,
  Sparkles,
  Settings,
  Rocket,
} from "lucide-react";

const navigation = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Mental Check-in", icon: Brain },
  { label: "Sleep Tracking", icon: Moon },
  { label: "Insights", icon: Sparkles },
];

export default function Sidebar({ isOpen, onNavigate }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="brand">
        <div className="brand-icon">
          <Orbit size={25} />
        </div>

        <div>
          <div className="brand-name">AstroCare</div>
          <div className="brand-caption">
            ASTRONAUT WELLNESS SYSTEM
          </div>
        </div>
      </div>

      <div className="nav-label">MAIN MENU</div>

      <nav className="nav-menu">
        {navigation.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className={`nav-item ${index === 0 ? "active" : ""}`}
              onClick={() => onNavigate?.(item.label)}
              type="button"
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <div className="mission-card">
          <Rocket size={20} color="#55D6E8" />

          <p style={{ marginTop: 12 }}>CURRENT MISSION</p>

          <strong>Expedition 042</strong>
        </div>

        <button className="nav-item" style={{ marginTop: 15 }}>
          <Settings size={18} />
          <span>Settings</span>
        </button>
      </div>
    </aside>
  );
}
