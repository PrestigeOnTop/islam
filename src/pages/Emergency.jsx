import { useEffect, useState } from "react";
import "./Emergency.css";

const DHIKR = [
  "أعوذ بالله من الشيطان الرجيم",
  "اللهم احفظ فرجي وطهّر قلبي",
  "حسبنا الله ونعم الوكيل",
  "استغفر الله العظيم",
  "لا حول ولا قوة إلا بالله",
];

export default function Emergency() {
  const [streak, setStreak] = useState(0);
  const [lastDate, setLastDate] = useState(null);
  const [dhikrIndex, setDhikrIndex] = useState(0);
  const [cooldown, setCooldown] = useState(false);

  // Load streak
  useEffect(() => {
  const savedStreak = Number(localStorage.getItem("nofap_streak")) || 0;
  const savedDate = localStorage.getItem("nofap_last_date");

  const today = new Date();
  const todayStr = today.toDateString();

  if (!savedDate) {
    // First ever time
    localStorage.setItem("nofap_last_date", todayStr);
    localStorage.setItem("nofap_streak", 1);
    setStreak(1);
    return;
  }

  const last = new Date(savedDate);
  const diffTime = today.setHours(0,0,0,0) - last.setHours(0,0,0,0);
  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  if (diffDays === 1) {
    // New day passed → increase streak
    const newStreak = savedStreak + 1;
    localStorage.setItem("nofap_streak", newStreak);
    localStorage.setItem("nofap_last_date", todayStr);
    setStreak(newStreak);
  } else if (diffDays === 0) {
    // Same day → do nothing
    setStreak(savedStreak);
  } else {
    // Missed days → reset streak (optional)
    localStorage.setItem("nofap_streak", 1);
    localStorage.setItem("nofap_last_date", todayStr);
    setStreak(1);
  }
}, []);

  const emergencyPress = () => {
    setCooldown(true);
    setDhikrIndex((i) => (i + 1) % DHIKR.length);

    setTimeout(() => {
      setCooldown(false);
    }, 10000); // 10 seconds urge delay
  };

  const resetStreak = () => {
    localStorage.setItem("nofap_streak", 0);
    localStorage.setItem("nofap_last_date", new Date().toDateString());
    setStreak(0);
  };

  return (
    <div className="emergency-page">
      {/* Header */}
      <div className="emergency-header">
        <h1>الطوارئ</h1>
        <p>قف. تنفّس. الله معك.</p>
      </div>

      {/* Streak */}
      <div className="streak-card">
        <p>الاستمرار</p>
        <h2>{streak} يوم</h2>
        <span>كل يوم صبر هو عبادة 🤍</span>
      </div>

      {/* Emergency Button */}
      <div className="panic-card">
        <p className="panic-text">
          إذا شعرت بالرغبة الآن
        </p>

        <button
          className={`panic-btn ${cooldown ? "cooldown" : ""}`}
          onClick={emergencyPress}
          disabled={cooldown}
        >
          🛑 أوقفني الآن
        </button>

        {cooldown && (
          <p className="cooldown-text">
            انتظر 10 ثوانٍ… الرغبة ستضعف
          </p>
        )}
      </div>

      {/* Dhikr / Tahfiz */}
      <div className="dhikr-card">
        <p className="dhikr-label">اذكر الله الآن</p>
        <h3 className="dhikr-text">{DHIKR[dhikrIndex]}</h3>
      </div>

      {/* Dua */}
      <div className="dua-card">
        <p>
          اللهم اصرف عني السوء والفحشاء،
          واجعلني من عبادك الصالحين
        </p>
      </div>

      {/* Reset (Mercy) */}
      <button className="reset-btn" onClick={resetStreak}>
        بدأت من جديد بنية صادقة
      </button>
    </div>
  );
}