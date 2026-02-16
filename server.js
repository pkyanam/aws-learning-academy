import { createServer } from "node:http";
import { stat } from "node:fs/promises";
import { createReadStream } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = Number(process.env.PORT || 4173);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
};

const server = createServer(async (req, res) => {
  try {
    if (!req.url) {
      sendJson(res, 400, { error: "Invalid request URL" });
      return;
    }

    const requestPath = new URL(req.url, `http://${req.headers.host || "localhost"}`).pathname;

    if (requestPath.startsWith("/api/")) {
      sendJson(res, 404, { error: "API route not found" });
      return;
    }

    await handleStatic(requestPath, res);
  } catch (error) {
    sendJson(res, 500, {
      error: "Server error",
      detail: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

server.listen(port, () => {
  console.log(`AWS Study Center running on http://localhost:${port}`);
});

async function handleStatic(requestPath, res) {
  const safePath = normalizePath(requestPath);
  const resolvedPath = path.join(__dirname, safePath);

  const filePath = await resolveFilePath(resolvedPath);
  if (!filePath) {
    sendText(res, 404, "Not found");
    return;
  }

  const extension = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[extension] || "application/octet-stream";

  res.writeHead(200, {
    "Content-Type": contentType,
  });

  createReadStream(filePath).pipe(res);
}

function normalizePath(requestPath) {
  if (requestPath === "/") {
    return "index.html";
  }

  const trimmed = requestPath.replace(/^\/+/, "");
  const sanitized = path.normalize(trimmed).replace(/^\.\.(\/|\\|$)+/, "");
  return sanitized;
}

async function resolveFilePath(candidatePath) {
  try {
    const fileStats = await stat(candidatePath);
    if (fileStats.isDirectory()) {
      const indexPath = path.join(candidatePath, "index.html");
      await stat(indexPath);
      return indexPath;
    }

    return candidatePath;
  } catch {
    return null;
  }
}

function sendJson(res, status, payload) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
  });
  res.end(JSON.stringify(payload));
}

function sendText(res, status, text) {
  res.writeHead(status, {
    "Content-Type": "text/plain; charset=utf-8",
  });
  res.end(text);
}
