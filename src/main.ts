import './assets/main.css'

import { createApp } from 'vue'
import {List , Empty ,Tabbar, TabbarItem,Form, Field, CellGroup,Button ,NavBar ,Icon,Popup,ActionSheet ,Card,Sidebar, SidebarItem ,Tab, Tabs } from 'vant';
import pinia from './stores'
import persist from 'pinia-plugin-persistedstate'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'




import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 样式全局使用
import 'vant/lib/index.css'
import './styles/index.css'
import MyNavBar from '@/components/My-Navbar.vue'

const app = createApp(App)
app.component('my-nav-bar',MyNavBar)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Button);
app.use(NavBar)
app.use(Icon)
app.use(ActionSheet)
app.use(Popup)
app.use(Card)
app.use(Sidebar);
app.use(SidebarItem);
app.use(Tab);
app.use(Tabs);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Empty)
app.use(List)

app.mount('#app')
