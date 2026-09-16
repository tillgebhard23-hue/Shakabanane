# Vendored: nano-banana-mcp

Upstream: https://github.com/conechoai/nano-banana-mcp (npm `nano-banana-mcp@1.0.3`, MIT)

## Why this copy exists

Upstream hardcodes `gemini-2.5-flash-image-preview`, which Google has
retired — the model returns HTTP 404, so every `generate_image` and
`edit_image` call fails against a live API key. Upstream has not been
published since 2025-09-05 and exposes no env var to override the model,
so the name has to be patched in source.

## The patch

Two string literals in `dist/index.js` (lines 190 and 298):

    - model: "gemini-2.5-flash-image-preview"
    + model: "gemini-3.1-flash-image"

`gemini-3.1-flash-image` is "Nano Banana 2". Nothing else is modified.

## Setup

    npm install --omit=dev        # in this directory

    claude mcp add nano-banana -s user \
      --env GEMINI_API_KEY=<key> \
      -- node <abs-path>/tools/nano-banana-mcp/dist/index.js

## Re-applying after an upstream release

If upstream ships a fix, drop this directory and go back to
`npx -y nano-banana-mcp`. Check the model name first.
