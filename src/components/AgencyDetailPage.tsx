import { useState } from 'react';
import { ArrowLeft, Building2, Users, Menu as MenuIcon, CreditCard, Settings, Save } from 'lucide-react';
import { ProfileSection } from './ProfileSection';
import { MenuConfigSection } from './MenuConfigSection';
import { AccountSection } from './AccountSection';
import { UsersSection } from './UsersSection';
import { SubscriptionsSection } from './SubscriptionsSection';

export function AgencyDetailPage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Stria Admin Portal</div>
                <div className="text-xs text-gray-500">System Administration</div>
              </div>
              <nav className="hidden md:flex gap-6 text-sm">
                <a href="#" className="text-gray-300 hover:text-white transition">Dashboard</a>
                <a href="#" className="text-white border-b-2 border-cyan-400 pb-1">Agency Management</a>
                <a href="#" className="text-gray-300 hover:text-white transition">Sites Management</a>
                <a href="#" className="text-gray-300 hover:text-white transition">Audit Logs</a>
              </nav>
            </div>
            <button className="text-sm text-gray-300 hover:text-white transition">Log Out</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4 transition">
            <ArrowLeft className="w-4 h-4" />
            Back to Agencies
          </button>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900 mb-2">Sure Point Compass Travel</h1>
              <p className="text-gray-600">Agency Details & Controls</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                View Portal
              </button>
              <button className="px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition flex items-center gap-2">
                <Save className="w-4 h-4" />
                Save All Changes
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-t-xl border-b border-gray-200 overflow-x-auto">
          <nav className="flex min-w-max">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition ${
                activeTab === 'profile'
                  ? 'border-cyan-500 text-cyan-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
              }`}
            >
              <Building2 className="w-4 h-4" />
              Profile
            </button>
            <button
              onClick={() => setActiveTab('menu')}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition ${
                activeTab === 'menu'
                  ? 'border-cyan-500 text-cyan-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
              }`}
            >
              <MenuIcon className="w-4 h-4" />
              Menu Configuration
            </button>
            <button
              onClick={() => setActiveTab('account')}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition ${
                activeTab === 'account'
                  ? 'border-cyan-500 text-cyan-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
              }`}
            >
              <Settings className="w-4 h-4" />
              Account Settings
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition ${
                activeTab === 'users'
                  ? 'border-cyan-500 text-cyan-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
              }`}
            >
              <Users className="w-4 h-4" />
              Users
            </button>
            <button
              onClick={() => setActiveTab('subscriptions')}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition ${
                activeTab === 'subscriptions'
                  ? 'border-cyan-500 text-cyan-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              Subscriptions
            </button>
          </nav>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-b-xl shadow-sm p-8">
          {activeTab === 'profile' && <ProfileSection />}
          {activeTab === 'menu' && <MenuConfigSection />}
          {activeTab === 'account' && <AccountSection />}
          {activeTab === 'users' && <UsersSection />}
          {activeTab === 'subscriptions' && <SubscriptionsSection />}
        </div>
      </div>
    </div>
  );
}
