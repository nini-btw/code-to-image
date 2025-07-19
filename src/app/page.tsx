"use client";

import { FileCode, Paintbrush } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-6">
        {/* Header with icon */}
        <div className="flex items-center gap-3">
          <FileCode className="w-8 h-8 text-blue-500" />
          <h1 className="text-2xl font-bold text-gray-800">
            HTML to Image Generator
          </h1>
        </div>

        {/* Form Start */}
        <form className="space-y-4">
          {/* HTML input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              HTML Code
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md text-sm font-mono h-40 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="<div>Hello World</div>"
            />
          </div>

          {/* CSS input */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
              CSS Styles <Paintbrush className="w-4 h-4 text-gray-400" />
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md text-sm font-mono h-32 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="div { color: red; }"
            />
          </div>

          {/* Submit */}
          <div className="text-right">
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium"
            >
              Generate Image
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
