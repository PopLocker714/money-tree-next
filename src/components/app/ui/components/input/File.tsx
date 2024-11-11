"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface IFile {
  keyName: string;
  initialValue?: string | null;
  label?: string;
}

export default function File({ initialValue = null, keyName, label }: IFile) {
  const [preview, setPreview] = useState<string | null>(initialValue);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <div className="flex flex-col">
      {label && <label htmlFor={keyName}>{label}</label>}
      <input onChange={handleFileChange} type="file" name={keyName} id={keyName} accept="image/*" />
      {preview && <Image src={preview} alt={keyName} width={200} height={200} className="w-[200px] h-[200px] object-cover" />}
    </div>
  );
}
