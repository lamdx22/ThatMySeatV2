cc.Class({
    extends: cc.Component,

    properties: {
        charData: 0,
    },
    start () {
        this.canSelect = true;
        this.ava = this.node.children[0];
        let label = this.ava.children[0].children[0].getComponent(cc.Label);
        label.string = this.ava.getComponent(cc.Sprite).spriteFrame._name;
        // cc.log(label.string);
    },
    // update (dt) {},
});
