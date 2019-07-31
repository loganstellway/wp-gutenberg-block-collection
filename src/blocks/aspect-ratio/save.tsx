/**
 * External dependencies
 */
import React from "react";

/**
 * WordPress dependencies
 */
import { Component } from "@wordpress/element";
import { BlockSaveProps } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/editor";

/**
 * Internal dependencies
 */
import { getRGBColor } from "../utils";
import { getRatio, AspectRatioAttributes } from "./utils";

interface Props extends BlockSaveProps<AspectRatioAttributes> {
  className: string;
}

/**
 * Save
 */
class AspectRatioSave extends Component {
  // Props
  props: Props;

  // Render
  render() {
    // Props
    const { attributes, className } = this.props;

    // Attributes
    const {
      x,
      y,
      minHeight,
      addMinHeight,
      minHeightUnit,
      justifyContent,
      alignItems,
      addBgColor,
      bgColor,
      addMaskColor,
      maskColor,
      bgImage,
      bgPosition
    } = attributes;

    return (
      <div
        className={`${className} loganstellway-aspect-ratio-container loganstellway-block-bg-image`}
        style={{
          backgroundColor: addBgColor ? getRGBColor(bgColor) : undefined,
          backgroundImage: bgImage.url ? `url(${bgImage.url})` : undefined,
          backgroundPosition: bgPosition
        }}
      >
        <div
          style={{
            paddingTop: `${getRatio(x, y)}%`,
            minHeight: addMinHeight ? `${minHeight}${minHeightUnit}` : undefined
          }}
        />
        {addMaskColor && (
          <div
            className="loganstellway-aspect-ratio-mask"
            style={{
              backgroundColor: addMaskColor ? getRGBColor(maskColor) : undefined
            }}
          />
        )}
        <div
          className="loganstellway-aspect-ratio-content loganstellway-block-flex-align"
          style={{
            justifyContent: justifyContent,
            alignItems: alignItems
          }}
        >
          <InnerBlocks.Content />
        </div>
      </div>
    );
  }
}

export default AspectRatioSave;
