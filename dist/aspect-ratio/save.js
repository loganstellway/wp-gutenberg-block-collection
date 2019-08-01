var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * External dependencies
 */
import React from "react";
/**
 * WordPress dependencies
 */
import { Component } from "@wordpress/element";
import { InnerBlocks } from "@wordpress/editor";
import { getRGBColor } from "../utils";
import { getRatio } from "./utils";
/**
 * Save
 */
var AspectRatioSave = /** @class */ (function (_super) {
    __extends(AspectRatioSave, _super);
    function AspectRatioSave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render
    AspectRatioSave.prototype.render = function () {
        // Props
        var _a = this.props, attributes = _a.attributes, className = _a.className;
        // Attributes
        var x = attributes.x, y = attributes.y, minHeight = attributes.minHeight, addMinHeight = attributes.addMinHeight, minHeightUnit = attributes.minHeightUnit, justifyContent = attributes.justifyContent, alignItems = attributes.alignItems, addBgColor = attributes.addBgColor, bgColor = attributes.bgColor, addMaskColor = attributes.addMaskColor, maskColor = attributes.maskColor, bgImage = attributes.bgImage, bgPosition = attributes.bgPosition;
        return (React.createElement("div", { className: className + " loganstellway-aspect-ratio-container loganstellway-block-bg-image", style: {
                backgroundColor: addBgColor ? getRGBColor(bgColor) : undefined,
                backgroundImage: bgImage.url ? "url(" + bgImage.url + ")" : undefined,
                backgroundPosition: bgPosition
            } },
            React.createElement("div", { style: {
                    paddingTop: getRatio(x, y) + "%",
                    minHeight: addMinHeight ? "" + minHeight + minHeightUnit : undefined
                } }),
            addMaskColor && (React.createElement("div", { className: "loganstellway-aspect-ratio-mask", style: {
                    backgroundColor: addMaskColor ? getRGBColor(maskColor) : undefined
                } })),
            React.createElement("div", { className: "loganstellway-aspect-ratio-content loganstellway-block-flex-align", style: {
                    justifyContent: justifyContent,
                    alignItems: alignItems
                } },
                React.createElement(InnerBlocks.Content, null))));
    };
    return AspectRatioSave;
}(Component));
export default AspectRatioSave;
//# sourceMappingURL=save.js.map