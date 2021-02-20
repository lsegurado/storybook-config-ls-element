const path = require('path');

module.exports = {
  stories: [
    path.join(path.relative(__dirname, process.cwd()), "/src/**/*.stories.mdx").replace(/\\/g, "/"),
    path.join(path.relative(__dirname, process.cwd()), "/src/**/*.stories.@(js|jsx|ts|tsx)").replace(/\\/g, "/")
  ],
};