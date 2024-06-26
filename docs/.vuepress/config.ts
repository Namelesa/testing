import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import MarkdownItPlantuml from 'markdown-it-plantuml';

export default defineUserConfig({
  base: "/db-course-theme2/",

  lang: "en-US",
  title: "Система аналізу медіа-контенту",
  description: "Лабораторні роботи",

  theme,

  extendsMarkdown: md =>{
    md.use(MarkdownItPlantuml);
  },

  // Enable it with pwa
  // shouldPrefetch: false,
});