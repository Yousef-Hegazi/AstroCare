
import { Sparkles } from "lucide-react";

export default function InsightCard({ data }) {
  return (
    <section className="insight-card">
      <div className="insight-icon">
        <Sparkles size={20} />
      </div>

      <div className="insight-content">
        <h3>{data.title}</h3>

        <p>{data.description}</p>

        <span className="insight-label">
          {data.type}
        </span>
      </div>
    </section>
  );
}
