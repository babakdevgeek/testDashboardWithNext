import { action } from "../../../lib/action";
import InputText from "../../../(newComponents)/InputText/InputText";
import Select from "../../../(newComponents)/Select/Select";
import Button from "../../../(newComponents)/Button/Button";
import { MusicNoteRounded } from "@mui/icons-material";
export default function AddForm() {
  return (
    <div className="m-8 text-center">
      <h2 className="mb-4">فرم افزودن موزیک</h2>
      <form action={action} className="flex flex-col gap-4 max-w-lg m-auto">
        <InputText label="نام موزیک..." id="musicName" name="musicName" />

        <InputText id="artist" name="artist" label="نام خواننده..." />
        <input type="file" name="musicFile" />
        <Select
          options={[
            { val: "rap", text: "رپ" },
            { val: "pop", text: "پاپ" },
            { val: "old", text: "قدیمی" },
          ]}
          name={"genre"}
        />
        <Button text={"افزودن موزیک"}>
          <MusicNoteRounded className="text-xs" />
        </Button>
      </form>
    </div>
  );
}
