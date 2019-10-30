import {
  configure,
  addParameters
} from "@storybook/vue";
// import "../src/styles/index.scss";
// import "../src/styles/storybook/index.scss";

addParameters({
  options: {
    theme: {
      brandTitle: 'ZView组件库',
      brandUrl: 'https://github.com/didengren/zview'
    },
  }
});

function loadStories() {
  const req = require.context("../src", true, /\.story\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
