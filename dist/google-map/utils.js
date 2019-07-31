/**
 * External Dependencies
 */
import React from "react";
/**
 * Get center
 */
export var getCenter = function (_a) {
    var lat = _a.lat, lng = _a.lng;
    return ({
        lat: lat,
        lng: lng
    });
};
/**
 * Map icon
 */
export var MapIcon = (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512" },
    React.createElement("path", { fill: "#000", d: "M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z" })));
/**
 * Map marker
 */
export var Marker = function (_a) {
    var lat = _a.lat, lng = _a.lng, description = _a.description;
    return lat &&
        lng && (React.createElement("div", { className: "loganstellway-google-map--marker" },
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512" },
            React.createElement("path", { fill: "#EA4335", d: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" })),
        description && React.createElement("div", { className: "description" }, description)));
};
//# sourceMappingURL=utils.js.map