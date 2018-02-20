var arr = [];

//csdn  前端简单说
arr.push.apply(arr, Array.prototype.slice.call(document.getElementsByClassName('csdn-toolbar-skin-black')));
arr.push.apply(arr, Array.prototype.slice.call(document.getElementsByClassName('pulllog-box')));
arr.push.apply(arr, Array.prototype.slice.call(document.getElementsByTagName("aside")));


//Angular 修仙之路
arr.push.apply(arr, Array.prototype.slice.call(document.getElementsByClassName('isStuck')));
arr.push.apply(arr, Array.prototype.slice.call(document.getElementsByClassName('side-outline')));
arr.push.apply(arr, Array.prototype.slice.call(document.getElementsByClassName('side')));






arr.filter(function (value){
   value.style.display = 'none';
});

