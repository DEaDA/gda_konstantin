import MyScale from "../../../utils/MyScale";
import {Application, Container, Graphics, Sprite, Text, TextStyle, Texture} from "pixi.js";
import CustomTextures from "../../../utils/CustomTextures";
import Config from "../../../config/Config";
import MyTextureGenerator from "../../../utils/MyTextureGenerator";

export class SceneWords extends Container {

    constructor(app: Application) {

        super();

        const words = [
            "lorem", "ipsum", "dolor", "sit", "amet", "consectetur",
            "adipiscing", "elit", "sed", "do", "eiusmod", "tempor",
            "incididunt", "ut", "labore", "et", "dolore", "magna",
            "aliqua", "ut", "enim", "ad", "minim", "veniam"
        ];
        let set = Config.colorsSet;

        let currentImage: Container = null;

        const draw = () => {
            if (currentImage != null) {
                let list: any[] = currentImage.removeChildren()
                list.forEach((item: any) => {
                    item.destroy
                })
            }


            const s = set[Math.floor(Math.random() * set.length)]
            let c: Container = new Container();
            const style = new TextStyle({
                fontFamily: 'Inter',
                fontSize: 20 + Math.random() * 50,
                fill: s[Math.floor(Math.random() * s.length)],
                wordWrap: Math.random() > 0.5 ? true : false,
                wordWrapWidth: Math.random() * 440,
                dropShadow: Math.random() > 0.5 ? true : false,
                dropShadowColor: s[Math.floor(Math.random() * s.length)],
                align: Math.random() > 0.5 ? "center" : "left",
                dropShadowAngle: Math.random() * Math.PI / 180,

            });
            let basicText: any = new Text('test', style);
            basicText.anchor.set(0.5);
            let randomIndex = Math.floor(Math.random() * words.length);
            basicText.text = words[randomIndex]
            basicText.x = Math.floor(Math.random() * 100)
            basicText.y = Math.floor(Math.random() * 100)

            let id: number = Math.floor(Math.random() * 143);
            const img = new Sprite(CustomTextures.textures['shape' + id])
            img.anchor.set(0.5);
            c.addChild(img)
            c.addChild(basicText);
            this.addChild(c)
            currentImage = c;

        }

        draw();
        const timerId = setInterval(() => {
            draw();
        }, 2000);
    }
}