import Link from "next/link";
import moreItems from "./moreItems";
import { MailIcon } from "../icons/svgIcons";

const More = () => {
  return (
    <div className="main-container mt-8 md:mt-12 mb-16">
      <h2 className="self-center text-3xl">More Fun Thinkin&apos; Spots</h2>
      <p className="my-8">
        Hungry for more philosophy stuff that ain&apos;t just WALLS OF TEXT?
        Well!
      </p>
      <ul className="mb-4 flex flex-col gap-8">
        {moreItems.map((item) => {
          return (
            <li key={item.title}>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pool-500 font-semibold"
              >
                {item.icon}
                <h3 className="text-2xl">{item.title}</h3>
              </Link>
              {item.description}
            </li>
          );
        })}
      </ul>
      <p className="mt-4 p-4 flex items-center gap-2 text-xl rounded bg-dusky-100 dark:bg-dusky-600">
        <MailIcon /> Have more suggestions? Let me know at{" "}
        <a
          href="mailto:thought_experiment_explorer@proton.me"
          className="text-pool-500 font-medium"
        >
          thought_experiment_explorer@proton.me
        </a>
      </p>
    </div>
  );
};

export default More;
