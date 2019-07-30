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
import GoogleMapReact from "google-map-react";
/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component, Fragment } from "@wordpress/element";
import { InspectorControls } from "@wordpress/editor";
import { PanelBody, PanelRow, BaseControl, TextControl, TextareaControl, Button, RangeControl, Placeholder, ToggleControl, SelectControl } from "@wordpress/components";
/**
 * Internal dependencies
 */
import { getRatio, getCenter, Marker, MapIcon } from "./utils";
/**
 * Map edit
 */
var GoogleMapEdit = /** @class */ (function (_super) {
    __extends(GoogleMapEdit, _super);
    // Constructor
    function GoogleMapEdit(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            api: {},
            geocoder: false,
            timer: 0,
            timeout: 1000
        };
        _this.setApi = _this.setApi.bind(_this);
        _this.center = _this.center.bind(_this);
        _this.zoom = _this.zoom.bind(_this);
        _this.getGeocoder = _this.getGeocoder.bind(_this);
        _this.geocode = _this.geocode.bind(_this);
        _this.getCenterFromGeocoder = _this.getCenterFromGeocoder.bind(_this);
        _this.updateMarker = _this.updateMarker.bind(_this);
        _this.removeMarker = _this.removeMarker.bind(_this);
        _this.addMarker = _this.addMarker.bind(_this);
        return _this;
    }
    // Set API
    GoogleMapEdit.prototype.setApi = function (api) {
        this.setState({ api: api });
    };
    // Update center
    GoogleMapEdit.prototype.center = function () {
        var attributes = this.props.attributes;
        var map = this.state.api.map;
        if (map && map.setCenter) {
            map.setCenter(getCenter(attributes));
        }
    };
    // Update zoom
    GoogleMapEdit.prototype.zoom = function () {
        var attributes = this.props.attributes;
        var zoom = attributes.zoom;
        var map = this.state.api.map;
        if (map && map.setZoom) {
            map.setZoom(zoom);
        }
    };
    // Get geocoder
    GoogleMapEdit.prototype.getGeocoder = function () {
        if (!this.state.geocoder) {
            var maps = this.state.api.maps;
            if (maps && maps.Geocoder) {
                this.setState({ geocoder: new maps.Geocoder() });
            }
        }
        return this.state.geocoder;
    };
    // Geocode address
    GoogleMapEdit.prototype.geocode = function (address, callback) {
        var _this = this;
        if (address.trim() && this.getGeocoder()) {
            // Cancel previous request
            clearTimeout(this.state.timer);
            // Start new request
            this.setState({
                timer: setTimeout(function () {
                    _this.getGeocoder().geocode({ address: address }, callback);
                }, this.state.timeout)
            });
        }
    };
    // Get center from
    GoogleMapEdit.prototype.getCenterFromGeocoder = function (data) {
        var center = { lat: 0, lng: 0 };
        try {
            data.forEach(function (result) {
                var geometry = result.geometry;
                var location = geometry.location;
                var lat = location.lat, lng = location.lng;
                center = { lat: lat(), lng: lng() };
            });
        }
        catch (error) { }
        return center;
    };
    // Update marker
    GoogleMapEdit.prototype.updateMarker = function (update, index) {
        var _a = this.props, attributes = _a.attributes, setAttributes = _a.setAttributes;
        var markers = attributes.markers;
        if (typeof markers[index] != "undefined") {
            setAttributes({
                markers: markers.map(function (marker, i) {
                    return i == index ? update : marker;
                })
            });
        }
    };
    // Remove marker
    GoogleMapEdit.prototype.removeMarker = function (index) {
        var _a = this.props, attributes = _a.attributes, setAttributes = _a.setAttributes;
        var markers = attributes.markers;
        if (typeof markers[index]) {
            setAttributes({
                markers: markers.filter(function (marker, i) { return index != i; })
            });
        }
    };
    // Add marker
    GoogleMapEdit.prototype.addMarker = function () {
        var _a = this.props, attributes = _a.attributes, setAttributes = _a.setAttributes;
        var markers = attributes.markers;
        setAttributes({
            markers: [].concat(markers, [
                { lat: 0, lng: 0, description: "", address: "" }
            ])
        });
    };
    // Render component
    GoogleMapEdit.prototype.render = function () {
        var _this = this;
        // Props
        var _a = this.props, attributes = _a.attributes, setAttributes = _a.setAttributes, className = _a.className;
        // Attributes
        var apiKey = attributes.apiKey, address = attributes.address, zoom = attributes.zoom, x = attributes.x, y = attributes.y, minHeight = attributes.minHeight, addMinHeight = attributes.addMinHeight, minHeightUnit = attributes.minHeightUnit, lat = attributes.lat, lng = attributes.lng, markers = attributes.markers;
        // Edit
        return (React.createElement(Fragment, null,
            React.createElement(InspectorControls, null,
                React.createElement(PanelBody, { className: "editor-panel-map-settings", title: __("Map"), initialOpen: false },
                    React.createElement(TextControl, { label: __("API Key"), value: apiKey, onChange: function (val) { return setAttributes({ apiKey: val }); } }),
                    React.createElement(RangeControl, { label: __("Zoom"), value: zoom, min: 1, max: 20, onChange: function (val) {
                            setAttributes({ zoom: val });
                            _this.zoom();
                        } }),
                    React.createElement(TextControl, { label: __("Address"), value: address, onChange: function (val) {
                            setAttributes({ address: val });
                            _this.geocode(val, function (resp, status) {
                                if (status == "OK") {
                                    var _a = _this.getCenterFromGeocoder(resp), lat_1 = _a.lat, lng_1 = _a.lng;
                                    setAttributes({ lat: lat_1, lng: lng_1 });
                                    _this.center();
                                }
                            });
                        } }),
                    React.createElement(BaseControl, { id: "map-coordinates", label: __("Coordinates") },
                        React.createElement(PanelRow, null,
                            React.createElement(TextControl, { label: React.createElement("small", null, __("Latitude")), value: lat, onChange: function (val) {
                                    setAttributes({ lat: val });
                                    _this.center();
                                } }),
                            React.createElement(TextControl, { label: React.createElement("small", null, __("Longitude")), value: lng, onChange: function (val) {
                                    setAttributes({ lng: val });
                                    _this.center();
                                } })))),
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
                        React.createElement(TextControl, { type: "number", value: minHeight, onChange: function (val) { return setAttributes({ minHeight: val }); } }),
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
                React.createElement(PanelBody, { className: "editor-panel-map-settings", title: __("Markers"), initialOpen: false },
                    markers.map(function (marker, index) {
                        var description = marker.description, address = marker.address, lat = marker.lat, lng = marker.lng;
                        return (React.createElement(Fragment, null,
                            React.createElement("div", { style: { textAlign: "right" } },
                                React.createElement(Button, { isSmall: true, isDefault: false, isDestructive: true, style: { alignSelf: "end" }, onClick: function () { return _this.removeMarker(index); } }, __("Remove") + (" #" + (index + 1)))),
                            React.createElement(TextareaControl, { label: __("Description"), value: description, className: "mb-0", rows: 2, onChange: function (val) {
                                    return _this.updateMarker({
                                        description: val,
                                        address: address,
                                        lat: lat,
                                        lng: lng
                                    }, index);
                                } }),
                            React.createElement(TextControl, { label: __("Address"), value: address, className: "mb-0", onChange: function (val) {
                                    _this.updateMarker({
                                        description: description,
                                        address: val,
                                        lat: lat,
                                        lng: lng
                                    }, index);
                                    _this.geocode(val, function (resp, status) {
                                        if (status == "OK") {
                                            var _a = _this.getCenterFromGeocoder(resp), lat_2 = _a.lat, lng_2 = _a.lng;
                                            _this.updateMarker({
                                                description: description,
                                                address: val,
                                                lat: lat_2,
                                                lng: lng_2
                                            }, index);
                                        }
                                    });
                                } }),
                            React.createElement(BaseControl, { id: "marker-coordinates", className: "mb-0", label: __("Coordinates") },
                                React.createElement(PanelRow, null,
                                    React.createElement(TextControl, { label: React.createElement("small", null, __("Latitude")), value: lat, onChange: function (val) {
                                            return _this.updateMarker({
                                                description: description,
                                                address: address,
                                                lat: parseFloat(val),
                                                lng: lng
                                            }, index);
                                        } }),
                                    React.createElement(TextControl, { label: React.createElement("small", null, __("Longitude")), value: lng, onChange: function (val) {
                                            return _this.updateMarker({
                                                description: description,
                                                address: address,
                                                lat: lat,
                                                lng: parseFloat(val)
                                            }, index);
                                        } }))),
                            React.createElement("hr", null)));
                    }),
                    React.createElement(Button, { isSmall: true, isPrimary: true, onClick: this.addMarker }, __("Add Marker")))),
            !apiKey && (React.createElement(Placeholder, { icon: MapIcon, label: __("Add API Key in block settings.") })),
            apiKey && (React.createElement("div", { className: className },
                React.createElement("div", { style: {
                        paddingTop: getRatio(x, y) + "%",
                        minHeight: addMinHeight
                            ? "" + minHeight + minHeightUnit
                            : undefined
                    } }),
                React.createElement("div", { className: "map-container" },
                    React.createElement(GoogleMapReact, { bootstrapURLKeys: { key: apiKey }, defaultCenter: getCenter(attributes), defaultZoom: zoom, onGoogleApiLoaded: this.setApi }, markers.map(function (_a) {
                        var lat = _a.lat, lng = _a.lng, description = _a.description;
                        return (React.createElement(Marker, { lat: lat, lng: lng, description: description }));
                    })))))));
    };
    return GoogleMapEdit;
}(Component));
/**
 * Export
 */
export default GoogleMapEdit;
//# sourceMappingURL=edit.js.map