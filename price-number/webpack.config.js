module.exports = {
	mode: "production",
	entry: {
		"price-number": "./src/index.js",
		"price-number.min": "./src/index.js"
	},
	output: {
		filename: "[name].js",
		library: "priceNumber",    // 指定库的全局变量
		libraryExport: "default",  
		libraryTarget: "umd"       // ⽀持库引⼊的⽅式
	}
}