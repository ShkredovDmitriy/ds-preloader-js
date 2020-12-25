## ds-preloader-js
<img src="https://badgen.net/npm/v/ds-preloader-js"/><img src="https://badgen.net/npm/dw/ds-preloader-js"/></br>


### Demo
<a href="https://shkredovdmitriy.github.io/ds-preloader-js" target="_blank">github.io</a> <a href="https://codepen.io/shkredovdmitriy/pen/bGwqXOa" target="_blank">codepen.io</a> 


### Advantages
- Easy to use
- Has no dependencies </br>
- Small size (less than 2kb min+gzip)


### How to use in older browsers
For older browsers please use <a href="https://www.npmjs.com/package/promise-polyfill" target="_blank">promise-polyfill</a>


### Use without installation
Add this lines to head
```
<link href="https://unpkg.com/ds-preloader-js/dist/ds-preloader.min.css" rel="stylesheet">
```
```
<script src="https://unpkg.com/ds-preloader-js/dist/ds-preloader.min.js"></script>
```
Add this class to body
```
<body class="ds-prl-body">
```


### Simple working example
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=">
  <link href="https://unpkg.com/ds-preloader-js/dist/ds-preloader.min.css" rel="stylesheet">
  <script src="https://unpkg.com/ds-preloader-js/dist/ds-preloader.min.js"></script>
</head>
<body class="ds-prl-body">
  <img src="https://shkredovdmitriy.github.io/ds-preloader-js/images/image-demo-1.jpg" class="ds-preloader-demo-image">
  <img src="https://shkredovdmitriy.github.io/ds-preloader-js/images/image-demo-2.jpg" class="ds-preloader-demo-image">
  <img src="https://shkredovdmitriy.github.io/ds-preloader-js/images/image-demo-3.jpg" class="ds-preloader-demo-image">
  <img src="https://shkredovdmitriy.github.io/ds-preloader-js/images/image-demo-4.jpg" class="ds-preloader-demo-image">
</body>
</html>
```


### License
MIT License
