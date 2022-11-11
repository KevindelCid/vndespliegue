// import Link from "next/link";
import ActiveLink from "./ActiveLink";
import styles from "./styles/Navbar.module.css";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

const NavBar = () => {
  return (
    <nav className={styles["nav-container"]}>
      {menuItems.map(({ text, href }) => (
        <ActiveLink key={href} text={text} href={href} />
      ))}
    </nav>
  );
};

export default NavBar;
