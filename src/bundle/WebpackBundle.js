import globToRegExp from 'glob-to-regexp';

class WebpackBundle {
  constructor(entry) {
    this.entry = entry;
  }

  generateConfig() {
    const loaders = this.entry.files.map(function(file) {
      return {
        test: globToRegExp(file.files),
        loader: file.transform
      }
    });

    const config = {};

    config.entry = this.entry.entryFile;
    if (!this.entry.header) {

    }

    config.loaders = loaders;

    return JSON.stringify(config, function(key, value) {
      if (value instanceof RegExp) {
        return value.toString();
      }
    }, 4);
  }
}

export default WebpackBundle;
