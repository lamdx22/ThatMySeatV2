import CONFIG from "Config";
const GameManager = cc.Class({
    extends: cc.Component,

    properties: {
        audioManager: cc.Node,
        endCard: cc.Node,
        // canvas: cc.Node,
        healthBar: cc.Node,
        // tutBox: cc.Node,
        touchController: cc.Node,
        xred: cc.Prefab,
        winMessage: cc.SpriteFrame,
    },

    statics: {
        instance: null,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad(){
        if(!GameManager.instance)
            GameManager.instance = this;      
        CONFIG.onGameReady();
        this.audioEngineScript = this.audioManager.getComponent("AudioEngine");
        var self = this;
        cc.game.on(cc.game.EVENT_HIDE, function () {
            self.audioEngineScript.muteAudio();
        });
        cc.game.on(cc.game.EVENT_SHOW, function () {
            if (CONFIG.isPlaySound)
                self.audioEngineScript.unmuteAudio();
        });
        self.audioEngineScript.playBackground();
        cc.director.getCollisionManager().enabled = true;
    },
    start() {
        this.health = 3;

        this.firstTouch = false;
        this.doneTutor = false;
        this.message = this.endCard.getChildByName("message");
        this.icon = this.endCard.getChildByName("icon");
        // this.winGame();
        // let originPos = this.tutBox.position;
        // cc.tween(this.tutBox).repeatForever(
        //     cc.tween(this.tutBox).to(0.5, {position: originPos.add(cc.v2(-25, 25))})
        //         .to(0.5, {position: originPos})
        // ).start();
    },

    WrongPos(worldPos){
        this.health--;
        let xred = cc.instantiate(this.xred);
        xred.parent = this.healthBar.children[this.health];
        xred.position = xred.parent.convertToNodeSpaceAR(worldPos);
        cc.tween(xred).to(0.8, {position: cc.v2(0, 0)}).call(() =>
        {
            if(this.health == 0) this.scheduleOnce(this.showEndCard, 0.5);
        }).start();
    },
    resetTimer() {
        if (this._tutorialCallback) {
            this.unschedule(this._tutorialCallback);
        }
        this._tutorialCallback = function() {
            if(!this.endCard.active)
                this.onGoToStore();
        }.bind(this);
        this.scheduleOnce(this._tutorialCallback, 15);
    },

    winGame(){
        this.message.getComponent(cc.Sprite).spriteFrame = this.winMessage;
        // this.icon.getComponent(cc.Sprite).spriteFrame = this.winIcon;
        this.showEndCard();
    },

    showEndCard(){
        this.scheduleOnce(this.onGoToStore, 0);
        this.endCard.active = true;
        cc.tween(this.message).to(0.5, {scale: 1}).delay(0.2).call(() => {
            cc.tween(this.icon).to(0.5, {opacity: 255})
            .call(() => {
                cc.tween(this.icon).repeatForever(
                    cc.tween(this.icon)
                    .to(0.3, { scale: 1.1 })  
                    .to(0.3, { scale: 1.0 })  
                ).start();
            }).start();
        }).start();
    },

    onGoToStore(){
        CONFIG.onEndGame();
        CONFIG.openLinkApp();
    },
    // update (dt) {},
});
window.GameManager = GameManager;