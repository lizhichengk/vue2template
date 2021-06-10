#!/bin/sh
APP_NAME="{{APP_NAME}}"

rm -rf dist

npm install --registry=http://ued.zuoyebang.cc/npm

rm -rf output

npm run build

mkdir -p output/webroot/static/$APP_NAME

#拷贝代码文件
cp -r dist/*  output/webroot/static/$APP_NAME
cd output

#打包
tar -zcf $APP_NAME.tar.gz  webroot/
rm -rf webroot
