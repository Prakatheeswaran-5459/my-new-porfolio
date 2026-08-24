import React from 'react';
import TitleBar from './TitleBar';
import Sidebar from './Sidebar';
import TabBar from './TabBar';
import StatusBar from '../common/StatusBar';

export default function Layout({ 
  children, 
  profile, 
  activeId, 
  scrollTo, 
  mobileOpen, 
  setMobileOpen 
}) {
  return (
    <div className="ide">
      <TitleBar 
        name={profile.name} 
        mobileOpen={mobileOpen} 
        setMobileOpen={setMobileOpen} 
      />
      
      <div className="layout">
        <Sidebar 
          activeId={activeId} 
          scrollTo={scrollTo} 
          profile={profile} 
          mobileOpen={mobileOpen} 
        />
        
        <div style={{ flex: 1, minWidth: 0 }}>
          <TabBar activeId={activeId} scrollTo={scrollTo} />
          
          <main className="editor">
            {children}
          </main>
        </div>
      </div>

      <StatusBar profile={profile} />
    </div>
  );
}