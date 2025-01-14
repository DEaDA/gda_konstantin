import MyScale from "../../../utils/MyScale";
import {Application, Container, Graphics, Sprite} from "pixi.js";
import CustomTextures from "../../../utils/CustomTextures";
import {BaseCard} from "./BaseCard";
import Config from "../../../config/Config";

export class SceneCards extends Container {

    constructor(app: Application) {

        super();

        let cards: BaseCard[] = [];
        let stack: BaseCard[] = [];
        for (let i = 0; i < 144; i++) {
            let card = new BaseCard(app);
            card.x = -300;
            cards.push(card);
            this.addChild(card);
            card.y -= i * 2;
        }

        cards.reverse();

        const timerId = setInterval(() => {
            if (cards.length != 0) {
                let c: BaseCard = cards.shift()
                stack.push(c);
                this.addChild(c);

                gsap.to(c, {
                    duration: 2,
                    x: 300,
                    y: -stack.length * 2,
                    ease: "sine.inOut",
                    onComplete: () => {
                    }
                });
            }
        }, 1000);
    }
}