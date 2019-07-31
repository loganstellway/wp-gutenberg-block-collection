/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import edit from "./edit";
import save from "./save";
import metadata from "./block.json";

const { name, attributes, category } = metadata;
const settings = {
  title: __("Aspect Ratio"),
  icon: "editor-expand",
  category,
  description: __("Create a responsive element with an aspect ratio."),
  keywords: [__("aspect"), __("ratio")],
  attributes,
  edit,
  save
};

export { metadata, name, settings };
