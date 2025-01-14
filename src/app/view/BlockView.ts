import {Application, Container, Sprite, Text, TextStyle} from "pixi.js";

export class BlockView extends Container {

    vid: number;
    debug: Function;
    clean: Function;

    constructor(app: Application) {
        super();
        app.stage.addChild(this);
        this.clean = () => {
        }
        /* gsap.to(obj.scale, {
             duration: 0.3, // продолжительность анимации в секундах
             x: 1,
             y: 1,
             ease: "sine.in",
         });*/

        this.debug = (value: number) => {
        }

        this.render = () => {
        }
    }
}