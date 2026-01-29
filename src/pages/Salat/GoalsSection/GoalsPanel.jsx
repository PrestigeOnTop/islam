import { useState } from "react";

export default function GoalsPanel() {
  const [open, setOpen] = useState(false);

  return (
    <div className="goals-panel">
      <div className="goals-header" onClick={() => setOpen(!open)}>
        🎯 أهداف الصلاة
      </div>

      {open && (
        <div className="goals-content">
          <label>
            <input type="checkbox" /> الفجر في وقته
          </label>
          <label>
            <input type="checkbox" /> عدم ترك صلاة متعمدًا
          </label>
        </div>
      )}
    </div>
  );
}