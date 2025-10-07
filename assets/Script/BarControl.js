const BarControl = cc.Class({
    extends: cc.Component,

    properties: {
        tutBox: cc.Node,
        slotTutor: cc.Node,
    },
    statics: {
        instance: null,
    },
    onLoad() {
        if (!BarControl.instance) BarControl.instance = this;
    },

    start () {
    },

    adjustCharacterBar() {
        this.children = this.node.children;
        let size = (this.children.length-1) * 170 / 2;
        for (let i = 0; i < this.children.length; i++) {
            let child = this.children[i];
            cc.tween(child).to(0.5, {x: i*170 - size}).start();
        }
        if (this.children.length == 0) {
            GameManager.instance.winGame();
            // this.scheduleOnce(() => {
            //     GameManager.instance.winGame();
            // }, 0.5);
        }
    },

    nextTutorial(dataMatch){
        this.children = this.node.children;
        for (let i = 0; i < this.children.length; i++) {
            let child = this.children[i];
            let childScript = child.getComponent("FrameItem");
            if(childScript.charData == dataMatch && this.tutBox){
                this.tutBox.parent = child;
            }
        }
        if(this.tutBox && this.slotTutor.children.length == 1){
            this.tutBox.active = true;
            this.tutBox.children[0].active = true;
            let worldPos = this.slotTutor.convertToWorldSpaceAR(cc.v2(0, 0));
            let targetPos = this.tutBox.parent.convertToNodeSpaceAR(worldPos);
            let duration = targetPos.sub(cc.v2(0, 0)).mag() / 550;
            cc.tween(this.tutBox).repeatForever(
                cc.tween(this.tutBox).to(duration, {position: targetPos})
                    .delay(0.1)
                    .to(0, { position: cc.v2(0,0)})
                    //.delay(0.2)
                    //.to(0.1, {opacity: 255})
            ).start();
        }
    },
    focusChar(dataMatch){
        this.children = this.node.children;
        for (let i = 0; i < this.children.length; i++) {
            let child = this.children[i];
            let childScript = child.getComponent("FrameItem");
            if(childScript.charData == dataMatch){
                cc.tween(child).to(0.3, {scale: 1.2}).to(0.3, {scale: 1}).start();
                break;
            }
        }
    },
    completeTutor(){
        HintSentences.instance.firstTouch = false;
        cc.Tween.stopAllByTarget(this.tutBox);
        this.tutBox.active = false;
        this.tutBox = null;
    }
});
window.BarControl = BarControl;