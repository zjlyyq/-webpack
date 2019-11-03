// document.write('search page!')
import React from 'react'
import ReactDom from 'react-dom'
import './search.less'
// require('./search.less')
import logo from './static/images/apple_logo.jpg'
class Search extends React.Component{
    render(){
        return <div class="search-text">
            <img src={ logo }/>Search Text
        </div>
    }
}

ReactDom.render(
    <Search/>,
    document.getElementById('app')
)