// document.write('search page!')
import React from 'react'
import ReactDom from 'react-dom'
import './search.less'
// require('./search.less')
import logo from './static/images/google_keep.png'
import  '../../common/index.js'

class Search extends React.Component{
    render(){
        return <div class="search-text">
            <img src={ logo } width="300px"/>
            <div>
                <p>Search Text</p>
            </div>
        </div>
    }
}

ReactDom.render(
    <Search/>,
    document.getElementById('app')
)