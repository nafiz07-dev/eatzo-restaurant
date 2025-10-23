function Header({ type, children }) {
  if (type === "big") {
    return <h1 className="font-medium text-2xl mb-3">{children}</h1>;
  }

  return <h1 className="font-medium text-xl mb-3">{children}</h1>;
}

export default Header;
