    export interface Target {
        call(x:number, y:number, width:number, height:number): void;
    }

    export class Adapter implements Target {

        private _adaptee : PIXI.Graphics;
        constructor(adaptee: PIXI.Graphics)
        {
            this._adaptee = adaptee; 
        }
        public call(x:number, y:number, width:number, height:number): void {
                // set a fill and line style
                this._adaptee.beginFill(0xFF3300);
                this._adaptee.lineStyle(4, 0xffd900, 1);

                // draw a shape
                this._adaptee.moveTo(x,y);
                this._adaptee.lineTo(width, y);
                this._adaptee.lineTo(width, height);
                this._adaptee.lineTo(x, y);
                this._adaptee.endFill();
        }
    }
