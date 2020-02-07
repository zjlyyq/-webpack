import _ from 'loadsh';
import './style.css';

function component() {
    var element = document.createElement('div');
  
    // Loadsh 现在通过import导入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
}
  
document.body.appendChild(component());