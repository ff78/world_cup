// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        var anim = this.node.getComponent(cc.Animation);
        anim.play('in');
    },

    // update (dt) {},

    setupView: function(onlyKnow, tip) {
        var label_tip = this.node.getChildByName('img_bg').getChildByName('label_tip');
        var button_know = this.node.getChildByName('img_bg').getChildByName('button_know');
        var button_ok = this.node.getChildByName('img_bg').getChildByName('button_ok');
        var button_cancel = this.node.getChildByName('img_bg').getChildByName('button_cancel');
        
        label_tip.string = tip;
        button_know.visible = onlyKnow;
        button_ok.visible = !onlyKnow;
        button_cancel.visible = !onlyKnow;
    },

    clickClose: function() {
        var anim = this.node.getComponent(cc.Animation);
        anim.play('out');
    },

    endIn: function() {
        anim.stop('in');
    },

    endOut: function() {
        anim.stop('out');
        this.node.removeFromParent();
    },
});
