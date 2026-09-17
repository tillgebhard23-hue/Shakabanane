#!/usr/bin/env node
/**
 * Generates placeholder imagery via the Gemini image API.
 *
 *   GEMINI_API_KEY=... node tools/genimg.mjs <out.jpg> "<prompt>" [aspect]
 *
 * aspect defaults to 1:1; pass e.g. 4:5, 16:9, 3:2.
 *
 * Deliberately abstract by default: FAIRFÜHRER is a brand built on real places
 * and real voices, so generated imagery must never imply it depicts one. Use it
 * for textures, colour fields and graphic motifs, not for rooms, faces or
 * landmarks. Real photography replaces these files before launch.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const MODEL = "gemini-3.1-flash-image";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

const [out, prompt, aspect = "1:1"] = process.argv.slice(2);
const key = process.env.GEMINI_API_KEY;

if (!key) {
  console.error("GEMINI_API_KEY is not set. Add it to the cloud environment's variables.");
  process.exit(1);
}
if (!out || !prompt) {
  console.error('Usage: node tools/genimg.mjs <out.jpg> "<prompt>" [aspect]');
  process.exit(1);
}

const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "x-goog-api-key": key, "Content-Type": "application/json" },
  body: JSON.stringify({
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { imageConfig: { aspectRatio: aspect } },
  }),
});

const json = await res.json();

if (!res.ok || json.error) {
  console.error(`${res.status} ${json.error?.status ?? ""}: ${json.error?.message ?? "unknown error"}`);
  process.exit(1);
}

const part = (json.candidates?.[0]?.content?.parts ?? []).find((p) => p.inlineData);
if (!part) {
  console.error("No image in response. Model returned:", JSON.stringify(json).slice(0, 300));
  process.exit(1);
}

mkdirSync(dirname(out), { recursive: true });
const buf = Buffer.from(part.inlineData.data, "base64");
writeFileSync(out, buf);
console.log(`${out}  ${(buf.length / 1024).toFixed(0)} KB  ${aspect}`);
