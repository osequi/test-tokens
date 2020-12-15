import { tokens } from "../tokens";
import { scales } from "../scales";

const Home = () => {
  const linear = scales(10).find((item) => item.id.name === "linear");
  const modular = scales(5).find((item) => item.id.name === "modular");

  return (
    <>
      <ul>
        <li>Linear 10: {JSON.stringify(linear)}</li>
        <li>Modular 5: {JSON.stringify(modular)}</li>
      </ul>
      <hr />
      <ul>
        <li>Tokens: {JSON.stringify(tokens())}</li>
      </ul>
    </>
  );
};

export default Home;
