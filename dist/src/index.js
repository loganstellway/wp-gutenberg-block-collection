/**
 * WordPress Dependencies
 */
import { registerBlockType } from "@wordpress/blocks";
/**
 * Blocks
 */
import * as googleMap from "./blocks/google-map";
[googleMap].forEach(function (block) {
    if (!block)
        return;
    var settings = block.settings, name = block.name;
    registerBlockType(name, settings);
});
//# sourceMappingURL=index.js.map