import { useEffect, useState } from "react";

export default function PrayerClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="prayer-clock">
      {time.toLocaleTimeString("ar-SA", {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </div>
  );
}