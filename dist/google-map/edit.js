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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * External dependencies
 */
import React from "react";
import GoogleMapReact from "google-map-react";
import { createClient } from "@google/maps";
import { __ } from "@wordpress/i18n";
import { Component, Fragment } from "@wordpress/element";
import { InspectorControls } from "@wordpress/editor";
import { PanelBody, PanelRow, BaseControl, TextControl, TextareaControl, Button, RangeControl, Placeholder, ToggleControl, SelectControl } from "@wordpress/components";
/**
 * Internal dependencies
 */
import { getRatio } from "../aspect-ratio/utils";
import { getCenter, Marker, MapIcon } from "./utils";
/**
 * Map edit
 */
var GoogleMapEdit = /** @class */ (function (_super) {
    __extends(GoogleMapEdit, _super);
    // Constructor
    function GoogleMapEdit(props) {
        var _this = _super.call(this, props) || this;
        // Did mount
        _this.didMount = false;
        // State
        _this.state = {
            mapClient: createClient({ key: _this.props.attributes.apiKey }),
            geocoder: false,
            timeout: 1000,
            lat: _this.props.attributes.lat,
            lng: _this.props.attributes.lng,
            zoom: _this.props.attributes.zoom
        };
        _this.setComponentState = _this.setComponentState.bind(_this);
        _this.geocode = _this.geocode.bind(_this);
        _this.getCenterFromGeocoder = _this.getCenterFromGeocoder.bind(_this);
        _this.updateMarker = _this.updateMarker.bind(_this);
        _this.removeMarker = _this.removeMarker.bind(_this);
        _this.addMarker = _this.addMarker.bind(_this);
        return _this;
    }
    // Component did mount
    GoogleMapEdit.prototype.componentDidMount = function () {
        this.didMount = true;
    };
    // Set component state
    GoogleMapEdit.prototype.setComponentState = function (data) {
        if (this.didMount) {
            this.setState(data);
        }
        else {
            this.state = __assign({}, this.state, data);
        }
    };
    // Set map options
    GoogleMapEdit.prototype.setMapOptions = function (updates) {
        var _a = this.props, attributes = _a.attributes, setAttributes = _a.setAttributes;
        var update = __assign({}, attributes.mapOptions, updates);
        setAttributes({ mapOptions: update });
    };
    // Geocode address
    GoogleMapEdit.prototype.geocode = function (request, callback) {
        var _this = this;
        if (this.props.attributes.apiKey) {
            // Cancel previous request
            clearTimeout(this.state.timer);
            // Start new request
            this.setComponentState({
                timer: setTimeout(function () {
                    _this.state.mapClient.geocode(request, callback);
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
                center = { lat: lat, lng: lng };
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
        setAttributes({
            markers: [].concat(attributes.markers, [
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
        var apiKey = attributes.apiKey, address = attributes.address, zoom = attributes.zoom, x = attributes.x, y = attributes.y, minHeight = attributes.minHeight, addMinHeight = attributes.addMinHeight, minHeightUnit = attributes.minHeightUnit, lat = attributes.lat, lng = attributes.lng, markers = attributes.markers, mapOptions = attributes.mapOptions;
        // Edit
        return (React.createElement(Fragment, null,
            React.createElement(InspectorControls, null,
                React.createElement(PanelBody, { className: "editor-panel-map-settings", title: __("Map"), initialOpen: false },
                    React.createElement(TextControl, { label: __("API Key"), value: apiKey, onChange: function (val) {
                            setAttributes({ apiKey: val });
                            _this.setComponentState({
                                mapClient: createClient({ key: val })
                            });
                        } }),
                    React.createElement(TextControl, { label: __("Address"), value: address, onChange: function (val) {
                            setAttributes({ address: val });
                            _this.geocode({ address: val }, function (error, resp) {
                                if (!error) {
                                    var _a = _this.getCenterFromGeocoder(resp.json.results), lat_1 = _a.lat, lng_1 = _a.lng;
                                    setAttributes({ lat: lat_1, lng: lng_1 });
                                    _this.setComponentState({ lat: lat_1, lng: lng_1 });
                                }
                            });
                        } }),
                    React.createElement(BaseControl, { id: "map-coordinates", label: __("Coordinates") },
                        React.createElement(PanelRow, null,
                            React.createElement(TextControl, { label: React.createElement("small", null, __("Latitude")), value: lat, onChange: function (val) {
                                    setAttributes({ lat: parseFloat(val) });
                                    _this.setComponentState({ lat: parseFloat(val) });
                                } }),
                            React.createElement(TextControl, { label: React.createElement("small", null, __("Longitude")), value: lng, onChange: function (val) {
                                    setAttributes({ lng: parseFloat(val) });
                                    _this.setComponentState({ lng: parseFloat(val) });
                                } }))),
                    React.createElement(RangeControl, { label: __("Zoom"), value: zoom, min: 1, max: 20, onChange: function (val) {
                            setAttributes({ zoom: val });
                            _this.setComponentState({ zoom: val });
                        } }),
                    React.createElement(ToggleControl, { label: __("Fullscreen Control"), checked: mapOptions.fullscreenControl, onChange: function (val) {
                            return _this.setMapOptions({ fullscreenControl: val });
                        } }),
                    React.createElement(ToggleControl, { label: __("Map Type Control"), checked: mapOptions.mapTypeControl, onChange: function (val) {
                            return _this.setMapOptions({ mapTypeControl: val });
                        } }),
                    React.createElement(ToggleControl, { label: __("Street View Control"), checked: mapOptions.streetViewControl, onChange: function (val) {
                            return _this.setMapOptions({ streetViewControl: val });
                        } }),
                    React.createElement(ToggleControl, { label: __("Zoom Control"), checked: mapOptions.zoomControl, onChange: function (val) {
                            return _this.setMapOptions({ zoomControl: val });
                        } }),
                    React.createElement(SelectControl, { label: __("Map Type"), value: mapOptions.mapTypeId, onChange: function (val) { return _this.setMapOptions({ mapTypeId: val }); }, options: [
                            { value: "roadmap", label: "Road Map" },
                            { value: "satellite", label: "Satellite" }
                        ] }),
                    React.createElement(TextareaControl, { label: __("Styles"), help: React.createElement("p", null,
                            "Refer to",
                            " ",
                            React.createElement("a", { href: "https://snazzymaps.com/", ref: "noopener noreferrer", target: "_blank" }, "SnazzyMaps"),
                            " ",
                            "for a library of styles."), value: JSON.stringify(mapOptions.styles), onChange: function (val) {
                            return _this.setMapOptions({ styles: JSON.parse(val) });
                        } })),
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
                React.createElement(PanelBody, { className: "editor-panel-map-settings", title: __("Markers"), initialOpen: false },
                    markers.map(function (marker, index) {
                        var description = marker.description, address = marker.address, lat = marker.lat, lng = marker.lng;
                        return (React.createElement(Fragment, { key: index },
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
                                    _this.geocode({ address: val }, function (error, resp) {
                                        if (!error) {
                                            var _a = _this.getCenterFromGeocoder(resp.json.results), lat_2 = _a.lat, lng_2 = _a.lng;
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
            apiKey && (lat == 0 && lng == 0) && (React.createElement(Placeholder, { icon: MapIcon, label: __("Add location data in block settings.") })),
            apiKey && !(lat == 0 && lng == 0) && (React.createElement("div", { className: className + " loganstellway-aspect-ratio-container" },
                React.createElement("div", { style: {
                        paddingTop: getRatio(x, y) + "%",
                        minHeight: addMinHeight
                            ? "" + minHeight + minHeightUnit
                            : undefined
                    } }),
                React.createElement("div", { className: "loganstellway-aspect-ratio-content" },
                    React.createElement(GoogleMapReact, { bootstrapURLKeys: { key: apiKey }, center: getCenter(this.state), zoom: this.state.zoom, options: mapOptions }, markers.map(function (_a, index) {
                        var lat = _a.lat, lng = _a.lng, description = _a.description;
                        return (React.createElement(Marker, { key: index, lat: lat, lng: lng, description: description || undefined }));
                    })))))));
    };
    return GoogleMapEdit;
}(Component));
/**
 * Export
 */
export default GoogleMapEdit;
//# sourceMappingURL=edit.js.map