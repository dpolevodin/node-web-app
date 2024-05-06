import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { readFile } from "node:fs/promises";

const currentDirectory = dirname(dirname(fileURLToPath(import.meta.url)));
const dataFileName = join(currentDirectory, "data", "todos.json");

export async function loadList() {
  const rawData = await readFile(dataFileName, "utf-8");
  const data = JSON.parse(rawData);
  return data.todos;
}

export async function loadItem(id) {
  const rawData = await readFile(dataFileName, "utf-8");
  const data = JSON.parse(rawData);
  return data.todos.find((item) => item._id === id);
}
