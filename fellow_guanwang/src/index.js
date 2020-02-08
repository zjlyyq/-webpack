import _ from 'loadsh';
import './style.css';
import Icon from './Icon.svg'
import Data from './data.xml'

function component() {
    var element = document.createElement('div');
  
    // Loadsh 现在通过import导入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    //添加图片到div
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    console.log(Data)

    return element;
}
  
document.body.appendChild(component());