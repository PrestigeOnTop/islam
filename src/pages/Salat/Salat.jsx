import "./Salat.css";
import PrayerClock from "./TimeSection/PrayerClock";
import TodayDate from "./TimeSection/TodayDate";
import PrayerTabsRow from "./PrayerTabsRow/PrayerTabsRow";
import NextPrayerCard from "./NextPrayerCard";
import GoalsPanel from "./GoalsSection/GoalsPanel";
import ReflectionSection from "./Reflection.jsx";

export default function Salat() {
  return (
    <div className="salat-page">
      <PrayerClock />
      <TodayDate />
      <PrayerTabsRow />
      <NextPrayerCard />
      <GoalsPanel />
      <ReflectionSection />
    </div>
  );
}