# bundlebee
Experiment to provide a unified API for bundlers and allow to just drop in bundlers

```javascript
bundlebee(entry => {
  return entry('./main.js')
    .include(['src/**/*.js'], 'babel'
    .include(['styles/**/*.less'], 'less', 'cssModules']);
}).then(bundle => {
  bundle('webpack').write('dist/myBundle.js');
  // Or if you want just the config:
  // bundle('webpack').generateConfig('webpack.config.js');
}).catch(err => {
  console.log('Oh noes, something went wrong.');
  console.log(err);
});
```
