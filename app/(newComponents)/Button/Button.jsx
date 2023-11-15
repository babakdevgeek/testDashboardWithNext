export default function Button({ text, children, color }) {
  return (
    <>
      <button
        className={
          color === "green"
            ? "rounded-md px-4 py-3 bg-next-green self-center text-xs hover:opacity-90 shadow-next-shadow"
            : "rounded-md px-4 py-3 bg-next-orange self-center text-xs hover:opacity-90 shadow-next-shadow"
        }
      >
        {text}
        {children}
      </button>
    </>
  );
}
