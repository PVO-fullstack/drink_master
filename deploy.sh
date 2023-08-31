#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# если вы деплоите на кастомный домен
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# если вы деплоите на https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# если вы деплоите на https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:PVO-fulstack/drink_master.git master:gh-pages

cd -