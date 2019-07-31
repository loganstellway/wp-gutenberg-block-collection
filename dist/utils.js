/**
 * External dependencies
 */
import tinycolor from "tinycolor2";
import { PanelBody, BaseControl, ToggleControl, ColorPicker, Button, ButtonGroup } from "@wordpress/components";
import { MediaUpload, MediaUploadCheck } from "@wordpress/editor";
import { Fragment } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
/**
 * Normalize media upload selection
 */
export var normalizeMedia = function (media, allowed) {
    if (allowed === void 0) { allowed = ["image"]; }
    var def = {};
    if (!media || !media.url)
        return def;
    var type = media.media_type || media.type;
    if (!type || allowed.indexOf(type) < 0) {
        return def;
    }
    return {
        url: media.url,
        id: media.id,
        type: type
    };
};
/**
 * Get rgb color
 */
export var getRGBColor = function (val) {
    var color = tinycolor(val.rgb || val.hsl || val.hex || val.hsv || "transparent");
    return color.toRgbString();
};
/**
 * Background settings panel
 */
export var bgSettingsPanel = function (attributes, setAttributes) {
    var bgImage = attributes.bgImage, addBgColor = attributes.addBgColor, bgColor = attributes.bgColor, addMaskColor = attributes.addMaskColor, maskColor = attributes.maskColor;
    return (React.createElement(PanelBody, { className: "editor-panel-background-settings", title: __("Background"), initialOpen: false },
        React.createElement(BaseControl, { id: "loganstellway-aspect-ratio-bg-image", label: __("Background Image") },
            React.createElement(MediaUploadCheck, { fallback: React.createElement("p", null, __("To edit the background image, you need permission to upload media.")) },
                React.createElement(MediaUpload, { title: __("Select Background Image"), onSelect: function (media) {
                        return setAttributes({ bgImage: normalizeMedia(media) });
                    }, allowedTypes: ["image"], value: bgImage.id, render: function (_a) {
                        var open = _a.open;
                        return (React.createElement(Fragment, null,
                            !bgImage.url && (React.createElement(Button, { isDefault: true, onClick: open },
                                React.createElement("span", null, __("Select Background Image")))),
                            bgImage.url && (React.createElement(Fragment, null,
                                React.createElement(Button, { isLink: true, onClick: open },
                                    React.createElement("img", { src: bgImage.url, alt: "" })),
                                React.createElement(ButtonGroup, null,
                                    React.createElement(Button, { isDefault: true, onClick: function () { return setAttributes({ bgImage: {} }); } }, __("Remove")),
                                    React.createElement(Button, { isPrimary: true, onClick: open }, __("Change")))))));
                    } }))),
        React.createElement(ToggleControl, { label: __("Add Background Color?"), checked: addBgColor, onChange: function (val) {
                setAttributes({ addBgColor: val });
            } }),
        addBgColor && (React.createElement(ColorPicker, { color: bgColor.hex || "transparent", onChangeComplete: function (val) {
                setAttributes({ bgColor: val });
            } })),
        React.createElement(ToggleControl, { label: __("Add Mask Color?"), checked: addMaskColor, onChange: function (val) {
                setAttributes({ addMaskColor: val });
            } }),
        addMaskColor && (React.createElement(ColorPicker, { color: maskColor.hex || "transparent", onChangeComplete: function (val) {
                setAttributes({ maskColor: val });
            } }))));
};
//# sourceMappingURL=utils.js.map