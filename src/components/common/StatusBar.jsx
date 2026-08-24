import { FiGitBranch, FiCircle, FiSearch } from 'react-icons/fi';

export default function StatusBar({ profile }) {
  return (
    <div className="statusbar mono">
      <span><FiGitBranch size={12} /> main</span>
      <span><FiCircle size={8} fill="#fff" /> {profile?.status || 'Open to work'}</span>
      <span style={{ marginLeft: 'auto' }}>{profile?.location || 'Chennai, India'}</span>
      <span><FiSearch size={12} /> UTF-8</span>
    </div>
  );
}