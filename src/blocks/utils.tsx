/**
 * External dependencies
 */
import tinycolor from "tinycolor2";
import {
  PanelBody,
  BaseControl,
  ToggleControl,
  ColorPicker,
  Button,
  ButtonGroup,
  SelectControl
} from "@wordpress/components";
import { MediaUpload, MediaUploadCheck } from "@wordpress/editor";
import { Fragment } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

/**
 * Color interface
 */
export interface ColorInterface {
  hex: string;
  hsl: string;
  hsv: string;
  rgb: string;
}

/**
 * Media object
 */
export interface MediaObject {
  id?: number;
  url?: string;
  media_type?: string;
  type?: string;
}

/**
 * Normalize media upload selection
 */
export const normalizeMedia = (
  media: MediaObject,
  allowed: string[] = ["image"]
) => {
  const def: Partial<MediaObject> = {};

  if (!media || !media.url) return def;

  let type = media.media_type || media.type;

  if (!type || allowed.indexOf(type) < 0) {
    return def;
  }

  return {
    url: media.url,
    id: media.id,
    type
  };
};

/**
 * Get rgb color
 */
export const getRGBColor = (val: Partial<ColorInterface>) => {
  const color = tinycolor(
    val.rgb || val.hsl || val.hex || val.hsv || "transparent"
  );
  return color.toRgbString();
};

/**
 * Justify content
 */
export type JustifyContent =
  | "center"
  | "start"
  | "end"
  | "normal"
  | "flex-start"
  | "flex-end";

/**
 * Align items
 */
export type AlignItems =
  | "center"
  | "start"
  | "end"
  | "normal"
  | "flex-start"
  | "flex-end";

/**
 * Background settings interface
 */
export interface BackgroundAttributes {
  addBgColor: boolean;
  bgColor: Partial<ColorInterface>;
  addMaskColor: boolean;
  maskColor: Partial<ColorInterface>;
  bgImage: {
    url?: string;
    id?: number;
    type?: string;
  };
  bgPosition: string;
}

/**
 * Background settings panel
 */
export const bgSettingsPanel = (
  attributes: Partial<BackgroundAttributes>,
  setAttributes: (atts: Partial<BackgroundAttributes>) => void
) => {
  const {
    bgImage,
    bgPosition,
    addBgColor,
    bgColor,
    addMaskColor,
    maskColor
  } = attributes;

  return (
    <PanelBody
      className="editor-panel-background-settings"
      title={__("Background")}
      initialOpen={false}
    >
      <BaseControl
        id="loganstellway-aspect-ratio-bg-image"
        label={__("Background Image")}
      >
        <MediaUploadCheck
          fallback={
            <p>
              {__(
                "To edit the background image, you need permission to upload media."
              )}
            </p>
          }
        >
          <MediaUpload
            title={__("Select Background Image")}
            onSelect={media =>
              setAttributes({ bgImage: normalizeMedia(media) })
            }
            allowedTypes={["image"]}
            value={bgImage.id}
            render={({ open }) => (
              <Fragment>
                {!bgImage.url && (
                  <Button isDefault onClick={open}>
                    <span>{__("Select Background Image")}</span>
                  </Button>
                )}
                {bgImage.url && (
                  <Fragment>
                    <Button isLink onClick={open}>
                      <img src={bgImage.url} alt="" />
                    </Button>
                    <ButtonGroup>
                      <Button
                        isDefault
                        onClick={() => setAttributes({ bgImage: {} })}
                      >
                        {__("Remove")}
                      </Button>
                      <Button isPrimary onClick={open}>
                        {__("Change")}
                      </Button>
                    </ButtonGroup>
                  </Fragment>
                )}
              </Fragment>
            )}
          />
        </MediaUploadCheck>
      </BaseControl>
      {bgImage.url && (
        <SelectControl
          label={__("Background Position")}
          value={bgPosition}
          onChange={(val: string) => setAttributes({ bgPosition: val })}
          options={[
            { value: "0 0", label: "Top Left" },
            { value: "50% 0", label: "Top Center" },
            { value: "100% 0", label: "Top Right" },
            { value: "0 50%", label: "Middle Left" },
            { value: "50% 50%", label: "Middle Center" },
            { value: "100% 50%", label: "Middle Right" },
            { value: "0 100%", label: "Bottom Left" },
            { value: "50% 100%", label: "Bottom Center" },
            { value: "100% 100%", label: "Bottom Right" }
          ]}
        />
      )}
      <ToggleControl
        label={__("Add Background Color?")}
        checked={addBgColor}
        onChange={(val: boolean) => {
          setAttributes({ addBgColor: val });
        }}
      />
      {addBgColor && (
        <ColorPicker
          color={bgColor.hex || "transparent"}
          onChangeComplete={(val: ColorInterface) => {
            setAttributes({ bgColor: val });
          }}
        />
      )}
      <ToggleControl
        label={__("Add Mask Color?")}
        checked={addMaskColor}
        onChange={(val: boolean) => {
          setAttributes({ addMaskColor: val });
        }}
      />
      {addMaskColor && (
        <ColorPicker
          color={maskColor.hex || "transparent"}
          onChangeComplete={(val: ColorInterface) => {
            setAttributes({ maskColor: val });
          }}
        />
      )}
    </PanelBody>
  );
};
