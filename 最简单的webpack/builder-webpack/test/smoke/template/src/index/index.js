import helloworld from '../helloworld';
import common from '../../common/index';
import a from '../../common/tree_shaking';

document.write(helloworld() + common() + a());

// if (module.hot) {
//     module.hot.accept()
// }
