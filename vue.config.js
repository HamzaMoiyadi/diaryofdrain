const path = require('path');


module.exports = {
    chainWebpack(config) {
		config.module.rule('md')
			.test(/\.md/)
			.use('vue-loader')
			.loader('vue-loader')
			.end()
			.use('vue-markdown-loader')
			.loader('vue-markdown-loader/lib/markdown-compiler')
			.options({
				raw: true
			})
	},

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'stylus',
        patterns: [
			path.resolve(__dirname, './src/styles/*.styl'),
		]
      }
    }
}


// function addStyleResource(rule) {

// 	rule.use('style-resource')
// 		.loader('style-resources-loader')
// 		.options({
// 			patterns: [
				
// 			],
// 		})

// }
