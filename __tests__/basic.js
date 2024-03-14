const postcss = require('postcss');
const plugin = require('../dist/index.cjs');
const path = require('path');
const fs = require('fs');

async function process(input, opts = {}) {
  return await postcss([plugin(opts)]).process(input, {from: undefined});
}

async function run(input, output, opts = {}) {
  let result = await process(input, opts);

  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

describe('postcss-flexup', () => {
  it('Basic #1', async () => {
    const input = fs.readFileSync(path.join(__dirname, 'fixtures/basic-1.css'));
    const output = fs.readFileSync(path.join(__dirname, 'fixtures/basic-1.expected.css'));

    await run(input.toString(), output.toString());
  });

  it('Basic #2', async () => {
    const input = fs.readFileSync(path.join(__dirname, 'fixtures/basic-2.css'));
    const output = fs.readFileSync(path.join(__dirname, 'fixtures/basic-2.expected.css'));

    await run(input.toString(), output.toString());
  });

  it('Basic #3', async () => {
    const input = fs.readFileSync(path.join(__dirname, 'fixtures/basic-3.css'));
    const output = fs.readFileSync(path.join(__dirname, 'fixtures/basic-3.expected.css'));

    await run(input.toString(), output.toString());
  });
});
