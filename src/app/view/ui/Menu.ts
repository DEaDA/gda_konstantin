import MyScale from "../../../utils/MyScale";
import {Application, Container, Sprite} from "pixi.js";
import CustomTextures from "../../../utils/CustomTextures";
import {Button} from "./Button";

export class Menu extends Container {

    setup: Function;

    constructor(app: Application) {
        super();
        app.stage.addChild(this);
        MyScale.setup(this, {
            scalePortrait: 1,
            scaleLandscape: 1,
            bottom: 100,
            onRescale: () => {
            }
        });
        this.setup = (data: any) => {
            for (let i = 0; i < data.length; i++) {
                let btn: Button = new Button(app);
                btn.setup(data[i])
                btn.id = i;
                btn.x = -340 + i * 340;
                this.addChild(btn);
            }
        }
    }
}