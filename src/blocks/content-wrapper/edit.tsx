/**
 * External dependencies
 */
import React from "react";
import { StyleSheet, css } from "aphrodite";

/**
 * WordPress dependencies
 */
import { BlockEditProps } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { Component, Fragment } from "@wordpress/element";
import { InspectorControls, InnerBlocks } from "@wordpress/editor";
import {
  PanelBody,
  TextControl,
  SelectControl,
  Button
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import { MediaQuery } from "../types";
import { getRGBColor, bgSettingsPanel } from "../utils";
import { ContainerBreakpoint, ContentWrapperAttributes } from "./utils";

/**
 * Map edit
 */
class AspectRatioEdit extends Component {
  // Props
  props: BlockEditProps<ContentWrapperAttributes>;

  constructor(props: BlockEditProps<ContentWrapperAttributes>) {
    super(props);

    this.setBreakpoint = this.setBreakpoint.bind(this);
    this.addBreakpoint = this.addBreakpoint.bind(this);
    this.removeBreakpoint = this.removeBreakpoint.bind(this);
  }

  /**
   * Update breakpoint
   */
  setBreakpoint(breakpoint: ContainerBreakpoint, index: number) {
    const { attributes, setAttributes } = this.props;
    setAttributes({
      breakpoints: attributes.breakpoints.map((current, ref) =>
        ref == index ? breakpoint : current
      )
    });
  }

  /**
   * Add breakpoint
   */
  addBreakpoint() {
    const { attributes, setAttributes } = this.props;
    setAttributes({
      breakpoints: [].concat(attributes.breakpoints, [
        { direction: "min-width", breakpoint: 0, width: 0 }
      ])
    });
  }

  /**
   * Remove breakpoint
   */
  removeBreakpoint(index: number) {
    const { attributes, setAttributes } = this.props;
    const { breakpoints } = attributes;

    if (typeof breakpoints[index]) {
      setAttributes({
        breakpoints: breakpoints.filter(
          (breakpoint: ContainerBreakpoint, i: number) => index != i
        )
      });
    }
  }

  // Render component
  render() {
    // Props
    const { attributes, setAttributes, className } = this.props;

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

    // CSS Styles
    const styles = StyleSheet.create({
      bg: {
        backgroundColor: addBgColor ? getRGBColor(bgColor) : undefined,
        backgroundImage: bgImage.url ? `url(${bgImage.url})` : undefined,
        backgroundPosition: bgPosition
      }
    });

    // Edit
    return (
      <Fragment>
        <InspectorControls>
          <PanelBody
            className="editor-panel-breakpoint-settings"
            title={__("Breakpoints")}
            initialOpen={false}
          >
            {breakpoints.map(
              ({ direction, breakpoint, width }, index: number) => (
                <Fragment key={index}>
                  <SelectControl
                    help={
                      <span>
                        <strong>min-width</strong>: mobile first
                      </span>
                    }
                    value={direction}
                    onChange={(val: MediaQuery) =>
                      this.setBreakpoint(
                        { direction: val, breakpoint, width },
                        index
                      )
                    }
                    options={[
                      { value: "min-width", label: "min-width" },
                      { value: "max-width", label: "max-width" }
                    ]}
                  />
                  <TextControl
                    help={__("Breakpoint - pixel width of screen")}
                    type="number"
                    value={breakpoint}
                    onChange={(val: string) =>
                      this.setBreakpoint(
                        { direction, breakpoint: parseFloat(val), width },
                        index
                      )
                    }
                  />
                  <TextControl
                    type="number"
                    help={__("Content wrapper width")}
                    value={width}
                    style={{ width: "100%" }}
                    onChange={(val: string) =>
                      this.setBreakpoint(
                        { direction, breakpoint, width: parseFloat(val) },
                        index
                      )
                    }
                  />
                  <Button
                    isSmall
                    isDefault={false}
                    isDestructive={true}
                    style={{ alignSelf: "end" }}
                    onClick={() => this.removeBreakpoint(index)}
                  >
                    {__("Remove")}
                  </Button>
                  <hr />
                </Fragment>
              )
            )}
            <Button isSmall isPrimary onClick={this.addBreakpoint}>
              {__("Add Breakpoint")}
            </Button>
          </PanelBody>
          {bgSettingsPanel(attributes, setAttributes)}
        </InspectorControls>
        <div
          className={`${className} loganstellway-content-wrapper loganstellway-block-bg-image ${css(
            styles.bg
          )}`}
        >
          {addMaskColor && (
            <div
              className="loganstellway-content-wrapper-mask"
              style={{
                backgroundColor: getRGBColor(maskColor)
              }}
            />
          )}
          <div className="loganstellway-content-wrapper-content">
            <InnerBlocks templateLock={false} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AspectRatioEdit;
