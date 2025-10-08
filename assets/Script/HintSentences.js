import CONFIG from "./Config";
import Language from "./Language";
const HintSentences = cc.Class({
    extends: cc.Component,

    properties: {
        questPrefab: cc.Prefab,
        listQuest: cc.Node,
        tutBox: cc.Node,
    },
    statics: {
        instance: null,
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        HintSentences.instance = this;
        Language.language = CONFIG.language;
    },

    start () {
        this.firstTouch = true;
        this.allQuests = []
        this.container = this.node.children[0];
        for(let i = 0; i < 6; i++){
            this.allQuests.push(this.spawnQuest(i));
        }
        this.showAllQuest();
        this.listQuest.height = -this.allQuests[this.allQuests.length - 1].y + 450;
        this.container.height = -this.allQuests[this.allQuests.length - 1].y + 200;
        this.node.sortAllChildren();
    },

    spawnQuest(index) { 
        let quest = cc.instantiate(this.questPrefab);
        quest.parent = this.container;
        let questScript = quest.getComponent("QuestItem");
        switch (index) {
            case 0:
                questScript.dataMatch = 0;
                //questScript.questLabel.string = Language.getThomasText();
                questScript.setQuestText(Language.getThomasText());
                //this.tutBox.parent = quest;
                this.tutBox.position = cc.v2(25,-100);
                cc.tween(this.tutBox).repeatForever(
                    cc.tween(this.tutBox).to(0.5, {position: cc.v2(0, -75)})
                        .to(0.5, {position: cc.v2(25,-100)})
                ).start();
                break;
            case 1:
                questScript.dataMatch = 1;
                //questScript.questLabel.string = Language.getMasonText();
                questScript.setQuestText(Language.getMasonText());
                break;
            case 2:
                questScript.dataMatch = 2;
                //questScript.questLabel.string = Language.getDianeText();
                questScript.setQuestText(Language.getDianeText());
                break;
            case 3:
                questScript.dataMatch = 3;
                //questScript.questLabel.string = Language.getGregoryText();
                questScript.setQuestText(Language.getGregoryText());
                break;
            case 4:
                questScript.dataMatch = 4;
                //questScript.questLabel.string = Language.getKathleenText();
                questScript.setQuestText(Language.getKathleenText());
                break;
            case 5:
                questScript.dataMatch = 5;
                //questScript.questLabel.string = Language.getLiamText();
                questScript.setQuestText(Language.getLiamText());
                break;
            case 6:
                //questScript.dataMatch = 6;
                //questScript.questLabel.string = Language.getHermioneText();
                break; 
        }
        quest.height = questScript.questLabel.node.height + 55;
        return quest;
    },

    showAllQuest(){
        this.allQuests[0].y = -20;
        for(let i = 1; i < this.allQuests.length; i++){
            this.allQuests[i].y = this.allQuests[i-1].y - this.allQuests[i-1].height - 15;
        }
    },
    updateQuests(dataMatch){
        for(let i = 0; i < this.allQuests.length; i++){
            let questScript = this.allQuests[i].getComponent("QuestItem");
            if(questScript.dataMatch == dataMatch)
            {
                let doneQuest = this.allQuests.splice(i, 1)[0];
                this.allQuests.push(doneQuest);
                this.showAllQuest();
                questScript.iconTick.active = true;
                break;
            }
        }
    },
    // update (dt) {},
});
window.HintSentences = HintSentences;