/**
 * 获得上一个兄弟元素的封装
 */
function getPrevElement(ele) {
    var node = ele.previousSibling;
    while (node != null && node.nodeType != 1) {
        node = node.previousSibling;
    }
    //出循环的时候就代表你是标签了
    // console.log(node);
    return node;
}


/**
 * 获得下一个兄弟元素
 */
function getNextElement(ele) {

    var node = ele.nextSibling;
    while (node != null && node.nodeType != 1) {

        node = node.nextSibling;
    }

   return node;
}


/**
 * 移动动画函数
 */
function animate(obj, attrs) {

    // 每次先停止上一个计时器
    clearInterval(obj.timerID);
    obj.timerID = setInterval(function () {
        for(var key in attrs)
        // 获得它当前位置
        var current = parseInt(getStyle(obj,key));
        var target = attrs[key];

        // 判断距离够不够走这一步，够走就走，不够就直接到
        if (Math.abs(target - current) > 10) {
            // 走一步
            current += target > current ? 10 : -10;
            // 赋值给left
            obj.style[key] = current + "px";
        } else {
            obj.style[key] = target + "px";
        }

        if (current == target) {

            clearInterval(obj.timerID);
        }
    }, 50);
}


/**
 * 获取元素的样式兼容写法
 * 参数1：获取样式的元素
 * 参数2：获取哪个样式属性
 */
function getStyle(obj,attr) {

    if (window.getComputedStyle) {

        var res = window.getComputedStyle(obj)[attr];
        return res;

    } else {

        var res = obj.currentStyle[attr];
        return res;

    }
}



/*缓动动画
  参数1：动作对象；
  参数2：目标方法；
  参数3：回调函数；
*/
function animateSlow(obj, attrs, callback) {
    clearInterval(obj.timerID);
    obj.timerID = setInterval(function () {
        var flag = true;
        for (var key in attrs) {
            if (key == 'opacity') {
                var num = 100;
                var current = parseFloat(getStyle(obj, key))*100
                var target = attrs[key]*100;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                obj.style[key] = current/100;
                if (current != target) {
                    flag = false;
                }
            } else {
                var current = parseInt(getStyle(obj, key))
                var target = attrs[key];
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                obj.style[key] = current + 'px';
                if (current != target) {
                    flag = false;
                }
            }
        }
        if (flag) {
            clearInterval(obj.timerID);
            if(callback instanceof Function){
                callback()
            }
        }
    }, 20)
}