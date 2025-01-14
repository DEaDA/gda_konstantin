import {MainView} from "../view/MainView";
import Config from "../../config/Config";

export class MainModel {
    init: Function;
    view: MainView;

    constructor() {
        this.init = (view: MainView) => {
            this.view = view;
        }
    }
}