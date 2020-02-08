import _ from 'loadsh';
import printMe from './print'

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    // Loadsh 现在通过import导入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!!!';
    btn.onclick = printMe;

    element.appendChild(btn);
    
    return element;
}
  
document.body.appendChild(component());