(function (w) {
    //创建靶子,width
    function Bazi(width) {
        this.width = width || 100;
        this.x = 0;
        this.y = 0;
    }
    w.Bazi = Bazi;
    //创建靶子原型,
    Bazi.prototype.show = function (map) {
        var div = document.createElement('div');
        div.style.position = 'absolute';
        var num = Math.ceil(Math.random() * 5)
        var w = parseInt(Math.random() * 130)
        this.width = w < 50 ? 50 : w
        var x = parseInt(Math.random() * (map.offsetWidth - this.width));
        var y = parseInt(Math.random() * 300);
        div.className = 'transition'
        div.innerHTML = '<img src="./images/bz' + num + '.png" >'
        div.style.left = x + 'px'
        div.style.bottom = y + 'px'
        div.style.width = this.width + 'px';
        map.appendChild(div);
    }
    //设置
}(window))