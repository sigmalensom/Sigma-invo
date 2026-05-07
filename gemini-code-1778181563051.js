import React, { useState, useEffect } from 'react';
import './App.css'; // Design images-le pole aakan CSS file venam

function App() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Loading Screen Animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <h2 className="loading-text">SIGMA MANAGER...</h2>
        <div className="spinner"></div>
        <p>Sigma System Connecting...</p>
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* Sidebar - Images-le pole */}
      <div className="sidebar">
        <div className="brand">
          <div className="camera-icon">📷</div>
          <h2>SIGMA STUDIO</h2>
        </div>
        <nav>
          <button className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>Dashboard</button>
          <button className={activeTab === 'billing' ? 'active' : ''} onClick={() => setActiveTab('billing')}>Create Bill</button>
          <button className={activeTab === 'invoices' ? 'active' : ''} onClick={() => setActiveTab('invoices')}>Invoices</button>
          <button className={activeTab === 'inventory' ? 'active' : ''} onClick={() => setActiveTab('inventory')}>Inventory</button>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        <header>
          <input type="text" placeholder="Search..." className="search-bar" />
          <div className="profile-icon">👤</div>
        </header>

        {activeTab === 'dashboard' && (
          <div className="dashboard-view">
            <h1>Dashboard</h1>
            <div className="welcome-card">
              <h3>Welcome back, Sajin</h3>
              <p>Professional Photography | Inventory System v1.0</p>
            </div>
            <div className="stats-grid">
              <div className="stat-card">Location: Salalah, Dhofar</div>
              <div className="stat-card">Database: Connected</div>
              <div className="stat-card">App Status: Live</div>
            </div>
          </div>
        )}

        {activeTab === 'billing' && (
          <div className="billing-view">
            <h1>Billing Counter</h1>
            <div className="billing-form">
              <div className="customer-details">
                <h3>Customer Details</h3>
                <input type="text" placeholder="Client Name" />
                <input type="text" defaultValue="+968 " />
                <input type="text" placeholder="Address / Location" />
              </div>
              <button className="confirm-btn">CONFIRM & GENERATE</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;