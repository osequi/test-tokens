import { tokens } from "../tokens";
import { scales } from "../scales";

const Home = () => {
  const linear = scales(10).find((item) => item.id.name === "linear");

  return (
    <ul>
      <li>Tokens: {JSON.stringify(tokens)}</li>
      <li>Linear 10: {JSON.stringify(linear)}</li>
    </ul>
  );
};

export default Home;
