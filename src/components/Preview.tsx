"use client";

import { useState } from "react";
import { Code, ImageIcon } from "lucide-react";

export function Preview() {
  const [viewMode, setViewMode] = useState<"image" | "code">("image");

  return (
    <div className="border border-dashed border-gray-300 rounded-md min-h-[300px] p-4 flex flex-col gap-4">
      {/* Switcher */}
      <div className="flex gap-2 self-end">
        <button
          className={`flex items-center gap-1 px-3 py-1 rounded text-sm ${
            viewMode === "image"
              ? "bg-primary text-white"
              : "bg-primary-light text-gray-700  hover:bg-primary-hover  hover:text-white"
          }`}
          onClick={() => setViewMode("image")}
        >
          <ImageIcon className="w-4 h-4" />
          Image
        </button>

        <button
          className={`flex items-center gap-1 px-3 py-1 rounded text-sm ${
            viewMode === "code"
              ? "bg-primary text-white"
              : "bg-primary-light text-gray-700  hover:bg-primary-hover hover:text-white"
          }`}
          onClick={() => setViewMode("code")}
        >
          <Code className="w-4 h-4" />
          Code
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center text-sm text-gray-500 border border-gray-200 rounded p-4 bg-white min-h-[200px]">
        {viewMode === "image" ? (
          <p className="text-gray-400">Your image preview will appear here</p>
        ) : (
          <pre className="text-left text-xs w-full overflow-auto">
            {`<div>Hello World</div>\n<style>\ndiv { color: red; }\n</style>`}
          </pre>
        )}
      </div>
    </div>
  );
}
