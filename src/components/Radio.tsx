import unwrapFunction from "../tools/objects";

export default function Radio(props: {
  checked: boolean;
  className?: string;
  onChange?: (value: boolean) => void;
}): JSX.Element {
  return (
    <i
      className={`material-icons select-none text-pink-500 cursor-pointer ${props.className}`}
      onClick={() => unwrapFunction(props.onChange)(!props.checked)}
    >
      {props.checked ? "radio_button_checked" : "radio_button_unchecked"}
    </i>
  );
}
