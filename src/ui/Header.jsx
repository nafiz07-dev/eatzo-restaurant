function Header({ type, children, className }) {
  if (type === "big") {
    return (
      <h1 className={`font-medium text-2xl mb-5 ${className}`}>{children}</h1>
    );
  }

  if (type === "small") {
    return (
      <h1 className={`font-medium text-[19px] mb-3 mt-5 ${className}`}>
        {children}
      </h1>
    );
  }

  return (
    <h1 className={`font-medium text-xl mb-3 mt-5 ${className}`}>{children}</h1>
  );
}

export default Header;
