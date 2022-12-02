const path = require("path");

function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	// publicPath: process.env.NODE_ENV === 'productions' ? '/memnow_dev/' : '/',
	chainWebpack: (config) => {
		// TODO move to register

		config.resolve.alias.set("~", resolve("src")).set("@components", resolve("src/components")).set("@views", resolve("src/views")).set("@img", resolve("src/assets/img"));
	},
};
