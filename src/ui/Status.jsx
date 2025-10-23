function Status({ normal, children }) {
  if (normal) {
    return (
      <div className="border text-blue-500 rounded-sm  text-[12px] px-2">
        {children}
      </div>
    );
  }

  return (
    <div
      className={`${
        children === "pending"
          ? "border-yellow-500 text-yellow-500"
          : children === "canceled"
          ? "border-red-600 text-red-600"
          : "border-green-500 text-green-500"
      } border rounded-sm  text-[12px] px-2 `}
    >
      {children}
    </div>
  );
}

export default Status;
