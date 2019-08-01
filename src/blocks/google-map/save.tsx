/**
 * External dependencies
 */
import React from "react";

/**
 * WordPress dependencies
 */
import { Component } from "@wordpress/element";

/**
 * Internal dependencies
 */
import { SaveProps } from "../types";
import { GoogleMapsAttributes } from "./utils";

/**
 * Save
 */
export default class GoogleMapSave extends Component {
  // Props
  props: SaveProps<GoogleMapsAttributes>;

  // Render
  render() {
    // Props
    const { attributes, className } = this.props;

    // Attributes
    const {
      apiKey,
      zoom,
      x,
      y,
      lat,
      lng,
      markers,
      minHeight,
      addMinHeight,
      minHeightUnit,
      mapOptions
    } = attributes;

    return (
      apiKey && (
        <script
          type={`text/wp-block-loganstellway-google-map`}
          className={className}
        >
          {JSON.stringify({
            apiKey,
            zoom,
            x,
            y,
            lat,
            lng,
            markers,
            minHeight: addMinHeight
              ? `${minHeight}${minHeightUnit}`
              : undefined,
            mapOptions
          })}
        </script>
      )
    );
  }
}
