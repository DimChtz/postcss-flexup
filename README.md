# PostCSS Flexup [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">](https://github.com/postcss/postcss)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/dimchtz/postcss-flexup/test.yml) ![NPM Version](https://img.shields.io/npm/v/postcss-flexup) ![NPM Downloads](https://img.shields.io/npm/dw/postcss-flexup) ![NPM License](https://img.shields.io/npm/l/postcss-flexup)

[PostCSS](https://github.com/postcss/postcss) plugin to make flex cooler.

## Installation

```console
npm install postcss-flexup
```

## Usage

Basic example with `gulp`

`gulpfile.js`

```js
gulp.task('buildcss', function () {
  return gulp
    .src('./src/main.css')
    .pipe(
      postcss([
        require('postcss-flexup')
        // ... other postcss plugins
      ])
    )
  .pipe(gulp.dest('./dist'));
});
```

`src/main.css`

```css
.parent-1 {
  flexup: _;
}

.parent-2 {
  flexup: center 12px;
}

.parent-3 {
  flexup: center/_ wrap 12px;
}

.parent-4 {
  flexup: center/_ 12px/16px;
}

.parent-5 {
  flexup: center/_ _/16px -col;
}

.parent-6 {
  flexup: !center/_ wrap 12px;
}

.parent-7 {
  flexup: !between/!center wrap !12px;
}

.parent-8 {
  flexup: center/_ !-col;
}
```

will give:

```css
.parent-1 {
  display: flex;
}

.parent-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 12px;
  row-gap: 12px;
}

.parent-3 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 12px;
  row-gap: 12px;
}

.parent-4 {
  display: flex;
  justify-content: center;
  column-gap: 12px;
  row-gap: 16px;
}

.parent-5 {
  display: flex;
  justify-content: center;
  row-gap: 16px;
  flex-direction: column-reverse;
}

.parent-6 {
  display: flex;
  justify-content: center !important;
  flex-wrap: wrap;
  column-gap: 12px;
  row-gap: 12px;
}

.parent-7 {
  display: flex;
  justify-content: space-between !important;
  align-items: center !important;
  flex-wrap: wrap;
  column-gap: 12px !important;
  row-gap: 12px !important;
}

.parent-8 {
  display: flex;
  justify-content: center;
  flex-direction: column-reverse !important;
}
```

## Documentation

Syntax:

```css
flexup: <justify-content>/<align-items> <column-gap>/<row-gap> <flex-direction> <flex-wrap>
```

Available values

- &lt;justify-content&gt;: `center` | `start` | `end` | `between` | `around`
- &lt;align-items&gt;: `center` | `start` | `end` | `between` | `around`
- &lt;column-gap&gt;: any value (e.g. `12px`)
- &lt;row-gap&gt;: any value (e.g. `12px`)
- &lt;flex-direction&gt;: `row` | `-row` | `col` | `-col` ("-" before row/col means reverse)
- &lt;flex-wrap&gt;: wrap | nowrap

You can omit any value with `_` (e.g. `_/center`, `12px/_`)

You can write `center` instead of `center/center` when the value is the same

You can add `!important` with `!` in from of any value

- `flexup: !center;`
- `flexup: around/!center !wrap;`
- `flexup: !around/_ wrap 16px !row;`
- `flexup: !around/_ wrap 12px/_ !-col;`

If you only need `display: flex;` you can write: `flexup: _;`

## CONTRIBUTING

- ⇄ Pull requests and ★ Stars are always welcome.
- For bugs and feature requests, please create an issue.

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
