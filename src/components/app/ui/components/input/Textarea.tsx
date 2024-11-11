import React from "react";

export default function Textarea({ label, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string }) {
  const isHaveLabel = label && label.length > 0;

  if (isHaveLabel) {
    return (
      <div className="flex flex-col relative">
        <label htmlFor={props.id} className="ml-2 mb-3">
          {label}
        </label>
        <textarea id={props.id} className="bg-white-100 rounded-2xl py-4 px-6 text-base border-none mb-3 resize-y" {...props} />
      </div>
    );
  }

  return (
    <textarea className="bg-white-100 flex w-full max-w-[400px] rounded-2xl py-4 px-6 text-base border-none mb-3 resize-y" {...props} />
  );
}
