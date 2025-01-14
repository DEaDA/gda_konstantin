import {Application, Container, Graphics, Point, Sprite} from "pixi.js";
import MyScale from "../../utils/MyScale";
import CustomTextures from "../../utils/CustomTextures";
import Config from "../../config/Config";
import {Logo} from "./ui/Logo";
import {MainModel} from "../model/MainModel";
import {SceneCards} from "./scene_1/SceneCards";
import MyTextureGenerator from "../../utils/MyTextureGenerator";
import {Menu} from "./ui/Menu";
import {Button} from "./ui/Button";
import {SceneWords} from "./scene_2/SceneWords";
import {SceneFire} from "./scene_3/SceneFire";

export class MainView extends Container {

    onRescale: Function;
    updatePool: any[] = [];

    constructor(app: Application) {
        super();

        app.stage.addChild(this);

        MyScale.setup(this, {
            scaleLandscape: 1,
            scalePortrait: 1,
            onRescale: () => {
            }
        })

        const scenes: Container[] = [];

        const cards: SceneCards = new SceneCards(app);
        this.addChild(cards);

        const words: SceneWords = new SceneWords(app);
        this.addChild(words);

        const fire: SceneFire = new SceneFire(app);
        this.addChild(fire);
        this.updatePool.push(fire);

        scenes.push(cards, words, fire)

        const disableScenes = () => {
            scenes.forEach((scene) => {
                scene.visible = false
            })
        }
        const showScene = (id: number) => {
            disableScenes();
            scenes[id].visible = true;
        }
        disableScenes();
        showScene(0);

        const menu: Menu = new Menu(app);
        menu.setup([
            {label: 'Ace of Shadows', callback: showScene},
            {label: 'Magic Words', callback: showScene},
            {label: 'Phoenix Flame', callback: showScene}
        ])
    }

    update() {
        this.updatePool.forEach((obj) => {
            obj.update()
        })
    }
}
