let webpack = require("webpack");
let WebpackDevServer = require("webpack-dev-server");
let config = require("./webpack.config");

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(4000, "localhost", function (err) {
    if (err) {
        console.log(err);
    }
    console.log("dev server Listening at localhost:4000");
});


