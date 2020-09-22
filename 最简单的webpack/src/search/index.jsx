// document.write('search page!')
import React from 'react';
import ReactDom from 'react-dom';
import './search.less';
// require('./search.less')
import logo from './static/images/google_keep.png';
import '../../common/index';

const Search = () => (
    <div className="search-text">
        <img src={logo} width="300px" alt="logo" />
        <div>
            <p>Search Text</p>
        </div>
    </div>
);

ReactDom.render(<Search />, document.getElementById('app'));

setTimeout(() => {
    /* 异步导入模块 */
    import('../../plugin/ajaxPromise').then((res) => {
        console.log(res);
    });
}, 5000);
