(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "../public/css/style.css":
/*!*******************************!*\
  !*** ../public/css/style.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../cumin/node_modules/raw-loader!../../cumin/node_modules/postcss-loader/lib??embedded!./style.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!../public/css/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../cumin/node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!../public/css/style.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!../public/css/style.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Mukta:400,800\");\nbody{margin:0;padding:0;font-size:16px;font-family:\"Mukta\",Helvetica,Arial,sans-serif;color:#fff;background-color:#000}\n*,*:before,*:after{box-sizing:border-box;outline:none}\nh1,.h1{font-size:2.375em;color:#fff;margin-top:.75em;margin-bottom:.5em;line-height:1.2;font-weight:800}\n@media screen and (min-width: 1200px){h1,.h1{font-size:2.5em}}\nh2,.h2{font-size:1.875em;color:#fff;margin-top:.9375em;margin-bottom:.625em;line-height:1.2;font-weight:800}\n@media screen and (min-width: 1200px){h2,.h2{font-size:2em}}\nh3,.h3{font-size:1.375em;color:#fff;margin-top:1.25em;margin-bottom:.83333em;line-height:1.2;font-weight:800}\n@media screen and (min-width: 1200px){h3,.h3{font-size:1.5em}}\nh4,.h4{font-size:1em;color:#fff;margin-top:1.66667em;margin-bottom:1.11111em;line-height:1.2;font-weight:800}\n@media screen and (min-width: 1200px){h4,.h4{font-size:1.125em}}\nh5,.h5{font-size:.875em;color:#fff;margin-top:1.875em;margin-bottom:1.25em;line-height:1.2;font-weight:800}\n@media screen and (min-width: 1200px){h5,.h5{font-size:1em}}\nh6,.h6{font-size:.75em;color:#fff;margin-top:2.14286em;margin-bottom:1.42857em;line-height:1.2;font-weight:800}\n@media screen and (min-width: 1200px){h6,.h6{font-size:.875em}}\nstrong{font-weight:800}\na,.a,.link{color:#1DB954;text-decoration:none}\na:hover,a:focus,.a:hover,.a:focus,.link:hover,.link:focus{text-decoration:underline}\nblockquote{font-size:1.125em;margin:2.5em 0;padding:0;font-weight:800;color:#fff}\nblockquote>*:first-child{margin-top:0}\nblockquote>*:last-child{margin-bottom:0}\nblockquote *{font-size:inherit;font-weight:inherit;color:inherit}\nimg{max-width:100%;height:auto;display:block}\ninput,textarea{font-size:1em;font-family:\"Mukta\",Helvetica,Arial,sans-serif;font-weight:400;color:#fff;background:transparent;border:none;box-shadow:none;-webkit-appearance:none;border-radius:0;margin:0;padding:0;border-bottom:1px solid #fff;display:block;width:100%}\ninput{line-height:1}\ntextarea{resize:vertical}\nbutton,.btn{font-size:16px;padding:1.1875em 3.5em 1.3125em;margin:0;line-height:1;border-radius:500px;background:#1DB954;color:#fff;text-decoration:none;border:none;box-shadow:none;-webkit-appearance:none;display:inline-block;text-transform:uppercase;font-weight:800;cursor:pointer}\nhr{margin:2.8125em 0;border-color:#757575}\n.clearfix:after,.cf:after{content:'';display:table;clear:both}\n.hide-element{position:absolute !important;height:1px;width:1px;overflow:hidden;clip:rect(1px, 1px, 1px, 1px)}\n.hide-text{overflow:hidden;text-indent:-99999px;font-size:1px;color:transparent;position:absolute}\n.c-white{color:#fff}\n.bg-white{background-color:#fff}\n.c-black{color:#000}\n.bg-black{background-color:#000}\n.c-black-bg{color:#181818}\n.bg-black-bg{background-color:#181818}\n.c-green{color:#1DB954}\n.bg-green{background-color:#1DB954}\n.c-content{color:#222326}\n.bg-content{background-color:#222326}\n.c-grey{color:#757575}\n.bg-grey{background-color:#757575}\n.c-dark-grey{color:#3B3738}\n.bg-dark-grey{background-color:#3B3738}\n.c-light-grey{color:#f6f6f6}\n.bg-light-grey{background-color:#f6f6f6}\n.p-0{padding:0em}\n.p-h-0{padding-right:0em;padding-left:0em}\n.p-v-0{padding-top:0em;padding-bottom:0em}\n.p-t-0{padding-top:0em}\n.p-b-0{padding-bottom:0em}\n.p-l-0{padding-left:0em}\n.p-r-0{padding-right:0em}\n.p-2{padding:.125em}\n.p-h-2{padding-right:.125em;padding-left:.125em}\n.p-v-2{padding-top:.125em;padding-bottom:.125em}\n.p-t-2{padding-top:.125em}\n.p-b-2{padding-bottom:.125em}\n.p-l-2{padding-left:.125em}\n.p-r-2{padding-right:.125em}\n.p-5{padding:.3125em}\n.p-h-5{padding-right:.3125em;padding-left:.3125em}\n.p-v-5{padding-top:.3125em;padding-bottom:.3125em}\n.p-t-5{padding-top:.3125em}\n.p-b-5{padding-bottom:.3125em}\n.p-l-5{padding-left:.3125em}\n.p-r-5{padding-right:.3125em}\n.p-10{padding:.625em}\n.p-h-10{padding-right:.625em;padding-left:.625em}\n.p-v-10{padding-top:.625em;padding-bottom:.625em}\n.p-t-10{padding-top:.625em}\n.p-b-10{padding-bottom:.625em}\n.p-l-10{padding-left:.625em}\n.p-r-10{padding-right:.625em}\n.p-15{padding:.9375em}\n.p-h-15{padding-right:.9375em;padding-left:.9375em}\n.p-v-15{padding-top:.9375em;padding-bottom:.9375em}\n.p-t-15{padding-top:.9375em}\n.p-b-15{padding-bottom:.9375em}\n.p-l-15{padding-left:.9375em}\n.p-r-15{padding-right:.9375em}\n.p-20{padding:1.25em}\n.p-h-20{padding-right:1.25em;padding-left:1.25em}\n.p-v-20{padding-top:1.25em;padding-bottom:1.25em}\n.p-t-20{padding-top:1.25em}\n.p-b-20{padding-bottom:1.25em}\n.p-l-20{padding-left:1.25em}\n.p-r-20{padding-right:1.25em}\n.p-25{padding:1.5625em}\n.p-h-25{padding-right:1.5625em;padding-left:1.5625em}\n.p-v-25{padding-top:1.5625em;padding-bottom:1.5625em}\n.p-t-25{padding-top:1.5625em}\n.p-b-25{padding-bottom:1.5625em}\n.p-l-25{padding-left:1.5625em}\n.p-r-25{padding-right:1.5625em}\n.p-30{padding:1.875em}\n.p-h-30{padding-right:1.875em;padding-left:1.875em}\n.p-v-30{padding-top:1.875em;padding-bottom:1.875em}\n.p-t-30{padding-top:1.875em}\n.p-b-30{padding-bottom:1.875em}\n.p-l-30{padding-left:1.875em}\n.p-r-30{padding-right:1.875em}\n.p-35{padding:2.1875em}\n.p-h-35{padding-right:2.1875em;padding-left:2.1875em}\n.p-v-35{padding-top:2.1875em;padding-bottom:2.1875em}\n.p-t-35{padding-top:2.1875em}\n.p-b-35{padding-bottom:2.1875em}\n.p-l-35{padding-left:2.1875em}\n.p-r-35{padding-right:2.1875em}\n.m-0{margin:0em}\n.m-h-0{margin-right:0em;margin-left:0em}\n.m-v-0{margin-top:0em;margin-bottom:0em}\n.m-t-0{margin-top:0em}\n.m-b-0{margin-bottom:0em}\n.m-l-0{margin-left:0em}\n.m-r-0{margin-right:0em}\n.m-2{margin:.125em}\n.m-h-2{margin-right:.125em;margin-left:.125em}\n.m-v-2{margin-top:.125em;margin-bottom:.125em}\n.m-t-2{margin-top:.125em}\n.m-b-2{margin-bottom:.125em}\n.m-l-2{margin-left:.125em}\n.m-r-2{margin-right:.125em}\n.m-5{margin:.3125em}\n.m-h-5{margin-right:.3125em;margin-left:.3125em}\n.m-v-5{margin-top:.3125em;margin-bottom:.3125em}\n.m-t-5{margin-top:.3125em}\n.m-b-5{margin-bottom:.3125em}\n.m-l-5{margin-left:.3125em}\n.m-r-5{margin-right:.3125em}\n.m-10{margin:.625em}\n.m-h-10{margin-right:.625em;margin-left:.625em}\n.m-v-10{margin-top:.625em;margin-bottom:.625em}\n.m-t-10{margin-top:.625em}\n.m-b-10{margin-bottom:.625em}\n.m-l-10{margin-left:.625em}\n.m-r-10{margin-right:.625em}\n.m-15{margin:.9375em}\n.m-h-15{margin-right:.9375em;margin-left:.9375em}\n.m-v-15{margin-top:.9375em;margin-bottom:.9375em}\n.m-t-15{margin-top:.9375em}\n.m-b-15{margin-bottom:.9375em}\n.m-l-15{margin-left:.9375em}\n.m-r-15{margin-right:.9375em}\n.m-20{margin:1.25em}\n.m-h-20{margin-right:1.25em;margin-left:1.25em}\n.m-v-20{margin-top:1.25em;margin-bottom:1.25em}\n.m-t-20{margin-top:1.25em}\n.m-b-20{margin-bottom:1.25em}\n.m-l-20{margin-left:1.25em}\n.m-r-20{margin-right:1.25em}\n.m-25{margin:1.5625em}\n.m-h-25{margin-right:1.5625em;margin-left:1.5625em}\n.m-v-25{margin-top:1.5625em;margin-bottom:1.5625em}\n.m-t-25{margin-top:1.5625em}\n.m-b-25{margin-bottom:1.5625em}\n.m-l-25{margin-left:1.5625em}\n.m-r-25{margin-right:1.5625em}\n.m-30{margin:1.875em}\n.m-h-30{margin-right:1.875em;margin-left:1.875em}\n.m-v-30{margin-top:1.875em;margin-bottom:1.875em}\n.m-t-30{margin-top:1.875em}\n.m-b-30{margin-bottom:1.875em}\n.m-l-30{margin-left:1.875em}\n.m-r-30{margin-right:1.875em}\n.m-35{margin:2.1875em}\n.m-h-35{margin-right:2.1875em;margin-left:2.1875em}\n.m-v-35{margin-top:2.1875em;margin-bottom:2.1875em}\n.m-t-35{margin-top:2.1875em}\n.m-b-35{margin-bottom:2.1875em}\n.m-l-35{margin-left:2.1875em}\n.m-r-35{margin-right:2.1875em}\n.header-text{font-size:3.125em;margin-top:.6em;margin-bottom:.4em}\n@media screen and (min-width: 1200px){.header-text{font-size:7.5em;margin-top:.25em;margin-bottom:.16667em}}\n.sub-header-text{font-size:2.8125em;margin-top:.66667em;margin-bottom:.44444em}\n@media screen and (min-width: 1200px){.sub-header-text{font-size:5em;margin-top:.375em;margin-bottom:.25em}}\n.header-text,.sub-header-text{color:#fff;line-height:1.2;font-weight:800}\n.text--bold{font-weight:800}\n.text--normal{font-weight:400}\n.text--center{text-align:center}\n.text--left{text-align:left}\n.text--right{text-align:right}\n.text--uppercase{text-transform:uppercase}\n.container{max-width:calc(1366px - (15px * 2));padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}\n@media screen and (min-width: 768px){.container{max-width:calc(1366px - (20px * 2));padding-right:20px;padding-left:20px}}\n.wrapper{padding-top:50px;padding-bottom:50px}\n@media screen and (min-width: 1024px){.wrapper{padding-top:75px;padding-bottom:75px}}\n.separator{display:block;width:100%;height:1px;margin:1.5625em 0;background:#757575}\n.main-menu{display:flex;align-items:center;justify-content:space-between}\n.main-menu .site-logo{margin:6px 0 2px;padding:4px 0;display:flex;height:45px;border-bottom:2px solid transparent;transition:.5s}\n@media screen and (min-width: 768px){.main-menu .site-logo{height:50px}}\n.main-menu .site-logo:hover{border-bottom:2px solid #1DB954;transition:.5s}\n.main-menu .site-logo svg{width:auto;height:100%;margin:0 auto}\n.main-menu .menu{list-style:none}\n.main-menu .menu li{float:left;margin:0 .625em}\n@media screen and (min-width: 768px){.main-menu .menu li{margin:0 1.25em}}\n.main-menu .menu li:last-child{margin-right:0}\n.main-menu .menu li a{text-transform:uppercase;font-size:.875em;color:#000}\n.main-menu .menu li a:hover{color:#1DB954}\n.progression-circle{background-color:#222326;border-radius:50%;display:block;margin-right:auto;margin-left:auto;width:15rem;height:15rem;position:relative}\n.progression-circle:before{content:attr(data-progress) \"%\";display:flex;justify-content:center;align-items:center;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);width:calc(100% - 2rem);height:calc(100% - 2rem);border-radius:50%;background:#fff;color:#222326;font-size:32px;font-weight:800}\n.progression-circle:after{content:'';background-color:#1DB954;border-radius:50%;display:inline-block;height:100%;width:100%}\n.progression-circle[data-progress='0']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(90deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='1']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(93.6deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='2']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(97.2deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='3']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(100.8deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='4']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(104.4deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='5']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(108deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='6']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(111.6deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='7']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(115.2deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='8']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(118.8deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='9']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(122.4deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='10']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(126deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='11']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(129.6deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='12']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(133.2deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='13']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(136.8deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='14']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(140.4deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='15']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(144deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='16']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(147.6deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='17']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(151.2deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='18']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(154.8deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='19']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(158.4deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='20']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(162deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='21']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(165.6deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='22']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(169.2deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='23']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(172.8deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='24']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(176.4deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='25']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(180deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='26']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(183.6deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='27']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(187.2deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='28']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(190.8deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='29']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(194.4deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='30']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(198deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='31']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(201.6deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='32']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(205.2deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='33']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(208.8deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='34']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(212.4deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='35']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(216deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='36']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(219.6deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='37']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(223.2deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='38']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(226.8deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='39']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(230.4deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='40']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(234deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='41']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(237.6deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='42']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(241.2deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='43']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(244.8deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='44']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(248.4deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='45']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(252deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='46']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(255.6deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='47']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(259.2deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='48']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(262.8deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='49']:after{background-image:linear-gradient(90deg, #222326 50%, transparent 50%, transparent),linear-gradient(266.4deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='50']:after{background-image:linear-gradient(-90deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='51']:after{background-image:linear-gradient(-86.4deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='52']:after{background-image:linear-gradient(-82.8deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='53']:after{background-image:linear-gradient(-79.2deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='54']:after{background-image:linear-gradient(-75.6deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='55']:after{background-image:linear-gradient(-72deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='56']:after{background-image:linear-gradient(-68.4deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='57']:after{background-image:linear-gradient(-64.8deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='58']:after{background-image:linear-gradient(-61.2deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='59']:after{background-image:linear-gradient(-57.6deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='60']:after{background-image:linear-gradient(-54deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='61']:after{background-image:linear-gradient(-50.4deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='62']:after{background-image:linear-gradient(-46.8deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='63']:after{background-image:linear-gradient(-43.2deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='64']:after{background-image:linear-gradient(-39.6deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='65']:after{background-image:linear-gradient(-36deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='66']:after{background-image:linear-gradient(-32.4deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='67']:after{background-image:linear-gradient(-28.8deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='68']:after{background-image:linear-gradient(-25.2deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='69']:after{background-image:linear-gradient(-21.6deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='70']:after{background-image:linear-gradient(-18deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='71']:after{background-image:linear-gradient(-14.4deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='72']:after{background-image:linear-gradient(-10.8deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='73']:after{background-image:linear-gradient(-7.2deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='74']:after{background-image:linear-gradient(-3.6deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='75']:after{background-image:linear-gradient(0deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='76']:after{background-image:linear-gradient(3.6deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='77']:after{background-image:linear-gradient(7.2deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='78']:after{background-image:linear-gradient(10.8deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='79']:after{background-image:linear-gradient(14.4deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='80']:after{background-image:linear-gradient(18deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='81']:after{background-image:linear-gradient(21.6deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='82']:after{background-image:linear-gradient(25.2deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='83']:after{background-image:linear-gradient(28.8deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='84']:after{background-image:linear-gradient(32.4deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='85']:after{background-image:linear-gradient(36deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='86']:after{background-image:linear-gradient(39.6deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='87']:after{background-image:linear-gradient(43.2deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='88']:after{background-image:linear-gradient(46.8deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='89']:after{background-image:linear-gradient(50.4deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='90']:after{background-image:linear-gradient(54deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='91']:after{background-image:linear-gradient(57.6deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='92']:after{background-image:linear-gradient(61.2deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='93']:after{background-image:linear-gradient(64.8deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='94']:after{background-image:linear-gradient(68.4deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='95']:after{background-image:linear-gradient(72deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='96']:after{background-image:linear-gradient(75.6deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='97']:after{background-image:linear-gradient(79.2deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='98']:after{background-image:linear-gradient(82.8deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='99']:after{background-image:linear-gradient(86.4deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle[data-progress='100']:after{background-image:linear-gradient(90deg, #1DB954 50%, transparent 50%, transparent),linear-gradient(270deg, #1DB954 50%, #222326 50%, #222326)}\n.progression-circle.black-inner-circle:before{background:#000;color:#fff}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./src/styles.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/styles.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!./styles.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************************************!*\
  !*** multi ../public/css/style.css ./src/styles.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/adriaanjansevanrensburg/Documents/Sites/pide/public/css/style.css */"../public/css/style.css");
module.exports = __webpack_require__(/*! /Users/adriaanjansevanrensburg/Documents/Sites/pide/cumin/src/styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map