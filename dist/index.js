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
import { MapIcon } from "./utils";
var name = metadata.name, attributes = metadata.attributes, category = metadata.category;
var settings = {
    title: __("Google Map"),
    icon: MapIcon,
    category: category,
    description: __("Embed a Google map."),
    keywords: [__("google"), __("map"), __("embed")],
    attributes: attributes,
    edit: edit,
    save: save
};
export { metadata, name, settings };
//# sourceMappingURL=index.js.map