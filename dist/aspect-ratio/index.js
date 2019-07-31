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
var name = metadata.name, attributes = metadata.attributes, category = metadata.category;
var settings = {
    title: __("Aspect Ratio"),
    icon: "editor-expand",
    category: category,
    description: __("Create a responsive element with an aspect ratio."),
    keywords: [__("aspect"), __("ratio")],
    attributes: attributes,
    edit: edit,
    save: save
};
export { metadata, name, settings };
//# sourceMappingURL=index.js.map