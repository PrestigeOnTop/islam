import { useState } from "react";
import "./Goals.css";

const DEFAULT_GOALS = [
  { id: 1, text: "المحافظة على الصلوات الخمس", done: false },
  { id: 2, text: "ذكر الله يوميًا ولو قليلًا", done: false },
  { id: 3, text: "ترك عادة سيئة واحدة", done: false },
  { id: 4, text: "قراءة صفحة قرآن يوميًا", done: false },
];

export default function Goals() {
  const [goals, setGoals] = useState(DEFAULT_GOALS);
  const [newGoal, setNewGoal] = useState("");

  const toggleGoal = (id) => {
    setGoals(
      goals.map((g) =>
        g.id === id ? { ...g, done: !g.done } : g
      )
    );
  };

  const addGoal = () => {
    if (!newGoal.trim()) return;
    setGoals([
      ...goals,
      { id: Date.now(), text: newGoal, done: false },
    ]);
    setNewGoal("");
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter((g) => g.id !== id));
  };

  return (
    <div className="goals-page">
      {/* Header */}
      <div className="goals-header">
        <h1>الأهداف</h1>
        <p>خطوات صغيرة… تقرّبك إلى الله</p>
      </div>

      {/* Goals List */}
      <div className="goals-list">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className={
              goal.done ? "goal-item done" : "goal-item"
            }
          >
            <label>
              <input
                type="checkbox"
                checked={goal.done}
                onChange={() => toggleGoal(goal.id)}
              />
              <span>{goal.text}</span>
            </label>

            <button
              className="delete-btn"
              onClick={() => deleteGoal(goal.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Add Goal */}
      <div className="add-goal">
        <input
          type="text"
          placeholder="أضف هدفًا جديدًا…"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
        />
        <button onClick={addGoal}>إضافة</button>
      </div>

      {/* Footer Reminder */}
      <div className="goals-dua">
        اللهم أعنّي على تحقيق ما يُرضيك 🤍
      </div>
    </div>
  );
}