const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    name: "250226",
    mode: "development",
    entry: "./src/index.jsx",
    resolve: { 
        // 웹팩이 파일 확장자를 자동으로 인식할 수 있도록 설정
        // .jsx나 .js 확장자를 직접 안 써도 자동으로 찾음
        // 개발자가 import할 때 확장자를 생략할 수 있어 편리함
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
          {
            test: /\.jsx?/, // .jsx 확장자명을 포함한 파일들
            loader: 'babel-loader', // 바벨 로더를 적용시킴
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'], // 바벨 설정
              plugins: [],
            },
          },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html"
        })
    ],
    devServer:{
        static: {
            // 정적 파일을 제공하는 폴더를 저장하는 옵션
            directory: path.join(__dirname ,"dist") 
        },
        // 정적 파일을 gzip 압축해서 제공함 => 파일 크키 줄여서 응답속도 빠름
        compress:true,
        port: 3000,
        // 중요! Hot Module Replacement 기능을 활성화하는 옵션
        hot: true,
        historyApiFallback:true
    },
    output: { // 번들링할 파일을 어디에 저장할거야?
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    }
}