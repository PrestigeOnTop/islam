export default function NextPrayerCard() {
  return (
    <div className="next-prayer-card">
      <p className="label">الصلاة القادمة</p>
      <h2>العصر</h2>
      <p className="remaining">بعد 42 دقيقة</p>

      <div className="actions">
        <button>استعد للصلاة</button>
        <button className="secondary">ذكّرني</button>
      </div>
    </div>
  );
}