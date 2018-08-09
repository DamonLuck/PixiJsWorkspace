import { Adapter } from "./graphics/AdapterPattern.js";

var app = new PIXI.Application(800, 600, { antialias: true });
document.body.appendChild(app.view);

var graphics = new PIXI.Graphics();
app.stage.addChild(graphics);

let g = new Adapter(graphics);

g.call(5,5,50,50);