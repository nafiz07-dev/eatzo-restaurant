function CenterDiv({ children }) {
  return (
    <div className="flex flex-col gap-3 lg:items-center lg:w-full">
      <div className="max-w-150 w-full">{children}</div>
    </div>
  );
}

export default CenterDiv;
