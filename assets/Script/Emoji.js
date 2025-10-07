cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    
        cc.tween(this.node)
            .to(0.12, { scale: 0.6, angle: 15 })
            .to(0.12, { scale: 0.5, angle: -15 })
            .to(0.12, { scale: 0.6, angle: 15 })
            .to(0.12, { scale: 0.5, angle: 0 })
            //.delay(0.1)
            .to(0.1, { opacity: 0})
            .call(() => {
                this.node.destroy();
            })
            .start();
    },

    start () {

    },

    // update (dt) {},
});
