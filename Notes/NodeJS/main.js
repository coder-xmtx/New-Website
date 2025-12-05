import { readFile, writeFile, appendFile } from "node:fs/promises";

const data = await readFile("./data.json", "utf8");
await writeFile("./data2.txt", "hello", "utf8");
await appendFile("./data2.txt", " world", "utf8");

console.log(data);
