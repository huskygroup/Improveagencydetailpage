import { useState } from 'react';
import { Shield, CreditCard, AlertCircle } from 'lucide-react';

export function AccountSection() {
  const [agencyName, setAgencyName] = useState('Sure Point Compass Travel');
  const [accountTier, setAccountTier] = useState('2');
  const [labelStyle, setLabelStyle] = useState('white');
  const [status, setStatus] = useState('active');

  return (
    <div className="space-y-8">
      {/* Account Information */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Agency Name
            </label>
            <input
              type="text"
              value={agencyName}
              onChange={(e) => setAgencyName(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Account Tier
            </label>
            <select
              value={accountTier}
              onChange={(e) => setAccountTier(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="1">Tier 1 - Basic</option>
              <option value="2">Tier 2 - Professional</option>
              <option value="3">Tier 3 - Enterprise</option>
            </select>
          </div>
        </div>
      </div>

      {/* Display Settings */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Display Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Label Style
            </label>
            <select
              value={labelStyle}
              onChange={(e) => setLabelStyle(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="white">White Label</option>
              <option value="branded">Branded</option>
              <option value="custom">Custom</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Account Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="active">Active</option>
              <option value="suspended">Suspended</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Account Statistics */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg p-6 border border-cyan-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-cyan-500 rounded-lg">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-cyan-900">Tier Status</span>
            </div>
            <p className="text-2xl font-semibold text-cyan-900">Professional</p>
            <p className="text-xs text-cyan-700 mt-1">Tier 2 Features Enabled</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-500 rounded-lg">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-green-900">Billing Status</span>
            </div>
            <p className="text-2xl font-semibold text-green-900">Current</p>
            <p className="text-xs text-green-700 mt-1">Next billing: Mar 10, 2026</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-500 rounded-lg">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-purple-900">Active Users</span>
            </div>
            <p className="text-2xl font-semibold text-purple-900">2</p>
            <p className="text-xs text-purple-700 mt-1">of 10 seats used</p>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="border border-red-200 rounded-lg p-6 bg-red-50">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-red-900 mb-2">Danger Zone</h3>
            <p className="text-sm text-red-800 mb-4">
              These actions are permanent and cannot be undone. Please proceed with caution.
            </p>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white border border-red-300 rounded-lg text-sm font-medium text-red-700 hover:bg-red-50 transition">
                Suspend Account
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
