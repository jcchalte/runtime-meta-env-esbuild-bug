An repo to reproduce an issue with Angular 17 esbuild process and [import.meta.env](https://github.com/runtime-env/import-meta-env)

Executing the command
```
env DEBUG_IMPORT_META_ENV="true" NAME="Toto" ng build
```

should generate a `main-HASH.js` inside the `dist\bug-esbuild\browser` folder with the following content:
```js
var _AppComponent = class _AppComponent {
  constructor() {
    this.title = 'Toto';
  }
};
```

but the generated file still contains the unmodified source.
```js
var _AppComponent = class _AppComponent {
  constructor() {
    this.title = import.meta.env.NAME;
  }
};
```
