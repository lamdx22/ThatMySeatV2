cc.Class({
    extends: cc.Component,

    properties: {
        container: cc.Node,
        slots: [cc.Node],
        starPar: cc.Prefab,
        faceCry: cc.Prefab,
        faceHappy: cc.Prefab,
        hintRegion: cc.Node,          
        touchController: cc.Node,
        content: cc.Node,
    },

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    },

    start() {
        this.isDragging = false; 
        this.startGame = false;
        this.startDrag = false;
        this.hasContainer = false;
        this.startPos = cc.v2(0, 0);
        this.avaStartPos = cc.v2(0, 0);
        this.ava = null;
        this.movedFirstTime = false;   
        this.dragChar = true;
        this.touchCount = 0;
    },

    onTouchStart(event) {
        this.touchCount++;
        let touchPos = event.getLocation();
        this.isDragging = true;
        this.movedFirstTime = false; // reset flag
        let box = this.container.getBoundingBoxToWorld();
        if(box.contains(touchPos)) {
            this.hasContainer = true;
        }
        for (let child of this.container.children) {
            let box = child.children[0].getBoundingBoxToWorld();
            let charScript = child.getComponent("FrameItem");
            if (box.contains(touchPos) && charScript.canSelect) {
                if(BarControl.instance.tutBox && charScript.charData != 3){
                    BarControl.instance.completeTutor();
                }
                this.ava = child.children[0];
                this.startPos = this.node.convertToNodeSpaceAR(touchPos); 
                this.avaStartPos = this.ava.position;
            }
        }
    },

    onTouchMove(event) {
        if (!this.isDragging || !this.hasContainer) return;

        let currentPos = this.node.convertToNodeSpaceAR(event.getLocation()); 
        let delta = currentPos.sub(this.startPos); 

        
        if (!this.movedFirstTime) { 
            this.movedFirstTime = true;
            // if (Math.abs(delta.y) * 40 > Math.abs(delta.x)) 
            //     this.dragChar = true;
            // else this.dragChar = false;
        }
        this.dragChar = true;
        
        if(this.dragChar && this.ava){
            this.ava.setPosition(this.avaStartPos.add(delta.add(cc.v2(0, 150))));
            if (!this.startDrag) {
                this.startDrag = true;
                AudioEngine.instance.playSfx(2);
            }
        } else {
            // let contentWidth = this.content.width;
            // let screenWidth = cc.winSize.width;

            // if (contentWidth <= screenWidth) {
            //     this.content.x = 0;
            // } else {
            //     let newPosX = this.content.x + delta.x;

            //     let halfContent = contentWidth / 2;
            //     let halfScreen = screenWidth / 2;

            //     let minX = halfScreen - halfContent;
            //     let maxX = halfContent - halfScreen;

            //     newPosX = Math.min(Math.max(newPosX, minX), maxX);

            //     this.content.x = newPosX;
            // }
            // this.startPos = currentPos;
        }
        
    },

    onTouchEnd(event) {
        if (this.touchCount == 2) {
            GameManager.instance.showButtonDownload();
        }

        if (!this.isDragging || !this.ava || !this.dragChar || !this.startDrag) return;

        this.isDragging = false;
        this.startDrag = false;
        this.movedFirstTime = false; 
        this.hasContainer = false;

        let charScript = this.ava.parent.getComponent("FrameItem");
        let check = 0;
        for (let child of this.slots) {
            let slotScript = child.getComponent("SlotEmpty");
            if (slotScript.ava && slotScript.ava.active) {
                if (slotScript.dataMatch == charScript.charData) {
                    this.playMatch(child);
                    check = 1;
                } else {
                    this.playWrong(child);
                }
                break;
            }
        }
        if (check == 0) {
            AudioEngine.instance.playSfx(3);
            
            let ava = this.ava;
            let charScript = this.ava.parent.getComponent("FrameItem");
            charScript.canSelect = false;
            cc.tween(ava).to(0.3, {position: this.avaStartPos})
                .call(() => charScript.canSelect = true).start();
        }
        this.ava = null;
        this.startPos = this.avaStartPos = cc.v2(0, 0);
    },

    playMatch(child) {
        AudioEngine.instance.playSfx(1);

        let char = this.ava.parent;
        char.parent = child;
        this.ava.position = cc.v2(0, 45);
        char.position = cc.v2(0, 0);
        char.getComponent(cc.Sprite).enabled = false;
        //child.getComponent(cc.Sprite).enabled = false;
        child.getComponent(cc.Collider).enabled = false;
        
        let slotScript = child.getComponent("SlotEmpty");
        HintSentences.instance.updateQuests(slotScript.dataMatch);
        BarControl.instance.adjustCharacterBar();
        let star = cc.instantiate(this.starPar);
        star.parent = child;
        this.scheduleOnce(() => star.destroy(), 0.8);

        let face = cc.instantiate(this.faceHappy);
        face.parent = child;
        face.position = cc.v2(0, 80);

        if(BarControl.instance.tutBox){
            BarControl.instance.completeTutor();
        }
    },

    playWrong(child) {
        AudioEngine.instance.playSfx(4);
        let worldPos = child.convertToWorldSpaceAR(cc.v2(0, 0));
        GameManager.instance.WrongPos(worldPos);
        let face = cc.instantiate(this.faceCry);
        face.parent = child;
        face.position = cc.v2(0, 80);
        //face.opacity = 0;
        // cc.tween(face).to(0.2, {opacity: 255}).delay(1)
        //     .to(0.5, {opacity: 0}).call(() => {
        //         face.destroy();
        //     }).start();
    }
});
