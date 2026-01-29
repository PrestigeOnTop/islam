import "./Home.css";
import { ayat } from "../content/ayat";
import { encouragements } from "../content/encouragements";

export default function Home() {
  const randomAyah = ayat[Math.floor(Math.random() * ayat.length)];
  const encouragement =
    encouragements[Math.floor(Math.random() * encouragements.length)];

  return (
    <div className="home">
      <div className="overlay">
        <h1 className="basmala">بسم الله</h1>
        <p className="niyyah">اليوم نية صادقة ومحاولة جديدة.</p>

        <div className="ayah-card">
          <p className="ayah">{randomAyah}</p>
          <span className="ayah-ref">[البقرة: 222]</span>
        </div>

        <p className="encouragement">{encouragement}</p>

        <button className="primary-btn">🤍 ذكر الله</button>
      </div>
    </div>
  );
}
