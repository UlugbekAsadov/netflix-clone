import { useEffect, useState } from "react";

export const Header = () => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    });
  }, []);

  return (
    <header
      className={`flex justify-between py-4 px-3 fixed w-full bg-black transition z-10  top-0 ${
        hasScrolled ? "bg-opacity-100" : "bg-opacity-0"
      }`}
    >
      <img src="/icons/logo.svg" alt="netflix-logo" className="w-24" />
      <img src="/images/user-icon.png" alt="user-icon" className="w-10" />
    </header>
  );
};
