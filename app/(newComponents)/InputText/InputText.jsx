import styles from "./InputText.module.css";
export default function InputText({ label, name }) {
  return (
    <>
      <div className="relative">
        <input
          type="text"
          className={`rounded-sm my-4 p-1 w-full shadow-[1px 1px 4px red] ${styles.input} text-next-deep-black`}
          placeholder=""
          name={name}
        />
        <label htmlFor="" className="absolute bottom-5 right-3 text-gray-800">
          {label}
        </label>
      </div>
    </>
  );
}
