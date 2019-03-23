const path = require('path');


module.exports = {
	css: {
		loaderOptions: {
			stylus: {
				data: `@import "@/styles/_variables.styl";@import "@/styles/globals.styl"`
			}
		}
	},
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
	}
}


function addStyleResource(rule) {

	rule.use('style-resource')
		.loader('style-resources-loader')
		.options({
			patterns: [
				path.resolve(__dirname, './src/styles/globals.styl'),
			],
		})

}