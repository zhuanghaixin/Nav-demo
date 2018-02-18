
var keys = {
  0: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  1: ['a', 's', 'd', 'f', 'g', 'h', 'i', 'j', 'k',],
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
  p: 'undefined',
  a: 'acfun.tv',
  s: 'sohu.com',
  z: 'zhihu.com',
  m: 'meituan.com'

}
//取出localStorage中的zzz的 hash
var hashLocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null');//不写null会报错

if(localStorage) {
  hash = hashLocalStorage
}
//遍历 keys,生成 knd 标签
var index = 0;
while(index<keys['length']){
  div1 = document.createElement('div');
  mainxxxxx.appendChild(div1);
  row =keys[index]  //第一个数组 第二个数组 第三个数组
  // console.log(row);
  index2=0;
  while(index2<row.length) {  //0-9 0-8 --6
    kbdxxxxx = document.createElement('kbd');
    kbdxxxxx.textContent = row[index2];
    buttonX = document.createElement('button');
    buttonX.textContent='编辑';
    buttonX.id=row[index2];
    buttonX.onclick=function(buttonPress){
     // console.log(buttonX); 总是最后一个
      console.log(buttonPress.target.id);
      key =buttonPress.target.id;
      x = prompt("给我一个网址");
      hash[key] = x;  // 变更 ，存档
      localStorage.setItem('zzz',JSON.stringify(hash));
      console.log(hash);
    }
    kbdxxxxx.appendChild(buttonX);
    div1.appendChild(kbdxxxxx);
    index2 = index2+1;
  }
  index = index+1;
}

document.onkeypress = function (pressKey) {
  // console.log(pressKey['key']);
  key=pressKey['key'];
  website =hash[key];
  console.log(website);
  // location.href='http://'+website,'_blank' 当前页面打开
  window.open('http://'+website,'_blank'); //新开页面打开
}

