    export interface Target {
        call(x:number, y:number, width:number, height:number): void;
    }

    export class Adapter implements Target {

        private _adaptee : PIXI.Graphics;

        private _data! : PIXI.interaction.InteractionData;
        private _dragging : boolean;

        constructor(adaptee: PIXI.Graphics)
        {
            this._adaptee = adaptee; 
            this._dragging = false;
        }

        public call(x:number, y:number, width:number, height:number): void {
                // set a fill and line style
                

                this._adaptee.interactive = true;
                this._adaptee.beginFill(0xFF3300);
                this._adaptee.lineStyle(4, 0xffd900, 1);

                // draw a shape
                this._adaptee.moveTo(x,y);
                this._adaptee.lineTo(width, y);
                this._adaptee.lineTo(width, height);
                this._adaptee.lineTo(x, y);
                this._adaptee.endFill();
                this._adaptee.hitArea = this._adaptee.getBounds();

                this._adaptee.on('pointerdown', this.onDragStart, this);
                this._adaptee.on('pointerup', this.onDragEnd, this)
                this._adaptee.on('pointerupoutside', this.onDragEnd, this)
                this._adaptee.on('pointermove',this.onDragMove, this);
        }
        private onDragStart(event:PIXI.interaction.InteractionEvent):void{
            this._adaptee.alpha= 0.5;
            this._dragging = true;
            this._data = event.data;
        }
        
        private onDragEnd():void{
            this._adaptee.alpha = 1;
            this._dragging = false;
            // set the interaction data to null
            //this._data = null;      
          }
        
        private onDragMove():void{
            if (this._dragging) {
                // var newPosition = this._data.getLocalPosition(this._adaptee);
                var newPosition  = this._data.getLocalPosition(this._adaptee.parent);
                //var newPosition = this._data.getGlobalPosition();
                this._adaptee.x = newPosition.x;
                this._adaptee.y = newPosition.y;
            }        
        }
    }
