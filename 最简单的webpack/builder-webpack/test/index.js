const path = require('path');

process.chdir(path.join(__dirname, 'smoke/template'));

describe('build', () => {
    require('./unit/webpack.base-test');
    require('./unit/test-demo');
})