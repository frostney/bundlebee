var bundlebee = require('../dist/bundlebee');

bundlebee(function(entry) {
  return entry('src/index.js')
    .includes(['src/**/*.js'], 'babel');
}).then(function(bundle) {
  bundle('webpack')
    .writeConfig('webpack.config.js');
}).catch(function(err) {
  console.log('Something went wrong.');
  console.log(err);
});
