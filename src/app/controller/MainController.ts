import {MainModel} from "../model/MainModel";
import Config from "../../config/Config";

export class MainController {

    model: MainModel;
    init: Function;
    update: Function;

    constructor() {
        this.update = () => {
        }
        this.init = (model: MainModel) => {
            this.model = model;
        }
    }
}