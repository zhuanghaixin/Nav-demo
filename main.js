
var keys = {
  0: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  1: ['a', 's', 'd', 'f', 'g', 'h',  'j', 'k','l'],
  2: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  length: 3
}
var hash = {
  q: 'qq.com',
  w: 'weibo.com',
  e: 'ele.em',
  r: 'renren.com',
  t: 'tianya.com',
  y: 'youtube.com',
  u: 'uc.com',
  i: 'iqiyi.com',
  o: 'opera.com',
  a: 'acfun.tv',
  s: 'sohu.com',
  z: 'zhihu.com',
  m: 'meituan.com'

}
//取出localStorage中的zzz的 hash
var hashLocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null');//不写null会报错
//
if(hashLocalStorage) {
  hash = hashLocalStorage;
}
//遍历 keys,生成 knd 标签
var index = 0;
while(index<keys['length']){
  div1 = document.createElement('div');
  div1.className='row';
  main.appendChild(div1);
  row =keys[index]  //第一个数组 第二个数组 第三个数组
  // console.log(row);
  index2=0;
  while(index2<row.length) {  //0-9 0-8 --6
    kbd = document.createElement('kbd');
    span=document.createElement('span');
    span.className='text';
    kbd.appendChild(span);
    span.textContent=row[index2];
    // kbd.textContent = row[index2];
    kbd.className='key';
    button = document.createElement('button');
    button.textContent='编辑';
    button.id=row[index2];
    //添加图标
    img=document.createElement('img');
    if(hash[row[index2]]) {
      img.src = 'http://' + hash[row[index2]] + '/favicon.ico';
    }else{
      img.src='https://cdn.mdn.mozilla.net/static/img/favicon.78cc2f51b652.ico';
    }
    //监听错误事件
    img.onerror=function (error) {
      // console.log("请求图片失败");
      error.target.src='https://cdn.mdn.mozilla.net/static/img/favicon.78cc2f51b652.ico';
    }
    button.onclick=function(buttonPress){
     // console.log(button); 总是最后一个
     //  console.log(buttonPress.target.id)
      button2=buttonPress['target'];
      //获取button的前面一个元素img
      console.log(button2.previousSibling);
      img2=button2.previousSibling;

      // console.log(buttonPress.target.previousSbiling+"我是你爹");
      key =button2['id'];
      console.log(key);
      x = prompt("给我一个网址");
      hash[key] = x;  // 变更 ，存档
      img2.src='http://' + x + '/favicon.ico'; //更改图标
      //可能还会有不能访问的图片，所以我们需要监听
      img2.onerror=function (error) {
        // console.log("请求图片失败");
        error.target.src='https://cdn.mdn.mozilla.net/static/img/favicon.78cc2f51b652.ico';
      }
      localStorage.setItem('zzz',JSON.stringify(hash));
      // console.log(hash);
    }
    kbd.appendChild(img);
    kbd.appendChild(button);

    div1.appendChild(kbd);

    index2 = index2+1;
  }
  index = index+1;
}

document.onkeypress = function (pressKey) {
  console.log(pressKey['key']);
  var key=pressKey['key'];
  var website =hash[key];
  console.log(website);
  // location.href='http://'+website,'_blank' 当前页面打开
  window.open('http://'+website,'_blank'); //新开页面打开
}

