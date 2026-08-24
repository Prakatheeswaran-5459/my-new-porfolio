import { NAV } from '../../data/navigation';

export default function Sidebar({ activeId, scrollTo, profile, mobileOpen }) {
  // Debug: Log profile to check if it's being passed
  console.log('Sidebar profile:', profile);

  return (
    <aside className={`sidebar ${mobileOpen ? 'open' : ''}`}>
      <div className="sidebar-profile">
        <div className="avatar mono">{profile.name.slice(0, 2).toUpperCase()}</div>
        {/* Display profile name */}
        <div style={{ fontWeight: 700, fontSize: 14 }}>{profile.name}</div>
        {/* Display profile role */}
        <div style={{ fontSize: 12, color: 'var(--text-dim)' }}>{profile.role}</div>
        <div className="status-line mono">
          <span className="status-dot" />
          {/* Display profile status */}
          {profile.status}
        </div>
      </div>

      <div className="sidebar-heading mono">Explorer</div>
      {NAV.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            className={`sidebar-item mono ${activeId === item.id ? 'active' : ''}`}
            onClick={() => scrollTo(item.id)}
          >
            <Icon size={15} style={{ color: item.color }} />
            {item.label}
          </button>
        );
      })}
    </aside>
  );
}