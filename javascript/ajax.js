// 基于 promise 封装的 ajax

function getStringParam(param) {
  let str = '';
  for (key in param) {
    str += `${key}=${param[key]}&`;
  }
  return str.slice(0, str.length - 1);
}

function ajax(url, method = 'get', param = {}) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const paramString = getStringParam(param);
    if (method === 'get' && paramString) {
      let symbol = url.indexOf('?') !== -1 ? '&' : '?';
      url += symbol + paramString;
    }

    xhr.open(method, url);

    xhr.onload = function () {
      const result = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: xhr.getAllResponseHeaders(),
        data: xhr.response || xhr.responseText
      }
      if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
        resolve(result);
      } else {
        reject(result);
      }
    }

    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.withCredentials = true;

    xhr.onerror = function () {
      reject(new TypeError('request error'));
    }

    xhr.timeout = function () {
      reject(new TypeError('request timeout'));
    }

    xhr.onabort = function() {
      reject(new TypeError('request aborted'));
    }

    if(method === 'post') {
      xhr.send(paramString);
    } else {
      xhr.send();
    }
  })
}