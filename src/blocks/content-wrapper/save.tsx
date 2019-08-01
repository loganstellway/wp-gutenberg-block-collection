/**
 * External dependencies
 */
import React from "react";

/**
 * WordPress dependencies
 */
import { Component } from "@wordpress/element";
import { InnerBlocks } from "@wordpress/editor";

/**
 * Internal dependencies
 */
import { SaveProps } from "../types";
import { getRGBColor } from "../utils";
import { ContentWrapperAttributes, ContainerBreakpoint } from "./utils";

/**
 * Save
 */
class AspectRatioSave extends Component {
  // Props
  props: SaveProps<ContentWrapperAttributes>;

  // Render
  render() {
    // Props
    const { attributes, className } = this.props;

    // Attributes
    const {
      addBgColor,
      bgColor,
      addMaskColor,
      maskColor,
      bgImage,
      bgPosition,
      breakpoints
    } = attributes;

    let styles: { [k: string]: any } = {
      display: "block",
      boxSizing: "border-box",
      backgroundColor: addBgColor ? getRGBColor(bgColor) : undefined,
      backgroundImage: bgImage.url ? `url(${bgImage.url})` : undefined,
      backgroundPosition: bgPosition
    };

    breakpoints.forEach(
      ({ breakpoint, direction, width }: ContainerBreakpoint) => {
        styles[`@media(${direction}: ${breakpoint}px)`] = {
          width: `${width}px`
        };
      }
    );

    return (
      <div
        className={`${className} loganstellway-content-wrapper rendered loganstellway-block-bg-image`}
        data-loganstellway-styles={JSON.stringify(styles)}
      >
        {addMaskColor && (
          <div
            className="loganstellway-content-wrapper-mask"
            style={{
              backgroundColor: addMaskColor ? getRGBColor(maskColor) : undefined
            }}
          />
        )}
        <div className="loganstellway-content-wrapper-content">
          <InnerBlocks.Content />
        </div>
      </div>
    );
  }
}

export default AspectRatioSave;
