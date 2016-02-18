import bundle from './bundle/index';
import Entry from './Entry';

const entryFn = function(entryFile) {
  return new Entry(entryFile);
};

export default function bundlebee(descriptor) {
  const entry = descriptor.call(null, entryFn);

  return new Promise(function(resolve, reject) {
    resolve(function(config) {
      if (!Object.hasOwnProperty.call(bundle, config)) {
        throw new Error(`Configuration ${config} is not available`);
      }

      return new (bundle[config])(entry);
    });
  });
};
