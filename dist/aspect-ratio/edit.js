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
import { __ } from "@wordpress/i18n";
import { Component, Fragment } from "@wordpress/element";
import { InspectorControls, InnerBlocks } from "@wordpress/editor";
import { PanelBody, PanelRow, BaseControl, TextControl, ToggleControl, SelectControl } from "@wordpress/components";
/**
 * Internal dependencies
 */
import { getRGBColor, bgSettingsPanel } from "../utils";
import { getRatio } from "./utils";
/**
 * Map edit
 */
var AspectRatioEdit = /** @class */ (function (_super) {
    __extends(AspectRatioEdit, _super);
    function AspectRatioEdit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Render component
    AspectRatioEdit.prototype.render = function () {
        // Props
        var _a = this.props, attributes = _a.attributes, setAttributes = _a.setAttributes, className = _a.className;
        // Attributes
        var x = attributes.x, y = attributes.y, minHeight = attributes.minHeight, addMinHeight = attributes.addMinHeight, minHeightUnit = attributes.minHeightUnit, justifyContent = attributes.justifyContent, alignItems = attributes.alignItems, addBgColor = attributes.addBgColor, bgColor = attributes.bgColor, addMaskColor = attributes.addMaskColor, maskColor = attributes.maskColor, bgImage = attributes.bgImage;
        // Edit
        return (React.createElement(Fragment, null,
            React.createElement(InspectorControls, null,
                React.createElement(PanelBody, { className: "editor-panel-map-settings", title: __("Dimensions"), initialOpen: false },
                    React.createElement(BaseControl, { id: "ratio", label: __("Ratio") },
                        React.createElement(PanelRow, null,
                            React.createElement(TextControl, { label: React.createElement("small", null, __("X")), type: "number", value: x, onChange: function (val) {
                                    return setAttributes({ x: parseFloat(val) });
                                } }),
                            React.createElement(TextControl, { label: React.createElement("small", null, __("Y")), type: "number", value: y, onChange: function (val) {
                                    return setAttributes({ y: parseFloat(val) });
                                } }))),
                    React.createElement(ToggleControl, { label: __("Add Minimum Height"), checked: addMinHeight, onChange: function (val) { return setAttributes({ addMinHeight: val }); } }),
                    addMinHeight && (React.createElement(PanelRow, null,
                        React.createElement(TextControl, { type: "number", value: minHeight, onChange: function (val) {
                                return setAttributes({ minHeight: parseFloat(val) });
                            } }),
                        React.createElement(SelectControl, { value: minHeightUnit, onChange: function (val) {
                                return setAttributes({ minHeightUnit: val });
                            }, options: [
                                { value: "cm", label: "cm" },
                                { value: "em", label: "em" },
                                { value: "in", label: "in" },
                                { value: "mm", label: "mm" },
                                { value: "pc", label: "pc" },
                                { value: "pt", label: "pt" },
                                { value: "px", label: "px" },
                                { value: "rem", label: "rem" },
                                { value: "vh", label: "vh" },
                                { value: "vw", label: "vw" }
                            ] })))),
                React.createElement(PanelBody, { className: "editor-panel-content-settings", title: __("Content"), initialOpen: false },
                    React.createElement(SelectControl, { label: __("Horizontal Align"), value: justifyContent, onChange: function (val) {
                            return setAttributes({ justifyContent: val });
                        }, options: [
                            { value: "normal", label: "Normal" },
                            { value: "flex-start", label: "Start" },
                            { value: "center", label: "Center" },
                            { value: "flex-end", label: "End" }
                        ] }),
                    React.createElement(SelectControl, { label: __("Vertical Align"), value: alignItems, onChange: function (val) { return setAttributes({ alignItems: val }); }, options: [
                            { value: "normal", label: "Normal" },
                            { value: "flex-start", label: "Top" },
                            { value: "center", label: "Middle" },
                            { value: "flex-end", label: "Bottom" }
                        ] })),
                bgSettingsPanel(attributes, setAttributes)),
            React.createElement("div", { className: className + " loganstellway-aspect-ratio-container", style: {
                    backgroundColor: getRGBColor(bgColor),
                    backgroundImage: bgImage.url ? "url(" + bgImage.url + ")" : null
                } },
                React.createElement("div", { style: {
                        paddingTop: getRatio(x, y) + "%",
                        minHeight: addMinHeight
                            ? "" + minHeight + minHeightUnit
                            : undefined
                    } }),
                addMaskColor && (React.createElement("div", { className: "loganstellway-aspect-ratio-mask", style: {
                        backgroundColor: getRGBColor(addMaskColor ? maskColor : undefined)
                    } })),
                React.createElement("div", { className: "loganstellway-aspect-ratio-content", style: {
                        display: "flex",
                        justifyContent: justifyContent,
                        alignItems: alignItems
                    } },
                    React.createElement(InnerBlocks, { templateLock: false })))));
    };
    return AspectRatioEdit;
}(Component));
export default AspectRatioEdit;
//# sourceMappingURL=edit.js.map