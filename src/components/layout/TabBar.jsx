import { NAV } from '../../data/navigation';

export default function TabBar({ activeId, scrollTo }) {
  return (
    <div className="tabbar">
      {NAV.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className={`tab mono ${activeId === item.id ? 'active' : ''}`}
            onClick={() => scrollTo(item.id)}
          >
            <Icon size={13} style={{ color: item.color }} />
            {item.label}
          </div>
        );
      })}
    </div>
  );
}