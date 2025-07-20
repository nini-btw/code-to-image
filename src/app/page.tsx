"use client";

import { FileCode, Code, ImageIcon } from "lucide-react";
import { Form } from "@/components/Form";
import { Preview } from "@/components/Preview";
import { useState } from "react";

export default function HomePage() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  return (
    <div className="relative bg-primary ">
      <div className="absolute inset-0  opacity-35 pointer-events-none overflow-y-hidden">
        <div className="grid grid-cols-19 gap-10 p-10 ">
          {Array.from({ length: 300 }).map((_, i) =>
            i % 2 === 0 ? (
              <Code key={i} className="w-6 h-6 text-[#ffffff]" />
            ) : (
              <ImageIcon key={i} className="w-6 h-6 text-[#ffffff]" />
            )
          )}
        </div>
      </div>
      <main className="min-h-screen p-6 relative z-10 ">
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-6 mt-14">
          {/* Header */}
          <div className="flex justify-center items-center gap-3">
            <FileCode className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-gray-800">
              HTML to Image Generator
            </h1>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Form
              onImageGenerated={(url, htmlCode, cssCode) => {
                setPreviewUrl(url);
                setHtml(htmlCode);
                setCss(cssCode);
              }}
            />
            <Preview imageUrl={previewUrl} html={html} css={css} />
          </div>
        </div>
      </main>
    </div>
  );
}
