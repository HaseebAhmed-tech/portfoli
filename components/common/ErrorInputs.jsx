import { Input } from "../ui/input";

function ErrorInputs({
  name,
  type,
  placeholder,
  error,
  divStyle,
  inputStyle,
  prefix,
  Icon,
}) {
  return !prefix ? (
    <div className={`flex flex-col ${divStyle}`}>
      <Input
        className={`placeholder:text-sm md:placeholder:text-base ${inputStyle}`}
        type={type ?? "text"}
        name={name}
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
    </div>
  ) : (
    <div className={`flex flex-col ${divStyle}`}>
      <div className="relative w-full ">
        <Icon className="absolute top-1/2 -translate-y-1/2 left-2 text-accent" />
        <Input
          className={`placeholder:text-sm md:placeholder:text-base pl-10 ${inputStyle}`}
          type={type ?? "text"}
          name={name}
          placeholder={placeholder}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
    </div>
  );
}

export default ErrorInputs;
