"use client";

import { Paintbrush, Code } from "lucide-react";

export function Form() {
  return (
    <form className="space-y-4">
      {/* HTML input */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
          HTML Code
          <Code />
        </label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md text-sm font-mono h-40 resize-y focus:outline-none focus:ring-2 focus:ring-primary placeholder-placeholder"
          placeholder="<div>Hello World</div>"
        />
      </div>

      {/* CSS input */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
          CSS Styles <Paintbrush className="w-4 h-4 text-gray-400" />
        </label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md text-sm font-mono h-32 resize-y focus:outline-none focus:ring-2 focus:ring-primary placeholder-placeholder"
          placeholder="div { color: red; } "
        />
      </div>

      {/* Submit */}
      <div className="text-right">
        <button
          type="submit"
          className="px-5 py-2 bg-primary hover:primary-hover text-white rounded-md text-sm font-medium"
        >
          Generate Image
        </button>
      </div>
    </form>
  );
}
