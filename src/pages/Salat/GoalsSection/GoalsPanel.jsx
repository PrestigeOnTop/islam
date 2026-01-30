
const goals = [
  { id: 1, text: "الفجر في وقته", progress: 3, total: 7 },
  { id: 2, text: "عدم ترك صلاة متعمّدًا", progress: 1, total: 1 },
];

export default function GoalsSection() {
  return (
    <div className="goals-section">
      <h3>🎯 أهداف الصلاة</h3>

      {goals.map((g) => (
        <div key={g.id} className="goal-card">
          <p>{g.text}</p>

          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${(g.progress / g.total) * 100}%`,
              }}
            />
          </div>

          <span className="goal-count">
            {g.progress} / {g.total}
          </span>
        </div>
      ))}
    </div>
  );
}
