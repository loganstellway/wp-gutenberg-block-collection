/**
 * Internal dependencies
 */
import { BackgroundAttributes, JustifyContent, AlignItems } from "../types";

/**
 * Get ratio
 */
export const getRatio = (x: number, y: number) => (y / x) * 100;

/**
 * Attributes interface
 */
export interface AspectRatioAttributes extends BackgroundAttributes {
  x: number;
  y: number;
  minHeight: number;
  addMinHeight: boolean;
  minHeightUnit: string;
  justifyContent: JustifyContent;
  alignItems: AlignItems;
}
