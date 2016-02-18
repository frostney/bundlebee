var fs = require('fs');

var bundlebee = require('../dist/bundlebee');

bundlebee(function(entry) {
  return entry('src/index.js')
    .includes(['src/**/*.js'], 'babel');
}).then(function(bundle) {
  console.log(bundle);
  console.log(bundle('webpack'));

  var config = bundle('webpack')
    .generateConfig('webpack.config.js');

  fs.writeFileSync('webpack.config.js', config);
}).catch(function(err) {
  console.log('Something went wrong.');
  console.log(err);
});
