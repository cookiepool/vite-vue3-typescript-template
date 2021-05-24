import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {
  ElButton,
  ElMessageBox,
  ElMessage,
  ElNotification,
  ElIcon
} from 'element-plus';

const app = createApp(App);
app
  .use(router)
  .use(store)
  .use(ElButton)
  .use(ElMessageBox)
  .use(ElMessage)
  .use(ElNotification)
  .use(ElIcon)
  .mount('#app');

// 饿了么按需引入也会自动注入，不许要手动添加
// app.config.globalProperties.$msgbox = ElMessageBox;
// app.config.globalProperties.$message = ElMessage;
// app.config.globalProperties.$notify = ElNotification;
