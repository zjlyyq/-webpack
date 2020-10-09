// document.write('search page!')
const React = require('react');
// const ReactDom = require('react-dom';
const priceNumber = require('price-number');
require('./search.less');
// require('./search.less')
const logo = require('./static/images/google_keep.png');
require('../../common/index');

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

// ReactDom.render(<Search />, document.getElementById('app'));   服务端渲染不能使用render

module.exports = <Search />;
