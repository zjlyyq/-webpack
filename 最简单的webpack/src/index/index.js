import { helloworld } from '../helloworld'
import  '../../common/index.js'
import { common } from '../../common/index.js'
import '../../common/tree_shaking.js'
import { a } from '../../common/tree_shaking.js'

document.write(helloworld() + common() + a())


// if (module.hot) {
//     module.hot.accept()
// }
