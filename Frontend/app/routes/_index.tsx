import Navbar from "~/component/navbar";
import styles from "../styles/index.css";
import Hero from "~/component/hero";
import Products from "~/component/products";
const _index = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Products/>
    </>
  );
};

export default _index;

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];
