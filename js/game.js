(function (w) {
    function Game(map) {
        this.map = map;
        this.Bazi = new Bazi();
    }
    w.Game = Game;
    Game.prototype.start = function () {
        this.Bazi.show(this.map)
        for (var i = 0; i < this.map.children.length; i++) {
            this.map.children[i].onclick = function (e) {
                this.children[0].style.transform = 'rotateX(90deg)'
            }
        }
    }
}(window))