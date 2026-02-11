import { useState } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';
import logoImage from 'figma:asset/4ee594a60a933d9d9932093ec07a0a747bbba65d.png';

export function ProfileSection() {
  const [agencyName, setAgencyName] = useState('Sure Point Compass Travel');
  const [tagline, setTagline] = useState('');
  const [backgroundUrl, setBackgroundUrl] = useState('');
  const [primaryColor, setPrimaryColor] = useState('#264653');
  const [secondaryColor, setSecondaryColor] = useState('#e08a87');
  const [neutralColor, setNeutralColor] = useState('');
  const [allowUserBackground, setAllowUserBackground] = useState(false);

  return (
    <div className="space-y-8">
      {/* Agency Branding */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Agency Branding</h2>
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
              Tagline
            </label>
            <input
              type="text"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              placeholder="Enter agency tagline"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Background & Logo */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Background Image</h2>
        <div className="flex items-start gap-8">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Upload Background Image
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-cyan-500 transition cursor-pointer">
              <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
              <p className="text-sm text-gray-600 mb-1">
                <span className="text-cyan-600 font-medium">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">PNG, JPG (recommended: 1920x1080, max. 5MB)</p>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Or enter Background URL
              </label>
              <input
                type="text"
                value={backgroundUrl}
                onChange={(e) => setBackgroundUrl(e.target.value)}
                placeholder="https://example.com/background.jpg"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="w-80">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Preview
            </label>
            <div className="border border-gray-200 rounded-lg overflow-hidden h-48 bg-gray-100 flex items-center justify-center">
              {backgroundUrl ? (
                <img src={backgroundUrl} alt="Background preview" className="w-full h-full object-cover" />
              ) : (
                <div className="text-center text-gray-400">
                  <ImageIcon className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm">No background uploaded</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-start gap-3">
          <input
            type="checkbox"
            id="allowBackground"
            checked={allowUserBackground}
            onChange={(e) => setAllowUserBackground(e.target.checked)}
            className="mt-1 w-4 h-4 text-cyan-500 rounded focus:ring-cyan-500"
          />
          <label htmlFor="allowBackground" className="text-sm text-gray-700">
            Allow users to set their own custom background image
          </label>
        </div>
      </div>

      {/* Color Theme */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Color Theme</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Primary Color
            </label>
            <div className="flex gap-3">
              <input
                type="color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="w-16 h-11 rounded-lg border border-gray-300 cursor-pointer"
              />
              <input
                type="text"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent font-mono text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Secondary Color
            </label>
            <div className="flex gap-3">
              <input
                type="color"
                value={secondaryColor}
                onChange={(e) => setSecondaryColor(e.target.value)}
                className="w-16 h-11 rounded-lg border border-gray-300 cursor-pointer"
              />
              <input
                type="text"
                value={secondaryColor}
                onChange={(e) => setSecondaryColor(e.target.value)}
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent font-mono text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Neutral Color
            </label>
            <div className="flex gap-3">
              <input
                type="color"
                value={neutralColor || '#e5e7eb'}
                onChange={(e) => setNeutralColor(e.target.value)}
                className="w-16 h-11 rounded-lg border border-gray-300 cursor-pointer"
              />
              <input
                type="text"
                value={neutralColor}
                onChange={(e) => setNeutralColor(e.target.value)}
                placeholder="#e5e7eb"
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent font-mono text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Logo Upload */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Agency Logo</h2>
        <div className="flex items-start gap-8">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Upload Logo
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-cyan-500 transition cursor-pointer">
              <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
              <p className="text-sm text-gray-600 mb-1">
                <span className="text-cyan-600 font-medium">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">PNG, JPG or SVG (max. 2MB)</p>
            </div>
          </div>
          <div className="w-64">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Current Logo
            </label>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 flex items-center justify-center h-32">
              <img src={logoImage} alt="Sure Point Compass Travel" className="max-h-full max-w-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}