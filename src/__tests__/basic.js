import postcss from 'postcss';
import plugin from '../index.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

async function process(input, opts = {}) {
  return await postcss([plugin(opts)]).process(input, { from: undefined });
}

async function run(input, output, opts = {}) {
  let result = await process(input, opts);

  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

function loadFixtures(name) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  return [
    fs.readFileSync(path.join(__dirname, `fixtures/${name}.css`)).toString(),
    fs
      .readFileSync(path.join(__dirname, `fixtures/${name}.expected.css`))
      .toString()
  ];
}

describe('postcss-flexup', () => {
  it('Basic #1', async () => {
    await run(...loadFixtures('basic-1'));
  });

  it('Basic #2', async () => {
    await run(...loadFixtures('basic-2'));
  });

  it('Basic #3', async () => {
    await run(...loadFixtures('basic-3'));
  });

  it('Basic #4', async () => {
    await run(...loadFixtures('basic-4'));
  });
});
