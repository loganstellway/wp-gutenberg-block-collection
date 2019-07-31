/**
 * External dependencies
 */
import React from "react";
import { BlockEditProps } from "@wordpress/blocks";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component, Fragment } from "@wordpress/element";
import { InspectorControls, InnerBlocks } from "@wordpress/editor";
import {
  PanelBody,
  PanelRow,
  BaseControl,
  TextControl,
  ToggleControl,
  SelectControl
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import {
  getRGBColor,
  JustifyContent,
  AlignItems,
  bgSettingsPanel
} from "../utils";
import { getRatio, AspectRatioAttributes } from "./utils";

/**
 * Map edit
 */
class AspectRatioEdit extends Component {
  // Props
  props: BlockEditProps<AspectRatioAttributes>;

  // Render component
  render() {
    // Props
    const { attributes, setAttributes, className } = this.props;

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

    // Edit
    return (
      <Fragment>
        <InspectorControls>
          <PanelBody
            className="editor-panel-map-settings"
            title={__("Dimensions")}
            initialOpen={false}
          >
            <BaseControl id="ratio" label={__("Ratio")}>
              <PanelRow>
                <TextControl
                  label={<small>{__("X")}</small>}
                  type="number"
                  value={x}
                  onChange={(val: string) =>
                    setAttributes({ x: parseFloat(val) })
                  }
                />
                <TextControl
                  label={<small>{__("Y")}</small>}
                  type="number"
                  value={y}
                  onChange={(val: string) =>
                    setAttributes({ y: parseFloat(val) })
                  }
                />
              </PanelRow>
            </BaseControl>
            <ToggleControl
              label={__("Add Minimum Height")}
              checked={addMinHeight}
              onChange={(val: boolean) => setAttributes({ addMinHeight: val })}
            />
            {addMinHeight && (
              <PanelRow>
                <TextControl
                  type="number"
                  value={minHeight}
                  onChange={(val: string) =>
                    setAttributes({ minHeight: parseFloat(val) })
                  }
                />
                <SelectControl
                  value={minHeightUnit}
                  onChange={(val: string) =>
                    setAttributes({ minHeightUnit: val })
                  }
                  options={[
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
                  ]}
                />
              </PanelRow>
            )}
          </PanelBody>
          <PanelBody
            className="editor-panel-content-settings"
            title={__("Content")}
            initialOpen={false}
          >
            <SelectControl
              label={__("Vertical Align")}
              value={justifyContent}
              onChange={(val: JustifyContent) =>
                setAttributes({ justifyContent: val })
              }
              options={[
                { value: "normal", label: "Normal" },
                { value: "flex-start", label: "Start" },
                { value: "center", label: "Center" },
                { value: "flex-end", label: "End" }
              ]}
            />
            <SelectControl
              label={__("Horizontal Align")}
              value={alignItems}
              onChange={(val: AlignItems) => setAttributes({ alignItems: val })}
              options={[
                { value: "normal", label: "Normal" },
                { value: "flex-start", label: "Start" },
                { value: "center", label: "Center" },
                { value: "flex-end", label: "End" }
              ]}
            />
          </PanelBody>
          {bgSettingsPanel(attributes, setAttributes)}
        </InspectorControls>
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
              minHeight: addMinHeight
                ? `${minHeight}${minHeightUnit}`
                : undefined
            }}
          />
          {addMaskColor && (
            <div
              className="loganstellway-aspect-ratio-mask"
              style={{
                backgroundColor: getRGBColor(maskColor)
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
            <InnerBlocks templateLock={false} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AspectRatioEdit;
