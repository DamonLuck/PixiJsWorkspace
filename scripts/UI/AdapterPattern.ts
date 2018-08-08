    export interface Target {
        call(): void;
    }

    export class Adapter implements Target {

        private _adaptee : PIXI.Graphics;
        constructor(adaptee: PIXI.Graphics)
        {
            this._adaptee = adaptee; 
        }
        public call(): void {
                // set a fill and line style
                this._adaptee.beginFill(0xFF3300);
                this._adaptee.lineStyle(4, 0xffd900, 1);

                // draw a shape
                this._adaptee.moveTo(50,50);
                this._adaptee.lineTo(250, 50);
                this._adaptee.lineTo(100, 100);
                this._adaptee.lineTo(50, 50);
                this._adaptee.endFill();
        }
    }
