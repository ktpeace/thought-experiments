import SlidingImages from "@/components/SlidingImages";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full mt-8 mb-12 px-4 sm:px-8 xl:px-24 flex flex-col justify-center items-center">
      {children}
      <SlidingImages />
    </div>
  );
};

export default Layout;
