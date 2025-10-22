import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "Maribbit的博客",
  description: "兴趣与思考",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "博客", link: "/blog/" },
      { text: "关于", link: "/about" },
    ],

    sidebar: [
      {
        text: "博客文章",
        items: [
          { text: "第一篇文章", link: "/blog/first-post" },
          { text: "第二篇文章", link: "/blog/second-post" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
