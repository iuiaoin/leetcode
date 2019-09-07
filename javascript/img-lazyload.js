// 图片懒加载

/**  首先用一个其他属性来存储真正的图片地址 
 * <img src="loading.gif" data-src="https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg" alt="">
 * <img src="loading.gif" data-src="https://cdn.pixabay.com/photo/2014/08/01/00/08/pier-407252_1280.jpg" alt="">
 * <img src="loading.gif" data-src="https://cdn.pixabay.com/photo/2014/12/15/17/16/pier-569314_1280.jpg" alt="">
 * <img src="loading.gif" data-src="https://cdn.pixabay.com/photo/2010/12/13/10/09/abstract-2384_1280.jpg" alt="">
 * <img src="loading.gif" data-src="https://cdn.pixabay.com/photo/2015/10/24/11/09/drop-of-water-1004250_1280.jpg" alt="">
 */

/**
 * 两种方法：
 * 1. 监听页面的滚动事件，计算图片的offsetTop < window.innerHeight + document.documetElement.scollTop则在视口内，对图片进行加载
 * 2. IntersectionObserver
 */

/* 监听滚动 */
const imgs = document.querySelectorAll('img');
let n = 0;
lazyload();
window.addEventListener('scroll', throttle(lazyload, 200));

function throttle(event, time) {
  let timer = null;
  return function (...args) {
    if (!time) {
      setTimeout(() => {
        event.apply(this, args);
        timer = null;
      }, time);
    }
  }
}

function lazyload() {
  let seeHeight = window.innerHeight,
      scrollTop = (document.documentElement || document.body).scrollTop;
  for (let i = n; i < imgs.length; i++) {
    let inViewport = imgs[i].offsetTop < seeHeight + scrollTop;
    if (inViewport) {
      if(imgs[i].getAttribute('src') === 'loading.gif') {
        imgs[i].src = imgs[i].getAttribute('data-src');
      }
      n = i + 1;
    }
  }
}

/* IntersectionObserver */
const imgs = documnet.querySelectorAll('img');
if(IntersectionObserver) {
  const intersectoinObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      let lazyImg = entry.target;
      if(entry.intersectionRatio > 0) {
        if(lazyImg.getAttribute('src') === 'loading.gif') {
          lazyImg.src = lazyImg.getAttribute('data-src');
        }
        intersectoinObserver.unobserve(lazyImg);
      }
    })
  });
  for(let i = 0; i < imgs.length; i++) {
    intersectoinObserver.observe(imgs[i]);
  }
}