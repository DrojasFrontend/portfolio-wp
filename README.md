# Wordpress development workflow . 😀

![](https://blog.ida.cl/wp-content/uploads/sites/5/2017/11/wordpress_gulp.png)

## Gulp workflow for WordPress theme development

### Theme folder structure:
```
theme Portfolio WP
|── bundled
|── dist/
|   |── css/
|   |   |-- admin.css
|   |   |-- bundle.css
|   |── images/
|   |── js/
|   |   |-- admin.js
|   |   |-- bundle.js
|── src/
|   |── images/
|   |── js/
|   |   |-- components/
|   |        |--- admin.js // bundled with all imported files (minified in production)
|   |        |--- bundle.js // bundled with all imported files (minified in production)
|   |── scss/
|   |   |-- components/
|   |        |--- admin.scss //bundled with all imported files (minified in production)
|   |        |--- bundle.scss // bundled with all imported files (minified in production)
|   |── .babelrc
|   |── gulpfile.babel
|   |── package.json
|   |── README.md
|   |── style.css
```

# Using ES6 in the Gulpfile
gulpfile.js to gulpfile.babel.js

# DEV
```
$ npm run dev
```
# PROD
```
$ npm run build
```
# Packaging the theme in a ZIP file
```
$ npm run build
```
```
themefolder
|── bundled
      |── theme.zip
```
# License
MIT