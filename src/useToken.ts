import type {
  TTokenIds,
  TTokenNames,
  TState,
  TTokenId,
  TResponsiveStyle,
} from "./tokens";
import { tokens } from "./tokens";
import { isNil, isArray } from "lodash";

/**
 * Loads (recursively) a set of tokens.
 * @param 	tokens	An array of tokens.
 * @param	state	The state of the tokens.
 * @return          A style object
 */
const loadTokens = (tokens: TTokenId[], state?: TState, props?: any) => {
  return (
    tokens &&
    tokens.reduce((result, token) => {
      const { type, name, state: tokenState } = token;

      const newToken = loadAll(type, name, state, props);

      const newTokenFiltered =
        newToken && newToken.filter((item) => item.state === state).pop();

      return { state, ...result, ...newTokenFiltered };
    }, {})
  );
};

/**
 * Loads (recursively) the responsive style declarations.
 * @param 	responsive	An array of responsive style declarations.
 * @param	state		The state of the tokens.
 * @return          	A style object
 */
const loadResponsive = (responsive: TResponsiveStyle[]) => {
  return (
    responsive &&
    responsive.reduce((result, item) => {
      const { breakpoint, tokens, css } = item;

      const mediaQuery = loadAll("breakpoint", breakpoint).pop();
      const token = loadTokens(tokens);

      let query = {};
      for (let key in mediaQuery) {
        query[key] = { ...token, ...css };
      }

      return { ...result, ...query };
    }, {})
  );
};

const loadAll = (
  type?: TTokenIds,
  name?: TTokenNames,
  state?: TState,
  props?: any
): object[] | null => {
  if (isNil(type) || isNil(name)) return null;
  if (isNil(tokens)) return null;

  /**
   * Loads the token.
   */
  const token =
    tokens &&
    tokens(props).find((token) => {
      const { id } = token;
      const { type: tokenType, name: tokenName } = id;
      return type === tokenType && name === tokenName;
    });
  if (isNil(token?.styles)) return null;

  /**
   * Loads token styles.
   */
  const { styles } = token;

  /**
   * Loads token styles for a state.
   */
  const stylesForState =
    styles && styles.filter((style) => style.state === state);

  /**
   * If `state` is set only the styles for that state will be returned.
   */
  const styles2 = state ? stylesForState : styles;

  return (
    styles2 &&
    styles2.map((style) => {
      const { state, tokens, css, responsive } = style;

      const styleTokensObject = loadTokens(tokens, state, props);
      const responsiveObject = loadResponsive(responsive);

      return { ...styleTokensObject, ...css, ...responsiveObject };
    })
  );
};

const useToken = (
  type?: TTokenIds,
  name?: TTokenNames,
  state?: TState,
  props?: any
): object[] | object | null => {
  const tokens = loadAll(type, name, state, props);

  /**
   * Returns the token as is when it's not an array.
   */
  if (!isArray(tokens)) return tokens;

  /**
   * Returns a single style object without `state`, when tokens are a single element array.
   */
  if (tokens.length === 1) {
    const token = tokens.pop();
    const { state: tokenState, ...rest } = token;
    return rest;
  }

  /**
   * Returns an array of style objects.
   */
  return tokens;
};

export { useToken };
