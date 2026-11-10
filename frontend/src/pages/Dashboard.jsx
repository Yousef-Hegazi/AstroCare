
import { useState } from "react";
import {
  CheckCircle2,
  PlusCircle,
  Moon,
} from "lucide-react";

import Sidebar from "../components/common/Sidebar";
import Topbar from "../components/common/Topbar";

import StatCard from "../components/dashboard/StatCard";
import SleepOverview from "../components/dashboard/SleepOverview";
import WellnessChart from "../components/dashboard/WellnessChart";
import InsightCard from "../components/dashboard/InsightCard";

import {
  astronaut,
  wellnessData,
  sleepData,
  weeklyTrends,
  latestInsight,
} from "../data/mockData";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigate = (page) => {
    if (page !== "Dashboard") {
      alert(`${page} page is waiting for implementation.`);
    }

    setSidebarOpen(false);
  };

  return (
    <div className="app-layout">
      <Sidebar
        isOpen={sidebarOpen}
        onNavigate={handleNavigate}
      />

      <main className="main-content">
        <Topbar
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />

        <div className="dashboard">

          {/* Page Heading */}

          <div className="page-heading">
            <div>
              <h1>Mission Overview</h1>

              <p>
                Tuesday, November 10, 2026
                {" · "}
                Mission Day {astronaut.missionDay}
              </p>
            </div>

            <div className="system-status">
              <span className="status-dot" />
              SYSTEM ONLINE
            </div>
          </div>

          {/* Welcome Section */}

          <section className="welcome-card">
            <h2>
              Welcome back, {astronaut.name}
            </h2>

            <p>
              Your well-being matters. Let's check how
              you're doing today and keep your mission
              on the right track.
            </p>

            <div className="welcome-footer">
              <span className="welcome-badge">
                <CheckCircle2
                  size={12}
                  style={{
                    display: "inline",
                    verticalAlign: "middle",
                    marginRight: 5,
                  }}
                />
                No critical alerts
              </span>

              <span className="welcome-link">
                YOUR WELLNESS MATTERS
              </span>
            </div>
          </section>

          {/* Wellness Overview */}

          <div className="section-heading">
            <h3>Today's Wellness</h3>
            <span>Latest recorded check-in</span>
          </div>

          <section className="wellness-grid">
            {wellnessData.map((item) => (
              <StatCard
                key={item.title}
                item={item}
              />
            ))}
          </section>

          {/* Sleep & Trends */}

          <div className="content-grid">
            <SleepOverview data={sleepData} />

            <WellnessChart data={weeklyTrends} />
          </div>

          {/* Insights */}

          <InsightCard data={latestInsight} />

          {/* Quick Actions */}

          <div className="section-heading">
            <h3>Quick Actions</h3>
            <span>Keep your records updated</span>
          </div>

          <div className="actions-grid">
            <button
              className="action-button action-primary"
              onClick={() =>
                alert("Mental Check-in is waiting for implementation.")
              }
            >
              <PlusCircle size={18} />
              Daily Check-in
            </button>

            <button
              className="action-button action-secondary"
              onClick={() =>
                alert("Sleep Tracking is waiting for implementation.")
              }
            >
              <Moon size={18} />
              Log Sleep
            </button>
          </div>

          <p className="demo-note">
            AstroCare Dashboard · Demo Data · Not for medical diagnosis
          </p>

        </div>
      </main>
    </div>
  );
}
