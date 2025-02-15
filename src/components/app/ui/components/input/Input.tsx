import { costDelivery } from "@/src/lib/data";

export default function Input({
  showRequired = true,
  label,
  hidden,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label?: string; showRequired?: boolean }) {
  const isCheckbox = props.type === "checkbox";
  const isRadio = props.type === "radio";
  const isHaveLabel = label && label.length > 0;

  if (isCheckbox) {
    return (
      <div className="flex">
        <input {...props} />
        <label htmlFor={props.id} className="ml-2 text-sm">
          {label}
        </label>
      </div>
    );
  }

  if (isRadio) {
    return (
      <label htmlFor={props.id} className="flex border border-gray-300 rounded-2xl p-3 mb-1">
        <input {...props} />
        <div className="flex justify-between w-full">
          <p className="ml-2 text-lg">{label}</p>
          <p className="mr-2 text-sm font-medium">
            {costDelivery.get(Number(props.value) || 1)?.cost.toLocaleString("ru-RU", { style: "currency", currency: "RUB" })}
          </p>
        </div>
      </label>
    );
  }

  return (
    <div className={"flex flex-col" + (hidden ? " hidden" : "")}>
      {isHaveLabel ? (
        <>
          <label htmlFor={props.id} className="ml-2 mb-3">
            {label}
          </label>
          <div className="relative flex max-w-[400px]">
            <input {...props} className={"bg-white-100 flex-1 rounded-2xl py-4 px-6 text-base border-none mb-3 " + props.className} />
            {props.required && showRequired && <span className={"text-red-500 absolute right-4 top-[calc(50%-16px)]"}>*</span>}
          </div>
        </>
      ) : (
        <div className="relative flex max-w-[400px]">
          <input {...props} className={"bg-white-100 flex-1 rounded-2xl py-4 px-6 text-base border-none mb-3 " + props.className} />
          {props.required && showRequired && (
            <span className={"text-red-500 absolute right-4 " + (isHaveLabel ? "top-[calc(50%+2px)]" : "top-[calc(50%-16px)]")}>*</span>
          )}
        </div>
      )}
    </div>
  );
}
