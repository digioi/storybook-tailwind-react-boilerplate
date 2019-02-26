
const path = require('path');

const styleRules = {  
  test: /\.css$/,
  include: [path.resolve(__dirname, "../src")],
  use: [
    'style-loader',
    {
      loader: 'css-loader', options: {
        importLoaders: 1,
        modules: true, 
        camelCase: true } },
   'postcss-loader'
  ]
}

const styleRulesBase = {
  test: /\.css$/,
  include: path.resolve(__dirname, '../styles'),
  use: [
    'style-loader',
    'css-loader',
    'postcss-loader'
  ]
}

const showStoryRule = {
  test: /\.stories\.jsx?$/,
  loaders: [require.resolve('@storybook/addon-storysource/loader')],
  enforce: 'pre',
}

const typeScriptRule = {
  test: /\.(ts|tsx)$/,
  use: [{
    loader: require.resolve('awesome-typescript-loader')
  }, {
    loader: require.resolve('react-docgen-typescript-loader')
  }],
}

module.exports = (baseConfig, env, config) => {
  config.module.rules = config.module.rules.filter((r) => {
    // console.log(r.test, r.test.test(".css"))
    return !r.test.test(".css")
  })
  config.module.rules.push(typeScriptRule);
  config.module.rules.push(showStoryRule)  
  config.module.rules.push(styleRules)
  config.module.rules.push(styleRulesBase)
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};