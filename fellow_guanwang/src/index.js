import _ from 'loadsh';

function component() {
    var element = document.createElement('div');
  
    // Loadsh 现在通过import导入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
}
  
document.body.appendChild(component());