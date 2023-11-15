export default function Select({ options, name }) {
  return (
    <>
      <select
        className="rounded-sm my-4 p-2 w-full text-next-deep-black "
        name={name}
      >
        {options.map((opt) => (
          <option value={opt.val} key={opt.val}>
            {opt.text}
          </option>
        ))}
      </select>
    </>
  );
}
