console.log(navigator.userAgent)
var pc = document.getElementById("pc")
var apps = document.getElementById("apps")
var apps_small = document.getElementById("apps-small")
var apps_six = document.getElementById("apps-six")
var mask = document.getElementById("mask")
var mask_se = document.getElementById("mask-se")
var mask_six = document.getElementById("mask-six")
// 判断PC端还是移动端
function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone",
    "SymbianOS", "Windows Phone",
    "iPad", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
// 判断是移动设备还是PC端
// 根据相应设备，显示不同内容 
if (IsPC()) {
  // 删除节点
  apps.remove();
  apps_small.remove();
  apps_six.remove();
  pc.style.display = "block"
} else {
  pc.remove();
  if (screen.height > 700) {
    apps.style.display = "block"
  }else if(screen.height > 660 && screen.height < 700){
    apps_six.style.display = "block"
  }else {
    apps_small.style.display = "block"
  }

}

// //  判断用户移动端使用的系统平台
// var u = navigator.userAgent;
// if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
//     //安卓手机
// } else if (u.indexOf('iPhone') > -1) {
//      //苹果手机
// } else if (u.indexOf('Windows Phone') > -1) {
//     //winphone手机
// }

// 判断是否为微信中打开
function isWeiXin() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('micromessenger') != -1) {
    return true;
  } else {
    return false;
  }
}
// 如果是微信打开则显示蒙层
if (isWeiXin()) {
  if (screen.height > 680) {
    mask.style.display = "block"
  } else {
    mask_se.style.display = "block"
  }

}

// function a() {
//   alert("屏幕宽高为：" + screen.width + "*" + screen.height)
//   console.log(screen.height)
//   console.log(window.screen.width * window.devicePixelRatio)
//   if (screen.height > 639) {
//     console.log(1)
//   }
// }
// a()