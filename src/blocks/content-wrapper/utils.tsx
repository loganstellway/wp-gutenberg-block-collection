/**
 * Internal dependencies
 */
import { BackgroundAttributes, MediaQuery } from "../types";

/**
 * Container
 */
export interface ContainerBreakpoint {
  breakpoint: number;
  direction: MediaQuery;
  width: number;
}

/**
 * Attributes interface
 */
export interface ContentWrapperAttributes extends BackgroundAttributes {
  clientId?: string;
  breakpoints: ContainerBreakpoint[];
}

/**
 * Breakpoint styles
 */
export const breakpointStyles = (attributes: ContentWrapperAttributes) => {
  const { breakpoints, clientId } = attributes;

  return (
    <style type="text/css">
      {breakpoints.map(
        ({ breakpoint, direction, width }: ContainerBreakpoint) =>
          `@media(${direction}: ${breakpoint}px){` +
          `[data-block-id="${clientId}"] {` +
          `width: ${width}px;` +
          `}` +
          `}`
      )}
    </style>
  );
};
