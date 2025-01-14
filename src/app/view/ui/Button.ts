import {Application, Container, Graphics, Point, Text, TextStyle} from "pixi.js";
import gsap from "gsap";
import Config from "../../../config/Config";
import * as PIXI from 'pixi.js';

export class Button extends Container {

    onClick: Function;
    onOver: Function;
    onOut: Function;
    setup: Function;
    id:number;

    constructor(app: Application) {
        super();

        let main = this;

        const back = new Graphics();
        back.beginFill(Config.colors.white);
        back.drawRoundedRect(-150, -50, 300, 100, 25)
        back.endFill();
        this.addChild(back);

        let icon = new Graphics();
        icon.beginFill(Config.colors.white, 1);
        icon.drawRoundedRect(-150, -50, 300, 100, 25)
        icon.endFill();
        this.addChild(icon);
        icon.interactive = true;


        const style = new TextStyle({
            fontFamily: 'Inter',
            fontSize: 35,
            fill: Config.colors.darkblue,
            wordWrap: false,
            wordWrapWidth: 440,
        });

        let basicText: any = new Text('test', style);
        basicText.anchor.set(0.5);
        icon.addChild(basicText);
        basicText.y = -3;

        this.setup = (data: any) => {
            basicText.text = data.label;
            main.onClick = ()=>{
                data.callback(main.id);
            }
        }

        icon.on('pointerdown', () => {
            if (main.onClick) main.onClick();
            icon.scale = new Point(1, 1);
            gsap.to(icon.scale, {
                x: 0.9,
                y: 0.9,
                duration: 0.2,
                ease: "sine.in",
                yoyo: true,
                repeat: 1,
            });

            back.scale.set(1)
            back.visible = true;
            back.alpha = 1;
            gsap.to(back.scale, {
                x: 1.5,
                y: 1.5,
                duration: 0.3,
                ease: "back.out",
            });
            gsap.to(back, {
                alpha: 0,
                duration: 0.3,
                ease: "back.out",
            });
        })
        icon.on('pointerout', () => {
            if (main.onOut) main.onOut();
            gsap.to(icon.scale, {
                x: 1,
                y: 1,
                duration: 0.2,
                ease: "sine.in",
            });
        })
        icon.on('pointerover', () => {
            if (main.onOver) main.onOver();

            icon.scale.set(1)
            gsap.to(icon.scale, {
                x: 1.1,
                y: 1.1,
                duration: 0.2,
                ease: "sine.out",
            });
        })
    }
}