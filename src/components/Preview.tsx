"use client";

import { useState } from "react";
import { Code, ImageIcon } from "lucide-react";
interface PreviewProps {
  imageUrl: string | null;
  html: string;
  css: string;
}

export function Preview({ imageUrl, html, css }: PreviewProps) {
  const [viewMode, setViewMode] = useState<"image" | "code">("image");

  return (
    <div className="border border-dashed border-gray-300 rounded-md min-h-[300px] p-4 flex flex-col gap-4">
      {/* Switcher */}
      <div className="flex gap-2 self-end">
        <button
          className={`flex items-center gap-1 px-3 py-1 rounded text-sm ${
            viewMode === "image"
              ? "bg-primary text-white"
              : "bg-primary-light text-gray-700 hover:bg-primary-hover hover:text-white"
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
              : "bg-primary-light text-gray-700 hover:bg-primary-hover hover:text-white"
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
          imageUrl ? (
            <div className="flex flex-col items-center gap-4">
              {/* Image preview */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt="Preview"
                className="max-w-full max-h-[400px] rounded"
              />

              {/* Download button */}
              <a
                href={imageUrl}
                download="preview.png"
                className="inline-block px-4 py-2 bg-primary text-white text-sm rounded hover:bg-primary-hover"
              >
                Download Image
              </a>
            </div>
          ) : (
            <p className="text-gray-400">Your image preview will appear here</p>
          )
        ) : (
          <div className="w-full h-full border border-gray-200 rounded overflow-auto bg-white p-4">
            <iframe
              className="w-full h-[300px] border-none"
              srcDoc={`<!DOCTYPE html>
                          <html>
                            <head>
                              <style>${css}</style>
                            </head>
                            <body style="margin:0;padding:0;">${html}</body>
                          </html>`}
              sandbox="allow-same-origin"
            />
          </div>
        )}
      </div>
    </div>
  );
}
