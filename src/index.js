/**
 * WordPress Dependencies
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Blocks
 */
import * as googleMap from "./blocks/google-map";

[googleMap].forEach(block => {
  if (!block) return;
  const { settings, name } = block;
  registerBlockType(name, settings);
});
