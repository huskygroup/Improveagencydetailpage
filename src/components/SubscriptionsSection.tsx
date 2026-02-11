import { Package, Calendar, TrendingUp, AlertCircle } from 'lucide-react';

export function SubscriptionsSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Subscription Management</h2>
        <p className="text-gray-600">
          Subscription management will be added here. Configure and manage billing, features, and add-ons for this agency.
        </p>
      </div>

      {/* Coming Soon Card */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
        <div className="max-w-md mx-auto">
          <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Subscription Features Coming Soon</h3>
          <p className="text-sm text-gray-600 mb-6">
            We're working on bringing you comprehensive subscription management tools. You'll be able to manage plans, billing cycles, and feature access.
          </p>
          <button className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
            Notify Me When Available
          </button>
        </div>
      </div>

      {/* Planned Features */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Planned Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <Calendar className="w-8 h-8 text-cyan-500 mb-3" />
            <h4 className="font-medium text-gray-900 mb-2">Billing Management</h4>
            <p className="text-sm text-gray-600">View and manage billing history, payment methods, and invoices</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <TrendingUp className="w-8 h-8 text-cyan-500 mb-3" />
            <h4 className="font-medium text-gray-900 mb-2">Usage Analytics</h4>
            <p className="text-sm text-gray-600">Track feature usage and optimize your subscription plan</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <AlertCircle className="w-8 h-8 text-cyan-500 mb-3" />
            <h4 className="font-medium text-gray-900 mb-2">Feature Access</h4>
            <p className="text-sm text-gray-600">Control which features are enabled for this agency</p>
          </div>
        </div>
      </div>
    </div>
  );
}
