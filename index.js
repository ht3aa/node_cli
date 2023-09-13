#!/usr/bin/env node
import chalk from 'chalk';
import jetpack from "fs-jetpack";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import chooseTool from './utils/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {

  const filePath = await chooseTool();
  const filePathArr = filePath.split('/');
  let fileName = filePathArr.slice(filePathArr.length - 2).join('/');

  const src = jetpack.cwd(__dirname);
  const dest = jetpack.cwd();
 
  // console.log(src.path(), dest, fileName);
  src.copy(src.path() + `/utils/${filePath}`, dest + `/src/${fileName}`, { overwrite: true });
}

main();
