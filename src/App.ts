import MyScale from "./utils/MyScale";
import {MainView} from "./app/view/MainView";
import {MainModel} from "./app/model/MainModel";
import {MainController} from "./app/controller/MainController";
import * as PIXI from "pixi.js";
import CustomTextures from "./utils/CustomTextures";
import TWEEN from "@tweenjs/tween.js";
import {Application, Assets} from "pixi.js";
import Config from "./config/Config";
import MyTextureGenerator from "./utils/MyTextureGenerator";

(async () => {

    const div = document.getElementById('canvas-game') as HTMLCanvasElement;
    const canvas = document.createElement('canvas');
    div.appendChild(canvas);
    const app = new PIXI.Application({
        resolution: Math.min(window.devicePixelRatio, 1),
        antialias: true,
        // autoDensity: true,
        width: 1920,
        height: 1080,
        // powerPreference: 'high-performance',
        backgroundColor: Config.colors.darkblue,
        view: canvas,
    });
    // app.ticker.minFPS = 60;
    // app.ticker.maxFPS = 60;

    //@ts-ignore
    MyScale.app = app;
    window.addEventListener('resize', MyScale.resize);
    const logo = await Assets.load({
        src: './assets/logo.png',
    });

    CustomTextures.textures.logo = logo;
    MyTextureGenerator.app = app;

    const view = new MainView(app);
    const model = new MainModel();
    const controller = new MainController();
    model.init(view);
    controller.init(model);

    app.ticker.add((time) => {
        view.update();
    });
    MyScale.resize();
})();
