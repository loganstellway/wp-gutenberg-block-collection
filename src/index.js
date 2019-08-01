/**
 * WordPress Dependencies
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Blocks
 */
import * as aspectRatio from "./blocks/aspect-ratio";
import * as contentWrapper from "./blocks/content-wrapper";
import * as googleMap from "./blocks/google-map";

[aspectRatio, contentWrapper, googleMap].forEach(block => {
  if (!block) return;
  const { settings, name } = block;
  registerBlockType(name, settings);
});
