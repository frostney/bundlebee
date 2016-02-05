# bundlebee
Experiment to provide a unified API for bundlers and allow to just drop in bundlers

```javascript
bundlebee({ entry } => {
  return entry('./main.js')
    .include(['src/**/*.js'], babel())
    .include(['styles/**/*.less'], [less(), cssModules()]);
});
```
