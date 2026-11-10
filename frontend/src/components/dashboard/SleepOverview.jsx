
import { MoonStar } from "lucide-react";

export default function SleepOverview({ data }) {
  const progress = Math.min(
    (data.duration / data.target) * 100,
    100
  );

  const hours = Math.floor(data.duration);
  const minutes = Math.round((data.duration - hours) * 60);

  return (
    <section className="panel">
      <div className="panel-header">
        <div className="panel-title">
          <div className="panel-icon">
            <MoonStar size={20} />
          </div>

          <div>
            <h3>Sleep Overview</h3>
            <p>Last recorded sleep</p>
          </div>
        </div>

        <span className="quality-badge">Good</span>
      </div>

      <div className="sleep-duration">
        {hours}h {minutes}m
        <span> / {data.target}h target</span>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="sleep-details">
        <span>Sleep quality</span>
        <strong>{data.quality} / 5</strong>
      </div>

      <div className="sleep-details">
        <span>Bedtime</span>
        <strong>{data.bedtime}</strong>
      </div>

      <div className="sleep-details">
        <span>Wake up</span>
        <strong>{data.wakeup}</strong>
      </div>
    </section>
  );
}
