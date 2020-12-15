import { TScaleId, TScaleNames, scales } from "./scales";
import { TBreakpointId, TBreakpointNames, breakpoints } from "./breakpoints";

/**
 * Defines the available design token id types.
 */
export type TTokenIds = TScaleId | TBreakpointId;

/**
 * Defines the available design token id names.
 */
export type TTokenNames = TScaleNames | TBreakpointNames;

/**
 * Defines the states an element can be.
 * Shared by all interactive elements like link, button, etc.
 */
export type TState = "default" | "active" | "visited" | "disabled" | "hidden";

/**
 * Defines a design token id.
 * The id uniquely identifies a design token.
 * @example
 * 'font', 'default'
 * 'link', 'default', 'active'
 */
export type TTokenId = {
  type?: TTokenIds;
  name?: TTokenNames;
  state?: TState;
};

/**
 * Defines a design token style.
 * It can (recursively) contain other tokens.
 * It can represent style for a state.
 */
export type TStyle = {
  state?: TState;
  tokens?: TTokenId[];
  css?: object;
};

/**
 * Defines a design token.
 * - Uniquely identified.
 * - Fully styled.
 */
export type TToken = {
  id?: TTokenId;
  styles?: TStyle[];
  settings?: object;
};

/**
 * Collects all tokens.
 */
const tokens = (props?: any): TToken[] => [...scales(props), ...breakpoints];

export { tokens };
