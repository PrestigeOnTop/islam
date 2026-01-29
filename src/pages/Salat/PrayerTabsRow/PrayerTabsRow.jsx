import PrayerTab from "./PrayerTab";

const prayers = [
  { key: "fajr", name: "الفجر", time: "05:12" },
  { key: "dhuhr", name: "الظهر", time: "12:34" },
  { key: "asr", name: "العصر", time: "15:58" },
  { key: "maghrib", name: "المغرب", time: "18:42" },
  { key: "isha", name: "العشاء", time: "20:10" },
];

export default function PrayerTabsRow() {
  return (
    <div className="prayer-tabs-row">
      {prayers.map((p) => (
        <PrayerTab key={p.key} prayer={p} />
      ))}
    </div>
  );
}