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
import { getRatio } from "./blocks/aspect-ratio/utils";
import { getCenter, Marker } from "./blocks/google-map/utils";

(() => {
  // Google Map
  [].forEach.call(
    document.querySelectorAll("script.wp-block-loganstellway-google-map"),
    map => {
      const attributes = JSON.parse(map.innerHTML);
      const {
        apiKey,
        x,
        y,
        lat,
        lng,
        zoom,
        markers,
        minHeight,
        mapOptions
      } = attributes;

      if (
        apiKey &&
        x &&
        y &&
        lat &&
        lng &&
        zoom &&
        markers &&
        typeof markers.length != "undefined"
      ) {
        const content = (
          <Fragment>
            <div
              style={{
                paddingTop: `${getRatio(x, y)}%`,
                minHeight: minHeight
              }}
            />
            <div className="loganstellway-aspect-ratio-content">
              <GoogleMapReact
                center={getCenter(attributes)}
                zoom={zoom}
                options={mapOptions}
                bootstrapURLKeys={{ key: apiKey }}
              >
                {markers.map((marker, index) => {
                  const { lat, lng, description } = marker;

                  return (
                    <Marker
                      key={index}
                      lat={lat}
                      lng={lng}
                      description={description}
                    />
                  );
                })}
              </GoogleMapReact>
            </div>
          </Fragment>
        );

        const el = document.createElement("div");
        el.className = `${map.className} loganstellway-aspect-ratio-container`;
        map.parentNode.replaceChild(el, map);
        ReactDOM.render(content, el);
      }
    }
  );
})();
