import CONFIG from "Config";
var AudioEngine = cc.Class({
    extends: cc.Component,

    properties: {
        audio: {
            default: [],
            type: [cc.AudioClip]
        }
    },

    statics: {
        instance: null,
    },

    onLoad: function () {
        if(!AudioEngine.instance)
            AudioEngine.instance = this;
        if (this.currentAudio == null) {
            this.currentAudio = new Array(this.audio.length);
        }
        // cc.game.addPersistRootNode(this.node);
    },

    playBackground() {
        this.volumeBG = 0.3;
        if (this.currentAudio == null) {
            this.currentAudio = new Array(this.audio.length);
        }
        if (this.currentAudio[0] !== undefined) {
            cc.audioEngine.stop(this.currentAudio[0]);
            this.currentAudio[0] = null;
        }
        if (CONFIG.PlayableAdsType == CONFIG.IronSource) {
            this.isStarted = true;
            if (typeof (window.playAudioThepn) !== 'undefined') {
                if (window.playAudioThepn) {
                    this.currentAudio[0] = cc.audioEngine.play(this.audio[0], true, this.volumeBG);
                    CONFIG.isPlaySound = true;
                } else {
                    this.currentAudio[0] = cc.audioEngine.play(this.audio[0], true, 0);
                }
                this.playAudioThepn = window.playAudioThepn;
            }
        } else {
            if (CONFIG.isPlaySound) {
                this.currentAudio[0] = cc.audioEngine.play(this.audio[0], true, this.volumeBG);
            }
        }
    },
    playSfx(num) {
        
        if (CONFIG.isPlaySound) {
            this.currentAudio[num] = cc.audioEngine.play(this.audio[num], false, 1);
        }
    },
    stopMusicIntro(){
        cc.audioEngine.stop(this.currentAudio[13]);
    },
    muteIS() {
        console.log("mute");
        CONFIG.isPlaySound = false;
        cc.audioEngine.stop(this.currentAudio[0]);
    },
    unMuteIS() {
        console.log("unmute");
        CONFIG.isPlaySound = true;
        try {
            cc.audioEngine.stop(this.currentAudio[0]);
        } catch (error) {
        }
        this.currentAudio[0] = cc.audioEngine.play(this.audio[0], true, this.volumeBG);
    },
    muteAudio() {
        if (CONFIG.PlayableAdsType === CONFIG.Adcolony) {
            cc.audioEngine.stop(this.currentAudio[0]);
        } else {
            cc.audioEngine.setVolume(this.currentAudio[0], 0);
        }
    },

    unmuteAudio() {
        if (CONFIG.isPlaySound)
            if (CONFIG.PlayableAdsType === CONFIG.Adcolony) {
                cc.audioEngine.stop(this.currentAudio[0]);
                this.currentAudio[0] = cc.audioEngine.play(this.audio[0], true, this.volumeBG);
            } else {
                cc.audioEngine.setVolume(this.currentAudio[0], this.volumeBG);
            }
    },

    onDestroy: function () {
        for (var i = 0; i < this.currentAudio.length; i++) {
            cc.audioEngine.stop(this.currentAudio[i]);
        }
    }
});
window.AudioEngine = AudioEngine;