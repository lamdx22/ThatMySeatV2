

cc.Class({
    extends: cc.Component,

    properties: {
        richText: cc.RichText,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.clickableRegions = [];
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    },

    start () {
        this.parseClickableTags();
    },

    parseClickableTags() {
        const str = this.richText.string;
        const regex = /<on click="(.*?)">([\s\S]*?)<\/on>/g;
        let match;
        this.clickableRegions = [];

        let cleanText = str; // để gán lại text hiển thị
        while ((match = regex.exec(str))) {
            const name = match[1];
            const inner = match[2];
            this.clickableRegions.push({
                name: name,
                inner: inner,
                range: null, // lát nữa ta xác định vùng hiển thị
            });
        }

        // Loại bỏ tag <on> ... </on> để hiển thị bình thường
        cleanText = cleanText.replace(/<\/?on.*?>/g, '');
        this.richText.string = cleanText;

        this.scheduleOnce(() => this.markClickableWords(), 0.05);
    },

    markClickableWords() {
        // Duyệt từng child label mà cc.RichText đã render
        const children = this.richText.node.children;
        children.forEach(labelNode => {
            const label = labelNode.getComponent(cc.Label);
            if (!label) return;

            const text = label.string;
            this.clickableRegions.forEach(region => {
                if (text.includes(region.inner.replace(/<.*?>/g, ''))) {
                    // xác định vị trí vùng click trong world space
                    region.range = labelNode.getBoundingBoxToWorld();
                }
            });
        });
    },

    // onTouchEnd(event) {
    //     const touchPos = event.getLocation();

    //     for (let region of this.clickableRegions) {
    //         if (region.range && region.range.contains(touchPos)) {
    //             cc.log('Clicked name:', region.name);
    //             // 👉 Ở đây bạn có thể gọi hàm khác, ví dụ:
    //             // GameManager.instance.showCharacterProfile(region.name);
    //             return;
    //         }
    //     }
    // },

    onTouchEnd(event) {
        TouchController.instance.touchCount++;
        if (TouchController.instance.touchCount == 2) {
            GameManager.instance.showButtonDownload();
        }
        const touchPosWorld = event.getLocation();

        // tìm scrollView chứa RichText (nếu có)
        let scrollView = null;
        let parent = this.node.parent;
        while (parent && !scrollView) {
            scrollView = parent.getComponent(cc.ScrollView);
            parent = parent.parent;
        }

        // lấy toạ độ click trong local space của content
        let localTouchPos = touchPosWorld;
        if (scrollView) {
            localTouchPos = scrollView.content.convertToNodeSpaceAR(touchPosWorld);
        }

        // lấy toàn bộ label con hiện tại của RichText
        const children = this.richText.node.children;

        // duyệt từng region trong clickableRegions
        for (let region of this.clickableRegions) {
            // duyệt tất cả label để tìm label chứa đoạn text đó
            for (let labelNode of children) {
                const label = labelNode.getComponent(cc.Label);
                if (!label) continue;

                const labelText = label.string.replace(/<.*?>/g, '');
                if (!labelText.includes(region.inner.replace(/<.*?>/g, ''))) continue;

                // bounding box mới nhất của label trong content
                let rectWorld = labelNode.getBoundingBoxToWorld();
                let rectLocal = rectWorld;

                if (scrollView) {
                    const topLeft = scrollView.content.convertToNodeSpaceAR(rectWorld.origin);
                    rectLocal = new cc.Rect(topLeft.x, topLeft.y, rectWorld.width, rectWorld.height);
                }

                if (rectLocal.contains(localTouchPos)) {
                    //cc.log("Clicked name:", region.name);
                    BarControl.instance.focusChar(region.name);
                    return;
                }
            }
        }
    }


});
