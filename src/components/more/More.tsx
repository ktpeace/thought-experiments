import Link from "next/link";
import { CakeIcon, VideoIcon } from "../icons/heroIcons";
import moreItems from "./moreItems";

const More = () => {
  return (
    <div className="main-container mt-12 mb-16">
      <h2 className="mb-4 self-center text-3xl">More Fun Thinkin' Spots</h2>
      <p>
        Looking for more philosophy stuff that isn't just WALLS OF TEXT? I got
        ya!
      </p>
      <ul className="my-8 flex flex-col gap-8">
        {moreItems.map((item) => {
          return (
            <li key={item.title}>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pool-500"
              >
                {item.icon}
                <h3 className="text-2xl">{item.title}</h3>
              </Link>
              {item.description}
            </li>
          );
        })}
      </ul>
      <p>Have more suggestions? Let me know! ⬅ contact will go here someday</p>
    </div>
  );
};

export default More;
