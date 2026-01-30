import PrayerTab from "./PrayerTab";
import { getTodayPrayerTimes, formatTime } from "../../../utils/prayerTimes";

export default function PrayerTabsRow() {
  const times = getTodayPrayerTimes();

  const prayers = [
    { key: "fajr", name: "الفجر", time: formatTime(times.fajr) },
    { key: "dhuhr", name: "الظهر", time: formatTime(times.dhuhr) },
    { key: "asr", name: "العصر", time: formatTime(times.asr) },
    { key: "maghrib", name: "المغرب", time: formatTime(times.maghrib) },
    { key: "isha", name: "العشاء", time: formatTime(times.isha) },
  ];

  return (
    <div className="prayer-tabs-row">
      {prayers.map((p) => (
        <PrayerTab key={p.key} prayer={p} />
      ))}
    </div>
  );
}