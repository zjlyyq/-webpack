import _ from 'loadsh';
// import './style.css';
import Print from './print' 

function component() {
    var element = document.createElement('div');
  
    // Loadsh 现在通过import导入
    element.innerHTML = _.join(['Hello', 'webpack',' 4'], ' ');
    element.onclick = Print.bind(null, 'Hello webpack!');

    return element;
}
  
document.body.appendChild(component());