import { getTodayPrayerTimes, formatTime } from "../../utils/prayerTimes";

function getNextPrayer() {
  const now = new Date();
  const todayTimes = getTodayPrayerTimes();

  for (const [name, time] of Object.entries(todayTimes)) {
    if (now < time) {
      return { name, time };
    }
  }

  // لو كل صلوات اليوم خلصت → فجر الغد
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const tomorrowTimes = getTodayPrayerTimes(tomorrow);

  return { name: "fajr", time: tomorrowTimes.fajr };
}

function timeRemaining(target) {
  const diff = target - new Date();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hours > 0) return `${hours} ساعة و ${mins} دقيقة`;
  return `${mins} دقيقة`;
}

export default function NextPrayerCard() {
  const next = getNextPrayer();

  const prayerNames = {
    fajr: "الفجر",
    dhuhr: "الظهر",
    asr: "العصر",
    maghrib: "المغرب",
    isha: "العشاء",
  };

  return (
    <div className="next-prayer-card">
      <p className="label">الصلاة القادمة</p>

      <h2>{prayerNames[next.name]}</h2>

      <p className="remaining">
        بعد {timeRemaining(next.time)}
      </p>

      <p className="time">
        الوقت: {formatTime(next.time)}
      </p>

      <div className="actions">
        <button>استعد للصلاة</button>
        <button className="secondary">ذكّرني</button>
      </div>
    </div>
  );
}