/**
 * External dependencies
 */
import GoogleMapReact from "google-map-react";
/**
 * WordPress dependencies
 */
import { Fragment } from "@wordpress/element";
/**
 * Internal dependencies
 */
import { getCenter, getRatio, Marker } from "./blocks/google-map/utils";
(function () {
    // Google Map
    [].forEach.call(document.querySelectorAll("script.wp-block-loganstellway-google-map"), function (map) {
        var attributes = JSON.parse(map.innerHTML);
        var apiKey = attributes.apiKey, x = attributes.x, y = attributes.y, lat = attributes.lat, lng = attributes.lng, zoom = attributes.zoom, markers = attributes.markers, minHeight = attributes.minHeight;
        if (apiKey && x && y && lat && lng && zoom && markers && markers.length) {
            var content = (React.createElement(Fragment, null,
                React.createElement("div", { style: {
                        paddingTop: getRatio(x, y) + "%",
                        minHeight: minHeight
                    } }),
                React.createElement("div", { className: "map-container" },
                    React.createElement(GoogleMapReact, { defaultCenter: getCenter(attributes), defaultZoom: zoom, bootstrapURLKeys: { key: apiKey } }, markers.map(function (marker, index) {
                        var lat = marker.lat, lng = marker.lng, description = marker.description;
                        return (React.createElement(Marker, { key: index, lat: lat, lng: lng, description: description }));
                    })))));
            var el = document.createElement("div");
            el.className = map.className;
            map.parentNode.replaceChild(el, map);
            ReactDOM.render(content, el);
        }
    });
})();
//# sourceMappingURL=client.js.map