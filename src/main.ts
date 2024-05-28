import { createApp } from "vue";

import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import { router } from "./router/router";
import "./style.css";
import App from "./App.vue";

createApp(App)
  .use(ElementPlus, { locale: zhCn })
  .use(autoAnimatePlugin)
  .use(router)
  .mount("#app");
