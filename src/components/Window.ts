﻿

module EZGUI.Component {
    export class Window extends Layout {
        public guiMask;

        private titleBar;
        constructor(public _settings, public themeId) {
            super(_settings, themeId);

        }
        protected draw() {
            var headerCfg = this._settings.header;

            
            if (headerCfg) {
                headerCfg.height = headerCfg.height || 0;
                this._settings['padding-top'] = headerCfg.height;
                
            }

            super.draw();
            
            
            if (headerCfg) {
                //this.position.y += headerCfg.height;

                if (headerCfg.width == undefined) headerCfg.width = this._settings.width;

                this.titleBar = new GUISprite(headerCfg, this.theme);


                //this.titleBar.position.y -= headerCfg.height - this.settings.padding*2;

                this.originalAddChild(this.titleBar);

                
            }

        }

        protected handleEvents() {
            super.handleEvents();

            if (this._settings.draggable) {
                //if (this.titleBar) this.draghandle = this.titleBar;
                //else this.draghandle = this;

                //this.draggable = this;
                this.setDraggable(true);
            }

        }

        public setDraggable(val=true) {
            if (val) {
                this.draggable = this;

                if (this.titleBar) this.draghandle = this.titleBar;
                else this.draghandle = this;

            }
            else {
                this.draggable = undefined;
                this.draghandle = undefined;
            }
        }
    }

    EZGUI.registerComponents(Window);
} 