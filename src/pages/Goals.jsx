import { useEffect, useState } from "react";
import "./Goals.css";

const DEFAULT_GOALS = [
  { id: 1, text: "المحافظة على الصلوات الخمس", done: false },
  { id: 2, text: "ذكر الله يوميًا ولو قليلًا", done: false },
  { id: 3, text: "ترك عادة سيئة واحدة", done: false },
  { id: 4, text: "قراءة صفحة قرآن يوميًا", done: false },
];

const STORAGE_KEY = "islamic_goals";

export default function Goals() {
  const [goals, setGoals] = useState([]);

  // 🔹 Load goals once
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setGoals(JSON.parse(saved));
    } else {
      setGoals(DEFAULT_GOALS);
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(DEFAULT_GOALS)
      );
    }
  }, []);

  // 🔹 Save goals on change
  useEffect(() => {
    if (goals.length) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(goals)
      );
    }
  }, [goals]);

  const toggleGoal = (id) => {
    setGoals((prev) =>
      prev.map((g) =>
        g.id === id ? { ...g, done: !g.done } : g
      )
    );
  };

  const addGoal = (text) => {
    if (!text.trim()) return;
    setGoals((prev) => [
      ...prev,
      { id: Date.now(), text, done: false },
    ]);
  };

  const deleteGoal = (id) => {
    setGoals((prev) =>
      prev.filter((g) => g.id !== id)
    );
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
      <AddGoal onAdd={addGoal} />

      {/* Footer */}
      <div className="goals-dua">
        اللهم أعنّي على تحقيق ما يُرضيك 🤍
      </div>
    </div>
  );
}

/* 🔸 Component صغير للإضافة */
function AddGoal({ onAdd }) {
  const [value, setValue] = useState("");

  const submit = () => {
    onAdd(value);
    setValue("");
  };

  return (
    <div className="add-goal">
      <input
        type="text"
        placeholder="أضف هدفًا جديدًا…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={submit}>إضافة</button>
    </div>
  );
}
