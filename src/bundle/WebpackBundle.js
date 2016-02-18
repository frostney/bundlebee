import globToRegExp from 'glob-to-regexp';

const writeConfig = function() {
  const loaders = this.entry.files.map(function(file) {
    return `{
      test: ${globToRegExp(file.files).toString()},
      loader: "${file.transform}"
    }`;
  });

  return `module.exports = {
    ${(this.entry.header) ? (JSON.stringify(this.entry.header) + ', ') : ''}

    entry: "${this.entry.entryFile}",
    loaders: [${loaders.join(', \n')}]

    ${(this.entry.footer) ? (',\n' + JSON.stringify(this.entry.footer)) : ''}
  };`;
};

class WebpackBundle {
  constructor(entry) {
    this.entry = entry;
  }

  generateConfig() {
    return writeConfig.call(this);
  }
}

export default WebpackBundle;
