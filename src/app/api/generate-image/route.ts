import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function POST(req: NextRequest) {
  try {
    const { html, css } = await req.json();

    if (!html) {
      return NextResponse.json(
        { error: "Missing HTML content" },
        { status: 400 }
      );
    }

    const fullHtml = `
      <html>
        <head>
          <style>${css || ""}</style>
        </head>
        <body>
          ${html}
        </body>
      </html>
    `;

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // Set fixed viewport
    await page.setViewport({ width: 450, height: 450 });

    await page.setContent(fullHtml, { waitUntil: "networkidle0" });

    // Select only the product card
    const imageBuffer = await page.screenshot({
      type: "png",
      omitBackground: true, // transparent if no background set
      clip: await page.evaluate(() => {
        const body = document.body;
        const rect = body.getBoundingClientRect();
        return {
          x: rect.left,
          y: rect.top,
          width: rect.width,
          height: rect.height,
        };
      }),
    });

    await browser.close();

    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Content-Disposition": "inline; filename=image.png",
        "Content-Length": imageBuffer.length.toString(), // ✅ important
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error("💥 Server error:", err);
    return NextResponse.json(
      { error: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
