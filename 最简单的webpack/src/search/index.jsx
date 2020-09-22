// document.write('search page!')
import React from 'react';
import ReactDom from 'react-dom';
import priceNumber from 'price-number';
import './search.less';
// require('./search.less')
import logo from './static/images/google_keep.png';
import '../../common/index';

class Search extends React.Component {
    constructor(...args) {
        // const args = [].slice.call(arguments, 1);
        super(...args);
        this.state = {
            Text: null,
        };
    }

    onKeyDownHandle() {
        console.log(this.state);
    }

    loadComonent() {
        import('./test.jsx').then((m) => {
            console.log(m);
            this.setState({
                Text: m.default,
            });
        });
    }

    render() {
        const { Text } = this.state;
        const a = '0.17';
        const b = '0.05';
        return (
            <div className="search-text">
                {
                    Text ? <Text /> : null
                }
                <img src={logo} width="300px" alt="logo" onClick={this.loadComonent.bind(this)} onKeyDown={this.onKeyDownHandle.bind(this)} />
                <div>
                    <p>
                        Search Text:
                        {priceNumber.sub(a, b)}
                    </p>
                </div>
            </div>
        );
    }
}

ReactDom.render(<Search />, document.getElementById('app'));

setTimeout(() => {
    /* 异步导入模块 */
    import('../../plugin/ajaxPromise').then((res) => {
        console.log(res);
    });
}, 5000);
