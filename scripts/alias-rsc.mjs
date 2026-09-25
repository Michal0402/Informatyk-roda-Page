import { copyFile, readdir } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve("out");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  await Promise.all(
    entries.map(async (entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name.startsWith("__next.")) {
          const source = path.join(full, "__PAGE__.txt");
          const target = path.join(dir, `${entry.name}.__PAGE__.txt`);
          await copyFile(source, target);
        }
        await walk(full);
      }
    }),
  );
}

await walk(outDir);
