import globToRegExp from 'glob-to-regexp';

class WebpackBundle {
  constructor(entry) {
    this.entry = entry;
  }

  generateConfig() {
    const loaders = this.entry.files.map(function(file) {
      return `{
        test: ${globToRegExp(file.files).toString()},
        loader: "${file.transform}"
      }`;
    });

    return `
      module.exports = {
        ${(this.entry.header) ? (JSON.stringify(this.entry.header) + ', ') : ''}

        entry: "${this.entry.entryFile}",
        loaders: [${loaders.join(', \n')}]

        ${(this.entry.footer) ? (',\n' + JSON.stringify(this.entry.footer)) : ''}
      };
    `;
  }
}

export default WebpackBundle;
