const assert = require('assert');

describe('webpack.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base');
    console.log(baseConfig);

    it('entry', () => {
        assert.strictEqual(baseConfig.entry.index, '/Users/jialuzhang/MyCode/-webpack/最简单的webpack/builder-webpack/test/smoke/template/src/index/index.js')
        assert.strictEqual(baseConfig.entry.search, '/Users/jialuzhang/MyCode/-webpack/最简单的webpack/builder-webpack/test/smoke/template/src/search/index.jsx')
    })
})