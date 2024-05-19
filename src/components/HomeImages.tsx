import Image from "next/image";
import Link from "next/link";

const HomeImages = () => {
  const imagesPath = "/images/experiment-icons/";

  const imageNames = [
    "trolley-problem",
    "mary-and-color-red",
    "ship-of-theseus",
  ];

  const imagesExtension = ".png";

  return (
    <div className="md:max-w-70p lg:max-w-50p flex gap-12">
      {imageNames.map((imageName, index) => (
        <Link key={imageName} href={`/experiments/${imageName}`}>
          <div key={index} className="flex-shrink-0 w-28 h-28 relative">
            <div className="w-full h-full relative overflow-hidden rounded-full border-2 border-white hover:opacity-50">
              <Image
                src={`${imagesPath}${imageName}${imagesExtension}`}
                alt={`Image ${index + 1}`}
                className="object-cover p-2"
                fill
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomeImages;
