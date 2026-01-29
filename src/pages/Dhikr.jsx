import { useState } from "react";
import "./Dhikr.css";

const DHIKR_LIST = [
  { id: 1, text: "سبحان الله" },
  { id: 2, text: "الحمد لله" },
  { id: 3, text: "الله أكبر" },
  { id: 4, text: "لا إله إلا الله" },
  { id: 5, text: "أستغفر الله" },
  { id: 6, text: "اللهم صلِّ على محمد" },
];

export default function Dhikr() {
  const [count, setCount] = useState(0);
  const [currentDhikr, setCurrentDhikr] = useState(DHIKR_LIST[0]);

  return (
    <div className="dhikr-page">
      {/* Header */}
      <div className="dhikr-header">
        <h1>الذِكر</h1>
        <p>اطمئن قلبك بذكر الله</p>
      </div>

      {/* Main Card */}
      <div className="dhikr-card">
        <p className="dhikr-text">{currentDhikr.text}</p>

        <div className="dhikr-counter">{count}</div>

        <button
          className="dhikr-btn"
          onClick={() => setCount(count + 1)}
        >
          ذكـر
        </button>

        <button
          className="dhikr-reset"
          onClick={() => setCount(0)}
        >
          إعادة
        </button>
      </div>

      {/* Dhikr Selector */}
      <div className="dhikr-list">
        {DHIKR_LIST.map((d) => (
          <button
            key={d.id}
            className={
              d.id === currentDhikr.id
                ? "dhikr-item active"
                : "dhikr-item"
            }
            onClick={() => {
              setCurrentDhikr(d);
              setCount(0);
            }}
          >
            {d.text}
          </button>
        ))}
      </div>

      {/* Footer Dua */}
      <div className="dhikr-dua">
        اللهم اجعل ألسنتنا عامرة بذكرك 🤍
      </div>
    </div>
  );
}