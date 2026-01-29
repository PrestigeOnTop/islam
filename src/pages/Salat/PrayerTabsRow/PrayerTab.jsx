export default function PrayerTab({ prayer }) {
  return (
    <div className="prayer-tab">
      <span className="prayer-name">{prayer.name}</span>
      <span className="prayer-time">{prayer.time}</span>
    </div>
  );
}