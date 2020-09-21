(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 17:
/***/ (function(module, exports) {

function ajaxPromise(url, method) {
  return Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function (res) {
      if (xhr.status === '200') {
        resolve(res);
      } else {
        reject(res);
      }
    };

    try {
      xhr.open();
    } catch (err) {
      reject(err);
    }
  });
}

/***/ })

}]);