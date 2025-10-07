cc.Class({
    extends: cc.Component,

    properties: {
        dataMatch: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.ava = this.node.children[0];
    },
    onCollisionEnter(other, self) {
        if (other.node.group == "Character") {
            this.ava.active = true;
            this.ava.getComponent(cc.Sprite).spriteFrame = other.node.getComponent(cc.Sprite).spriteFrame;
        }
    },
    onCollisionExit(other, self) {
        this.ava.active = false;
    }
});
