var webpack=require('webpack');
module.exports={
    entry:{
        banner:'./js/banner.js',
        gende:'./js/gende.js',
        medical:'./js/medicalHistory.js',
        Nonallergicfood:'./js/Nonallergicfood.js',
        dislikeFood:'./js/dislikeFood.js',
        feel:'./js/feel.js',
        levelQuality:'./js/levelQuality.js'
    },
    output:{
        path:'dist/',
        filename:'js/[name].js',
        publicPath:'../dist/'
    },
    module:{
        loaders:[
            {test:/\.css$/, loader:'style!css'},
            {test: /\.scss$/, loaders: ["style", "css","sass"]},
            {test:/\.(png|jpg|gif)$/, loader:'url-loader?limit=8192&name=img/[name].[ext]'},
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: 'node_modules'
            }
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        })
    ]

};
