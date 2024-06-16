import Image from "next/image";

const NextImage = ({
  src,
  width = "w-80",
  height = "h-80",
}: {
  src: string;
  width?: string;
  height?: string;
}) => {
  return (
    <div className={`${width} ${height} relative`}>
      <Image
        src={src}
        alt="delicate drawn-style trolley car"
        fill
        className="object-contain rounded-lg"
      ></Image>
    </div>
  );
};

export default NextImage;
