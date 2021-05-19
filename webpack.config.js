const path = require( 'path' );

module.exports = {
    // apply loaders to files that meet given conditions
    loaders: [ {
        test: /\.jsx?$/,
        include: path.join( __dirname, '/client/src' ),
        loader: 'babel-loader',
        query: {
            presets: [ "react", "es2015", "stage-1" ]
        }
    },
    {
        test: /\.(gif|svg|jpg|png)$/,
        loader: "file-loader",
    } ],
};