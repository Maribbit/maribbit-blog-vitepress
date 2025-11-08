import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "海兔的技术分享",
  description: "兴趣与思考",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "我的项目", link: "/projects/" },
      { text: "开发经验", link: "/developer/" },
      { text: "关于我", link: "/about" },
    ],

    sidebar: {
      "/projects/": [
        {
          text: "Naive History",
          items: [{ text: "项目介绍", link: "/projects/naive-history-intro" }],
        },
      ],
      "/developer/": [
        {
          text: "Windows使用技巧",
          items: [
            { text: "WSL简介与安装", link: "/developer/wsl-intro" },
            { text: "WSL基本使用", link: "/developer/wsl-usage" },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/Maribbit" }],
  },
});
