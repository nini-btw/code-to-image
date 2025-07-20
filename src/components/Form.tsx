"use client";

import { Paintbrush, Code } from "lucide-react";
import { useState } from "react";

interface FormProps {
  onImageGenerated: (url: string, html: string, css: string) => void;
}

export function Form({ onImageGenerated }: FormProps) {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ html, css }),
      });

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      onImageGenerated(url, html, css);
    } catch (err) {
      console.error("Failed to generate image:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* HTML input */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
          HTML Code <Code />
        </label>
        <textarea
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          className="w-full  text-placeholder p-3 border border-gray-300 rounded-md text-sm font-mono h-40 resize-y focus:outline-none focus:ring-2 focus:ring-primary placeholder-placeholder"
          placeholder="<div>Hello World</div>"
        />
      </div>

      {/* CSS input */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
          CSS Styles <Paintbrush className="w-4 h-4 text-gray-400" />
        </label>
        <textarea
          value={css}
          onChange={(e) => setCss(e.target.value)}
          className="w-full text-placeholder p-3 border border-gray-300 rounded-md text-sm font-mono h-32 resize-y focus:outline-none focus:ring-2 focus:ring-primary placeholder-placeholder"
          placeholder="div { color: red; }"
        />
      </div>

      {/* Submit */}
      <div className="text-right">
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2 bg-primary hover:primary-hover text-white rounded-md text-sm font-medium"
        >
          {loading ? "Generating..." : "Generate Image"}
        </button>
      </div>
    </form>
  );
}
