/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />

const BeaconBlockEntityRenderer = Java.type("net.minecraft.client.render.block.entity.BeaconBlockEntityRenderer")
const Identifier = Java.type("net.minecraft.util.Identifier")
const beaconBeamIdentifier = new Identifier("textures/entity/beacon_beam.png")

const vcp = Client.getMinecraft().getBufferBuilders().getEntityVertexConsumers()


export default renderBeaconBeam = function(xPos, yPos, zPos, r, g, b, a, height=300, depthCheck=true){
    if(!depthCheck){ GL11.glDisable(GL11.GL_DEPTH_TEST); }
    Renderer.translate(xPos, yPos, zPos)
    Renderer.translate(-Client.camera.getX(), -Client.camera.getY()+1.6200000047683716+0.38, -Client.camera.getZ())

    BeaconBlockEntityRenderer.renderBeam(
        Renderer.matrixStack.toMC(), 
        vcp, 
        beaconBeamIdentifier, 
        Client.getMinecraft().getTickDelta(), 
        1, 
        World.getTime(), 
        0, 
        height, 
        [r,g,b], 
        0.2, 
        0.25
    )
    if(!depthCheck){ GL11.glEnable(GL11.GL_DEPTH_TEST); }
    
}
