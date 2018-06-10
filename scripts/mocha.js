require('babel-register')();

const { JSDOM } = require('jsdom');
const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
const dirtyChai = require('dirty-chai');

// const exposedProperties = ['window', 'navigator', 'document'];

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

const copyProps = (src, target) => {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce(
      (result, prop) => ({
        ...result,
        [prop]: Object.getOwnPropertyDescriptor(src, prop)
      }),
      {}
    );
  Object.defineProperties(target, props);
};

chai.use(dirtyChai); // This helps fix some liniting errors and supercharges chai
chai.use(chaiEnzyme()); // Note the invocation at the end
configure({ adapter: new Adapter() });

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js'
};

copyProps(window, global);

// documentRef = document;

function noop() {
  return {};
}
// Prevent mocha from interpreting some @import file extensions.
require.extensions['.css'] = noop;
require.extensions['.less'] = noop;
require.extensions['.scss'] = noop;
