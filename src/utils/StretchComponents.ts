import {emitter} from "./Emitter";
export default class StretchComponents {
    constructor() {
        this.initializeListeners();
    }

    updateOnResize = () => {
        const componentsToBeStretched = document.querySelectorAll(".stretchtobottom");
        console.log(componentsToBeStretched)
        const componentsToBeStretchedArray = Array.prototype.slice.call(componentsToBeStretched);
        this.stretchComponentsToBottom(componentsToBeStretchedArray);

        const componentsMaxHeight = document.querySelectorAll(".ac-maxheight-bottom");
        const componentsToBeProcessed = Array.prototype.slice.call(componentsMaxHeight);
        this.stretchComponentsToMaxHeight(componentsToBeProcessed);
    };

    stretchComponentsToMaxHeight(components: HTMLElement[]) {
        components.forEach((htmlNode) => {
            const removePx = -50; //because it is used inside dialogs

            this.stretchToBottom(htmlNode, removePx, "maxHeight");
        });
    }

    /**
     * stretchComponentsToBottom
     *
     *   finds all elements in the dom with given class names and tries to resize them
     *
     */
    stretchComponentsToBottom(components: HTMLElement[]) {
        components.forEach((htmlNode) => {
            let removePx = 0;
            if (htmlNode.classList.contains("ac-tabs-startpage")) {
                removePx = -10;
            }
            if (htmlNode.classList.contains("substract-10")) {
                removePx = -10;
            }
            if (htmlNode.classList.contains("substract-20")) {
                removePx = -20;
            }
            if (htmlNode.classList.contains("substract-25")) {
                removePx = -25;
            }
            if (htmlNode.classList.contains("substract-30")) {
                removePx = -30;
            }
            if (htmlNode.classList.contains("substract-40")) {
                removePx = -40;
            }
            if (htmlNode.classList.contains("substract-50")) {
                removePx = -50;
            }
            if (htmlNode.classList.contains("substract-70")) {
                removePx = -70;
            }
            this.stretchToBottom(htmlNode, removePx);
        });
    }

    /**
     * stretchToBottom
     *
     *   Stretch the given HTML nodes with the given parameters
     *
     */
    stretchToBottom(htmlNode: HTMLElement, removePx: number, cssProp = "height") {
        const heightToBottom = this.getPixelsToBottom(htmlNode);
        let newHeight;
        if (removePx) {
            newHeight = heightToBottom + removePx;
        } else {
            newHeight = heightToBottom;
        }
        //@ts-ignore
        htmlNode.style[cssProp] = newHeight + "px";
    }

    /**
     * getPixelsToBottom
     *
     *   Calculate the number of pixels from the top of the component to the bottom of the screen
     *
     */
    getPixelsToBottom(htmlNode: HTMLElement): number {
        const rect = htmlNode.getBoundingClientRect();
        return window.innerHeight - rect.top;
    }

    initializeListeners() {
        console.log(4414)
        window.addEventListener("resize", this.updateOnResize);
        emitter.on("resize", this.updateOnResize);
        this.updateOnResize();
    }
}
