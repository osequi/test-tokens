import { css, cx } from "@emotion/css";
import { tokens } from "../tokens";

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

  return (
    <>
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
