/**
 * WordPress dependencies
 */
import { BlockSaveProps } from "@wordpress/blocks";

/**
 * Block save props
 */
export interface SaveProps<T> extends BlockSaveProps<T> {
  className: string;
}

/**
 * Media Query
 */
export type MediaQuery = "min-width" | "max-width";

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
