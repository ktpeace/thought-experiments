import Image from "next/image";

const NextImage = ({
  src,
  alt,
  width = "w-80",
  height = "h-80",
}: {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}) => {
  return (
    <div className={`${width} ${height} relative`}>
      <Image src={src} alt={alt} fill className="object-contain rounded-lg" />
    </div>
  );
};

export default NextImage;
