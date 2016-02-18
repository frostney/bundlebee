class Entry {
  constructor(entryFile) {
    this.entryFile = entryFile;

    this.header = '';
    this.footer = '';
    this.files = [];
  }

  header(header) {
    this.header = header;
  }

  footer(footer) {
    this.footer = footer;
  }

  includes(files, transform) {
    this.files.push({
      files,
      transform,
    });

    return this;
  }
}

export default Entry;
