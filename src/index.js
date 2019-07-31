/**
 * WordPress Dependencies
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Blocks
 */
import * as aspectRatio from "./blocks/aspect-ratio";
import * as googleMap from "./blocks/google-map";

[aspectRatio, googleMap].forEach(block => {
  if (!block) return;
  const { settings, name } = block;
  registerBlockType(name, settings);
});
