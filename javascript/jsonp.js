// 手动实现jsonp

/**
 * 定义：json with padding，server端返回的是填充的json：callback(json)
 * 1. 将data转化为querystring(所以jsonp只支持get请求)
 * 2. 生成不重复的函数名作为参数
 * 3. 在页面上生成script标签
 * 4. 挂载函数
 */

(function (window, document) {
  function jsonp(url, data, callback) {
    let queryStr = url.indexOf('?') > -1 ? '&' : '?';
    for(let key in data) {
      queryStr += `${key}=${data[key]}&`;
    };

    let callbackName = 'cb' + Math.random().toString().replace(',', '');
    queryStr += `callback=${callbackName}`;

    let script = document.createElement('script');
    script.src = url + queryStr;

    window[callbackName] = function(data) {
      callback(data);
      document.body.removeChild(script);
      delete window[callbackName];
    }

    document.body.appendChild(script);
  }

  window.$jsonp = jsonp;

})(window, document);