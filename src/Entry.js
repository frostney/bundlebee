class Entry {
  constructor(entryFile) {
    this.entryFile = entryFile;

    this.files = {};
  }

  includes(files, transform) {
    this.files = transform;

    return this;
  }
}

export default Entry;
