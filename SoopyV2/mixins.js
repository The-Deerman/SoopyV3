// mixins.js

const chatHudMixin = new Mixin('net.minecraft.client.gui.hud.ChatHud');

export const chatHud_modifyChatOffset = chatHudMixin.modifyConstant({
    method: 'render',
    constant: new Constant({
        floatValue: 4,
        ordinal: 0,
    }),
});