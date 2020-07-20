import Vue from 'vue'
import CreateAPI from 'vue-create-api'
import Toast from '@/common/Toast'
import Popup from '@/common/Popup'
import ListDialog from '@/common/Dialog/ListDialog'
import MessageDialog from '@/common/Dialog/MessageDialog'
import InputDialog from '@/common/Dialog/InputDialog'

Vue.use(CreateAPI)

Vue.createAPI(Toast, true)
Vue.createAPI(Popup, true)
Vue.createAPI(ListDialog, true)
Vue.createAPI(MessageDialog, true)
Vue.createAPI(InputDialog, true)
