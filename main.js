//1.初始化数据
var hashA=init();
var keys=hashA['keys'];
var hash=hashA['hash'];

//2.生成键盘
//遍历 keys,生成 knd 标签
generateKeyboard(keys,hash);



//3.监听键盘
listenToKeyboard(hash);



//函数
function getFromLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name) || 'null');//不写null会报错
}

function tag(tagName) {
  return document.createElement(tagName);
}

function createSpan(textContent) {
  var span = tag('span');
  span.textContent = textContent;
  span.className = 'text';
  return span;
}


function createButton(id) {
  var button = tag('button');
  button.textContent = '编辑';
  button.id = id;

  button.onclick = function (buttonPress) {
    // console.log(button); 总是最后一个
    //  console.log(buttonPress.target.id)
    button2 = buttonPress['target'];
    //获取button的前面一个元素img
    console.log(button2.previousSibling);
    var img2 = button2.previousSibling;
    // console.log(buttonPress.target.previousSbiling+"我是你爹");

    var key = button2['id'];
    console.log(key);

    var x = prompt("给我一个网址");
    hash[key] = x;  // 变更 ，存档

    img2.src = 'http://' + x + '/favicon.ico'; //更改图标
    //可能还会有不能访问的图片，所以我们需要监听
    img2.onerror = function (error) {
      // console.log("请求图片失败");
      error.target.src = 'https://cdn.mdn.mozilla.net/static/img/favicon.78cc2f51b652.ico';
    }
    localStorage.setItem('zzz', JSON.stringify(hash));
    // console.log(hash);
  }
  return button;
}


function createImg(domain) {

  //添加图标
  var img = tag('img');
  if (domain) {
    img.src = 'http://' + domain + '/favicon.ico';
  } else {
    img.src = 'https://cdn.mdn.mozilla.net/static/img/favicon.78cc2f51b652.ico';
  }
  //监听错误事件
  img.onerror = function (error) {
    // console.log("请求图片失败");
    error.target.src = 'https://cdn.mdn.mozilla.net/static/img/favicon.78cc2f51b652.ico';
  }
  return img;
}

function init(keys,hash) {
  var keys = {
    0: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    1: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
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
  var hashLocalStorage = getFromLocalStorage('zzz');
//
  if (hashLocalStorage) {
    hash = hashLocalStorage;
  }
  return{
    "keys":keys,
    "hash":hash
  }
}

function generateKeyboard(keys,hash) {
  for (var index = 0; index < keys['length']; index++) {
    var div1 = tag('div');
    div1.className = 'row';
    main.appendChild(div1);
    var row = keys[index]  //第一个数组 第二个数组 第三个数组
    // console.log(row);
    for (var index2 = 0; index2 < row.length; index2++) { //0-9 0-8 --6
      var span = createSpan(row[index2]);
      var button = createButton(row[index2]);
      var img = createImg(hash[row[index2]]);


      var kbd = tag('kbd');
      kbd.className = 'key';
      kbd.appendChild(span);
      kbd.appendChild(img);
      kbd.appendChild(button);
      div1.appendChild(kbd);
    }
  }

}

function listenToKeyboard(hash) {
  document.onkeypress = function (pressKey) {
    console.log(pressKey['key']);
    var key = pressKey['key'];
    var website = hash[key];
    console.log(website);
    // location.href='http://'+website,'_blank' 当前页面打开
    window.open('http://' + website, '_blank'); //新开页面打开
  }
}