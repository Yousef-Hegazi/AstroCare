
import { Bell, Menu, UserRound } from "lucide-react";

export default function Topbar({ onMenuClick }) {
  return (
    <header className="topbar">
      <button
        className="mobile-menu-button"
        onClick={onMenuClick}
        aria-label="Open navigation"
      >
        <Menu size={22} />
      </button>

      <button className="topbar-icon" aria-label="Notifications">
        <Bell size={19} />
        <span className="notification-dot" />
      </button>

      <div className="profile">
        <div className="avatar">
          <UserRound size={18} />
        </div>

        <div className="profile-info">
          <strong>Commander Alex</strong>
          <span>Astronaut Account</span>
        </div>
      </div>
    </header>
  );
}
