import * as core from './core'

var app = new PIXI.Application(800, 600, { antialias: true });
document.body.appendChild(app.view);

var graphics = new PIXI.Graphics();
app.stage.addChild(graphics);

let g = new core.subModule.Adapter(graphics);

g.call();