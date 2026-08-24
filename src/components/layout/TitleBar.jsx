import { FiMenu, FiX } from 'react-icons/fi';
import WindowDots from '../common/WindowDots';

export default function TitleBar({ name, mobileOpen, setMobileOpen }) {
  return (
    <div className="titlebar">
      <button className="menu-btn" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle navigation">
        {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
      </button>
      <WindowDots />
      <p className="titlebar-title mono">{name?.toLowerCase() || 'portfolio'}-portfolio — visual studio code</p>
    </div>
  );
}