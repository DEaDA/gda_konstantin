import MyScale from "../../../utils/MyScale";
import {Application, Container, Sprite, Texture} from "pixi.js";
import CustomTextures from "../../../utils/CustomTextures";
import MyTextureGenerator from "../../../utils/MyTextureGenerator";

export class BaseCard extends Container {

    constructor(app: Application) {
        super();
        const img = new Sprite(MyTextureGenerator.drawFractalRectangle(300, 600));
        img.anchor.set(0.5);
        this.addChild(img)
    }
}