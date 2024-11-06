import { Input } from "../ui/input";

function IconInput({ divStyle, Icon, iconStyle, inputProps, set, name }) {
  return (
    <div className={`relative mb-3 ${divStyle}`}>
      <Icon
        className={`absolute left-3 top-1/2 -translate-y-1/2 text-accent ${iconStyle}`}
      />
      <Input
        placeholder={inputProps.placeholder}
        className="pl-10"
        name={name}
        defaultValue={inputProps.value}
        onChange={(e) => set(e.target.value)}
      />
    </div>
  );
}

export default IconInput;
