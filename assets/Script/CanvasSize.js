const CanvasSize = cc.Class({
    extends: cc.Component,
    properties:{
        // endcard: cc.Node,
    },
    statics:{
        instance: null,
    },
    start() {
        if(!CanvasSize.instance) CanvasSize.instance = this;
        this.canvas = this.getComponent(cc.Canvas);
        this.adjustCanvasSize();
        cc.view.setResizeCallback(() => {
            this.adjustCanvasSize();
        });
    },

    adjustCanvasSize() {
        if (!this.canvas) {
            cc.warn('Canvas component not found!');
            return;
        }

        const designResolution = cc.view.getDesignResolutionSize();
        const frameSize = cc.view.getFrameSize();

        const designAspectRatio = designResolution.width / designResolution.height;
        const frameAspectRatio = frameSize.width / frameSize.height;

        if (frameAspectRatio > designAspectRatio) {
            this.canvas.fitHeight = true;
            this.canvas.fitWidth = false;
        } else {
            this.canvas.fitWidth = true;
            this.canvas.fitHeight = false;
        }
    },
});
window.CanvasSize = CanvasSize;