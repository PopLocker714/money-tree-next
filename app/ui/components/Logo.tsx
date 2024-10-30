import Image, { ImageProps } from "next/image";

export default function Logo(props: ImageProps) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...props}>{props?.children}</Image>;
}
