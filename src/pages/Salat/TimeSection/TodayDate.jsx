export default function TodayDate() {
  const today = new Date().toLocaleDateString("ar-SA", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return <div className="today-date">{today}</div>;
}