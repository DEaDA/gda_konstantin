import {Application, Container, Graphics, SCALE_MODES, Text, Sprite, TextStyle, Texture} from "pixi.js";
import Config from "../config/Config";
import CustomTextures from "./CustomTextures";
import * as PIXI from "pixi.js";

import {DropShadowFilter} from '@pixi/filter-drop-shadow';

export default class MyTextureGenerator {
    public static objectsForScale: any[] = [];
    static app: Application;

    static drawFractalPattern(graphics: Graphics, x: number, y: number, width: number, height: number) {
        let set = Config.colorsSet;
        const lineSize = 5 + Math.random() * 7;
        for (let i = 0; i < height / lineSize; i++) {
            const s = set[Math.floor(Math.random() * set.length)]
            const randomColor = s[Math.floor(Math.random() * s.length)];
            graphics.beginFill(randomColor, 1);
            graphics.drawRect(0, i * lineSize, width, height / lineSize);
        }
        graphics.endFill();
    }

    static createRandomShape() {
        const graphics = new Graphics();
        const color = 0xffffff;
        let shapeType = Math.floor(Math.random() * 4); // 0: круг, 1: квадрат, 2: треугольник, 3: звезда
        graphics.beginFill(color);

        switch (shapeType) {
            case 0: // Круг
                const radius = Math.random() * 50 + 20; // Радиус от 20 до 70
                graphics.drawCircle(100, 100, radius);
                break;

            case 1: // Квадрат
                const size = Math.random() * 50 + 20; // Размер от 20 до 70
                graphics.drawRect(100, 100, size, size);
                break;

            case 2: // Треугольник
                const side = Math.random() * 50 + 20; // Длина стороны
                graphics.drawPolygon([
                    100, -side / Math.sqrt(3), // Вершина сверху
                    100 - side / 2, 100 + side / (2 * Math.sqrt(3)), // Левая нижняя точка
                    100 + side / 2, 100 + side / (2 * Math.sqrt(3)), // Правая нижняя точка
                ]);
                break;

            case 3: // Звезда
                const points = Math.floor(Math.random() * 5) + 5; // От 5 до 9 вершин
                const innerRadius = Math.random() * 30 + 10;
                const outerRadius = Math.random() * 50 + 30;
                const starPoints: number[] = [];

                for (let i = 0; i < points * 2; i++) {
                    const radius = i % 2 === 0 ? outerRadius : innerRadius;
                    const angle = (i * Math.PI) / points;
                    starPoints.push(
                        100+Math.cos(angle) * radius,
                        100+Math.sin(angle) * radius
                    );
                }

                graphics.drawPolygon(starPoints);
                break;
        }
        graphics.endFill();
        return graphics;
    }

    static randomImage() {
        const sprite = new Sprite(CustomTextures.textures['rnd' + MyTextureGenerator.id]);
        sprite.angle = Math.random() * 360;
        sprite.mask = MyTextureGenerator.createRandomShape();
        CustomTextures.textures['shape' + MyTextureGenerator.id] = MyTextureGenerator.app.renderer.generateTexture(sprite);
    }

    static generateFractalTexture(width: number, height: number): Texture {
        const graphics = new Graphics();
        MyTextureGenerator.drawFractalPattern(graphics, 0, 0, width, height);
        return MyTextureGenerator.app.renderer.generateTexture(graphics);
    }

    static drawFractalRectangle(width: number, height: number) {

        const c = new Container();
        const fractalTexture = MyTextureGenerator.generateFractalTexture(width, height);
        CustomTextures.textures['rnd' + MyTextureGenerator.id] = fractalTexture

        MyTextureGenerator.randomImage();
        MyTextureGenerator.id++;
        const sprite = new Sprite(fractalTexture);
        sprite.x = 300;
        sprite.y = 300;
        sprite.anchor.set(0.5);
        sprite.width = width;
        sprite.height = height;
        sprite.angle = Math.random() * 360;

        const cardWidth = 320;
        const cardHeight = 500;

        let graphics = new Graphics();
        sprite.mask = graphics;
        graphics.beginFill(0xff00ff, 1);
        graphics.drawRect(sprite.x - 100, sprite.y - 100, cardWidth / 2, cardHeight / 2);
        c.addChild(sprite);

        const newTexture = MyTextureGenerator.app.renderer.generateTexture(c);
        const c2 = new Container();
        const borderSize: number = 20;

        const sp1 = new Sprite(newTexture);
        const sp2 = new Sprite(newTexture);
        const sp3 = new Sprite(newTexture);
        const sp4 = new Sprite(newTexture);
        c2.y = cardHeight / 2 + borderSize;
        c2.x = borderSize;
        const logo = new Sprite(CustomTextures.textures.logo);
        logo.anchor.set(0.5, 0.5);
        logo.scale.set(0.9);
        logo.x = cardWidth / 2;

        sp2.scale.set(-1, 1);
        sp2.x = cardWidth;
        c2.addChild(sp1);
        c2.addChild(sp2);
        c2.addChild(sp3);
        c2.addChild(sp4);
        c2.addChild(logo);
        sp3.y = 0;
        sp3.scale.set(1, -1);

        sp4.x = cardWidth;
        sp4.y = 0;
        sp4.scale.set(-1, -1);

        let graphics2 = new Graphics();
        c2.mask = graphics2;
        graphics2.beginFill(0xff00ff, 0.5);
        graphics2.drawRoundedRect(0, -cardHeight / 2, cardWidth, cardHeight, 50);
        graphics2.endFill();
        c2.addChild(graphics2);

        /*  const dropShadow = new DropShadowFilter();
          dropShadow.color = 0x000000;
          dropShadow.alpha = 0.2;
          dropShadow.blur = 5;
          dropShadow.distance = 10;
          dropShadow.rotation = 45;
          c2.filters = [dropShadow];*/

        const t: Texture = MyTextureGenerator.app.renderer.generateTexture(c2);
        return t

    }

    static id: number = 0;
}