import { useState } from 'react';
import { Plus, Mail, MoreVertical, Search, UserCircle } from 'lucide-react';

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

export function UsersSection() {
  const [users] = useState<User[]>([
    {
      id: '1',
      name: 'James Stach',
      username: 'James Stach',
      email: 'james@surepointcompasstravel.com',
      role: 'agency_admin',
      status: 'active',
    },
    {
      id: '2',
      name: 'Travel Agent',
      username: 'TravelAgent',
      email: '',
      role: 'curator',
      status: 'active',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = users.filter(
    user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRoleBadge = (role: string) => {
    const roleConfig: Record<string, { label: string; color: string }> = {
      agency_admin: { label: 'Agency Admin', color: 'bg-purple-100 text-purple-700 border-purple-200' },
      curator: { label: 'Curator', color: 'bg-blue-100 text-blue-700 border-blue-200' },
      agent: { label: 'Agent', color: 'bg-green-100 text-green-700 border-green-200' },
    };

    const config = roleConfig[role] || { label: role, color: 'bg-gray-100 text-gray-700 border-gray-200' };
    return (
      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${config.color}`}>
        {config.label}
      </span>
    );
  };

  const getStatusBadge = (status: string) => {
    return status === 'active' ? (
      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
        Active
      </span>
    ) : (
      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
        Inactive
      </span>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Agency Users</h2>
          <p className="text-sm text-gray-600 mt-1">Manage users who have access to this agency</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition">
          <Plus className="w-4 h-4" />
          Add User
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search users by name, email, or username..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
        />
      </div>

      {/* Users Table */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Username
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center text-white font-medium">
                        {user.name.charAt(0)}
                      </div>
                      <div className="font-medium text-gray-900">{user.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {user.username}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getRoleBadge(user.role)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(user.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.email ? (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4 text-gray-400" />
                        {user.email}
                      </div>
                    ) : (
                      <span className="text-sm text-gray-400">No email</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <UserCircle className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>No users found matching your search.</p>
        </div>
      )}
    </div>
  );
}
