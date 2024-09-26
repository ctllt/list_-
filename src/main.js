import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/gloable.css'

Vue.config.productionTip = false
Vue.prototype.$axios=axios
Vue.use(ElementUI);

new Vue({
    render: h => h(App,axios),
    beforeCreate(){
        Vue.prototype.$bus = this //安装全局事件总线
    }
}).$mount('#app')
