import MyScale from "../../../utils/MyScale";
import {Application, Container, Graphics, Sprite} from "pixi.js";
import CustomTextures from "../../../utils/CustomTextures";
import Config from "../../../config/Config";
import * as PIXI from 'pixi.js';

export class SceneFire extends Container {
    private emitter: PIXI.ParticleContainer;
    private particles: PIXI.Sprite[] = [];
    private texture: PIXI.Texture;
    private maxParticles: number;
    private spawnInterval: number;
    private lastSpawnTime: number;

    constructor(app: Application) {

        super();


    }

    update() {
    }
}