import { css, cx } from "@emotion/css";
import { tokens } from "../tokens";
import { useToken } from "../useToken";

const Home = () => {
  const linear = tokens(10).find(
    (item) => item.id.type === "scale" && item.id.name === "linear"
  );

  const modular = tokens(5).find(
    (item) => item.id.type === "scale" && item.id.name === "modular"
  );

  const defaultLink = tokens().find(
    (item) => item.id.type === "link" && item.id.name === "default"
  );

  const defaultLinkDefaultState = defaultLink.styles.find(
    (style) => style.state === "default"
  );

  const linearScale = useToken("scale", "linear", null, 2);
  const modularScale = useToken("scale", "modular", null, 2);
  const defaultLink2 = useToken("link", "default");
  const defaultLinkDefaultState2 = useToken("link", "default", "default");
  const defaultFont = useToken("font", "Default");
  const failedFont = useToken("font", "default");
  const mobile = useToken("breakpoint", "mobile");

  return (
    <>
      <ul>
        <li>linearScale: {JSON.stringify(linearScale)}</li>
        <li>modularScale: {JSON.stringify(modularScale)}</li>
        <li>default link, all states: {JSON.stringify(defaultLink2)}</li>
        <li className={cx(css(defaultLinkDefaultState2))}>
          default link, default state:{" "}
          {JSON.stringify(defaultLinkDefaultState2)}
        </li>
        <li>default font: {JSON.stringify(defaultFont)}</li>
        <li>failed font: {JSON.stringify(failedFont)}</li>
        <li>mobile: {JSON.stringify(mobile)}</li>
      </ul>
      <hr />
      <ul>
        <li>Linear 10: {JSON.stringify(linear)}</li>
        <li>Modular 5: {JSON.stringify(modular)}</li>
        <li>
          Default link, default state: {JSON.stringify(defaultLinkDefaultState)}
        </li>
      </ul>
      <hr />
      <ul>
        <li>Tokens: {JSON.stringify(tokens())}</li>
      </ul>
    </>
  );
};

export default Home;
