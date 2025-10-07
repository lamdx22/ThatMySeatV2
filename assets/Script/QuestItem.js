cc.Class({
    extends: cc.Component,

    properties: {
        dataMatch: 0,
        questLabel: cc.RichText,
        iconTick: cc.Node,
        hint: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        // this.questLabel._touchEnabled = true;
        // this.questLabel.node.on('click-link', this.onNameClick, this);
    },

    start () {
        this.node.height = this.questLabel.node.height + 55;
    },

    onTouchEnd(){
        if(HintSentences.instance.firstTouch && this.dataMatch == 0){
            HintSentences.instance.firstTouch = false;
            HintSentences.instance.tutBox.active = false;
            this.hint.active = true;
            cc.tween(this.hint).delay(0.2).to(1.5, {x: -this.hint.x}).delay(0.2).call(() =>
            {
                this.hint.active = false;
                this.hint.x = -this.hint.x;
                BarControl.instance.nextTutorial(this.dataMatch);
            }).start();
        }
        else{
            BarControl.instance.focusChar(this.dataMatch);
        }
    },

    // onNameClick(event, name) {
    //     console.log('Clicked name:', name);
    // }
    // update (dt) {},
});
