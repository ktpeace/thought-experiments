import Link from "next/link";
import { CakeIcon, ChatIcon, VideoIcon } from "../icons/heroIcons";

const moreItems = [
  {
    title: "Absurd Trolley Problems",
    href: "https://neal.fun/absurd-trolley-problems",
    icon: <CakeIcon />,
    description: (
      <p>
        A site where animated stick figures respond to your choices in wild
        variations on the classic{" "}
        <Link href="/experiments/trolley-problem">Trolley Problem</Link>.
      </p>
    ),
  },
  {
    title: "The Million Yen Button",
    href: "https://www.youtube.com/watch?v=RbCerMBxUFM",
    icon: <VideoIcon />,
    description: (
      <p>
        This video depicts a single thought experiment, but text cannot do it
        justice. <span className="font-bold">Warning: may cause 😨</span>.
      </p>
    ),
  },
  {
    title: "Your Logical Fallacy Is",
    href: "https://yourlogicalfallacyis.com/",
    icon: <CakeIcon />,
    description: (
      <p>
        This site makes it enjoyable and easy to learn about different logical
        fallacies that can trip us up. Or to share them with people who
        won&apos;t stop being wrong. Not that I did it.
      </p>
    ),
  },
  {
    title: "Kurzgesagt",
    href: "https://www.youtube.com/@kurzgesagt",
    icon: <VideoIcon />,
    description: (
      <p>
        Gorgeous, well-researched animated videos on topics in science,
        philosophy, etc. Example titles include, &quot;The Paradox of an
        Infinite Universe,&quot; &quot;Loneliness,&quot; and, &quot;The Most
        Dangerous Weapon is Not Nuclear.&quot;
      </p>
    ),
  },
  {
    title: "The Conspiracy Test",
    href: "https://theconspiracytest.org/",
    icon: <CakeIcon />,
    description: (
      <p>
        An immersive in-browser game that tests your ability to think your way
        out of real conspiracy theories. (This is by School of Thought, the same
        as the logical fallacy site above. Check out their website for more
        stuff like this.)
      </p>
    ),
  },
  {
    title: "Less Wrong",
    href: "https://www.lesswrong.com/leastwrong",
    icon: <ChatIcon />,
    description: (
      <p>
        A forum site that aims to encourage rational thought. I haven&apos;t
        much engaged with it, so I can&apos;t speak to any issues. But it is
        surely full of ideas.
      </p>
    ),
  },
  {
    title: "Justice with Michael Sandel ",
    href: "https://www.youtube.com/playlist?list=PL30C13C91CFFEFEA6",
    icon: <VideoIcon />,
    description: (
      <p>
        A classic Harvard lecture series. Prof. Sandel presents foundational
        philosophers and ideas to the packed room, and students grab the mic to
        weigh in with their thoughts.
      </p>
    ),
  },
];
export default moreItems;
