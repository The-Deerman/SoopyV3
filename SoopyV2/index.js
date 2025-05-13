import NonPooledThread from "./utils/nonPooledThread.js";

if (net.fabricmc.loader.api.FabricLoader.getInstance().isModLoaded("soopyv3fabric")) {
    new NonPooledThread(() => {
        while (!Java.type("me.the_deerman.soopyv3fabric.SoopyV3Fabric").INSTANCE) {
            Thread.sleep(1000);
        }
        Java.type("me.the_deerman.soopyv3fabric.SoopyV3Fabric").INSTANCE.soopyIsInstalled();
    }).start();
}

class SoopyAddons {
    constructor() {
        this.FeatureManager = require("./featureClass/featureManager.js");
        this.FeatureManager.parent = this;
    }
}

let a = register("worldLoad", () => {
    new SoopyAddons;
    a.unregister();
});