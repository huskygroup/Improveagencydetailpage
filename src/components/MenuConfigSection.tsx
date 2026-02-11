import { useState } from 'react';
import { Plus, GripVertical, Trash2, Eye } from 'lucide-react';

interface MenuItem {
  id: string;
  label: string;
  useTerminology: boolean;
  visible: boolean;
}

export function MenuConfigSection() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: '1', label: 'Dashboard', useTerminology: false, visible: true },
    { id: '2', label: 'Bookings', useTerminology: true, visible: true },
    { id: '3', label: 'Clients', useTerminology: false, visible: true },
    { id: '4', label: 'Reports', useTerminology: false, visible: true },
  ]);

  const toggleVisibility = (id: string) => {
    setMenuItems(items =>
      items.map(item =>
        item.id === id ? { ...item, visible: !item.visible } : item
      )
    );
  };

  const toggleTerminology = (id: string) => {
    setMenuItems(items =>
      items.map(item =>
        item.id === id ? { ...item, useTerminology: !item.useTerminology } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setMenuItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Menu Items</h2>
          <p className="text-sm text-gray-600 mt-1">Configure the navigation menu for this agency</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition">
          <Plus className="w-4 h-4" />
          Add Menu Item
        </button>
      </div>

      <div className="space-y-3">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition"
          >
            <button className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600">
              <GripVertical className="w-5 h-5" />
            </button>
            
            <div className="flex-1">
              <input
                type="text"
                value={item.label}
                onChange={(e) => {
                  setMenuItems(items =>
                    items.map(i => i.id === item.id ? { ...i, label: e.target.value } : i)
                  );
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={item.useTerminology}
                  onChange={() => toggleTerminology(item.id)}
                  className="w-4 h-4 text-cyan-500 rounded focus:ring-cyan-500"
                />
                <span className="whitespace-nowrap">Use Terminology</span>
              </label>

              <button
                onClick={() => toggleVisibility(item.id)}
                className={`p-2 rounded-lg transition ${
                  item.visible
                    ? 'text-gray-600 hover:bg-gray-200'
                    : 'text-gray-400 hover:bg-gray-200'
                }`}
                title={item.visible ? 'Visible' : 'Hidden'}
              >
                <Eye className="w-5 h-5" />
              </button>

              <button
                onClick={() => removeItem(item.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                title="Remove"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {menuItems.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <MenuIcon className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>No menu items configured. Click "Add Menu Item" to get started.</p>
        </div>
      )}
    </div>
  );
}
