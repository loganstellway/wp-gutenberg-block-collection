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
  title: __("Content Wrapper"),
  icon: "feedback",
  category,
  description: __("Create a responsive content wrapper"),
  keywords: [__("content"), __("wrapper"), __("container")],
  attributes,
  // supports: {
  //   className: true,
  //   anchor: true
  // },
  edit,
  save
};

export { metadata, name, settings };
