webpackJsonp([2,6],{160:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.PublishComponent=void 0;var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),s=i(f),p=(n(3),n(12)),m=n(8),d=n(9),h=r(d),b=t.PublishComponent=function(e){function t(e){l(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.title,n.neirong,n.file,n.form,n}return u(t,e),c(t,[{key:"handleSubmit",value:function(){var e=this.props.actions._alert,t=this.title.value.trim(),n=this.neirong.value.trim();if(t.length<5)return void e("标题最少5个字");if(n.length<20)return void e("内容最少20个字");if(this.file.value){if(this.file.files[0].type.indexOf("image")==-1)return void e("只能上传图片");if(this.file.files[0].size>51200)return void e("图片大小不能超过50KB")}var r=new FormData(this.form);this.props.actions.publishSubmit(r)}},{key:"render",value:function(){var e=this;return this.props.news,s["default"].createElement("form",{className:"publish",ref:function(t){e.form=t}},s["default"].createElement("div",{className:"publishItem"},s["default"].createElement("div",{className:"name"},"文章标题："),s["default"].createElement("div",{className:"inputDiv"},s["default"].createElement("input",a({type:"text",className:"title",ref:function(t){e.title=t},name:"title",placeholder:"请输入文章标题"},"placeholder","最少5个字")))),s["default"].createElement("div",{className:"publishItem"},s["default"].createElement("div",{className:"name"},"文章内容："),s["default"].createElement("div",{className:"inputDiv"},s["default"].createElement("textarea",a({placeholder:"请输入文章内容",ref:function(t){e.neirong=t},rows:"10",name:"neirong"},"placeholder","最少20个字")))),s["default"].createElement("div",{className:"publishItem"},s["default"].createElement("div",{className:"name"},"上传封面："),s["default"].createElement("div",{className:"inputDiv"},s["default"].createElement("input",{type:"file",name:"upload",ref:function(t){e.file=t},accept:"*.jpg"}))),s["default"].createElement("input",{type:"button",className:"btn publishBtn",value:"发布文章",onClick:function(){e.handleSubmit()}}))}}]),t}(f.Component),v=function(e){return{publish:e.container}},y=function(e){return{actions:(0,m.bindActionCreators)(h,e)}},E=(0,p.connect)(v,y)(b);e.exports=E}});
//# sourceMappingURL=2.8c7395b4578443e2300d.chunk.js.map