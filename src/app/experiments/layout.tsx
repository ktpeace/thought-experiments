// components/Layout.js
// import { useRouter } from "next/router";
// import Link from "next/link";

import SlidingImages from "@/components/SlidingImages";

const Layout = ({ children }: { children: React.ReactNode }) => {
  //   const router = useRouter();
  //   const currentPath = router.pathname;

  return (
    <div className="mt-12 mb-12 px-8 md:px-24 flex flex-col justify-center items-center">
      {/* <nav>
        <ul className={styles.navList}>
          {menuItems.map((item) => (
            <li
              key={item.path}
              className={currentPath === item.path ? styles.active : ""}
            >
              <Link href={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav> */}

      {children}

      <SlidingImages />
    </div>
  );
};

export default Layout;
