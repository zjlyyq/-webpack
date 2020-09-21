import { helloworld } from '../helloworld'
import { common } from '../../common/index.js'
import { a } from '../../common/tree_shaking.js'

document.write(helloworld() + common() + a())


// if (module.hot) {
//     module.hot.accept()
// }
