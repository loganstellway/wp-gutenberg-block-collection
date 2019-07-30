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
/**
 * Save
 */
var GoogleMapSave = /** @class */ (function (_super) {
    __extends(GoogleMapSave, _super);
    function GoogleMapSave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoogleMapSave.prototype.render = function () {
        // Props
        var _a = this.props, attributes = _a.attributes, className = _a.className;
        // Attributes
        var apiKey = attributes.apiKey, zoom = attributes.zoom, x = attributes.x, y = attributes.y, lat = attributes.lat, lng = attributes.lng, markers = attributes.markers, minHeight = attributes.minHeight, addMinHeight = attributes.addMinHeight, minHeightUnit = attributes.minHeightUnit;
        return (apiKey && (React.createElement("script", { type: "text/wp-block-loganstellway-google-map", className: className }, JSON.stringify({
            apiKey: apiKey,
            zoom: zoom,
            x: x,
            y: y,
            lat: lat,
            lng: lng,
            markers: markers,
            minHeight: addMinHeight ? "" + minHeight + minHeightUnit : undefined
        }))));
    };
    return GoogleMapSave;
}(Component));
export default GoogleMapSave;
//# sourceMappingURL=save.js.map