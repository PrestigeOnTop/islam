import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" end className="nav-item">
        <span className="icon">🏠</span>
        <span className="label">الرئيسية</span>
      </NavLink>

      <NavLink to="/salat" className="nav-item">
        <span className="icon">🕌</span>
        <span className="label">الصلاة</span>
      </NavLink>

      <NavLink to="/dhikr" className="nav-item">
        <span className="icon">📿</span>
        <span className="label">الذكر</span>
      </NavLink>

      <NavLink to="/goals" className="nav-item">
        <span className="icon">🎯</span>
        <span className="label">الأهداف</span>
      </NavLink>

      <NavLink to="/emergency" className="nav-item emergency">
        <span className="icon">🤍</span>
        <span className="label">مساعدة</span>
      </NavLink>
    </nav>
  );
}
