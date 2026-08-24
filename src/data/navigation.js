// Import from react-icons (much more reliable)
import { 
  FiFile,        // For file icon
  FiUser,        // For user
  FiAward,       // For award
  FiBriefcase,   // For briefcase
  FiFolder,      // For folder
  FiTerminal     // For terminal
} from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';

export const NAV = [
  { id: 'home', label: 'Home.jsx', icon: FiFile, color: '#61dafb' },
  { id: 'about', label: 'About.md', icon: FiUser, color: '#519aba' },
  { id: 'skills', label: 'Skills.json', icon: FiAward, color: '#cbcb41' },
  { id: 'experience', label: 'Experience.js', icon: FiBriefcase, color: '#dcdcaa' },
  { id: 'education', label: 'Education', icon: FaGraduationCap, color: '#4ec9b0' },
  { id: 'projects', label: 'Projects', icon: FiFolder, color: '#61dafb' },
  { id: 'contact', label: 'contact.sh', icon: FiTerminal, color: '#4ec9b0' },
];