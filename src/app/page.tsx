import HomeImages from "@/components/HomeImages";
import Image from "next/image";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="w-full min-h-screen flex flex-col justify-center">
        {/* Welcome text */}
        <h2 className="mb-24 text-6xl text-neutral-200 flex flex-col self-center">
          <span className="text-pool-500">Welcome</span>
          <span>to Thought</span>
          <span>Experiment</span>
          <span>Explorer.</span>
        </h2>
        {/* Welcome buttons */}
        <div className="w-full flex justify-center items-center gap-16">
          <button
            className={`w-72 px-4 py-1 rounded-lg bg-pool-500 text-white hover:bg-pool-600 focus:outline-none focus:ring-2 focus:ring-pool-700 focus:ring-opacity-50 text-2xl`}
          >
            What’s a thought experiment, exactly?
          </button>
          <button
            className={`w-72 px-4 py-1 rounded-lg border hover:bg-pool-600 focus:outline-none focus:ring-2 focus:ring-pool-700 focus:ring-opacity-50 text-2xl`}
          >
            Anything extra I should know before diving in?
          </button>
          <button
            className={`w-72 px-4 py-1 rounded-lg bg-white text-black hover:bg-neutral-950 focus:outline-none focus:ring-2 focus:ring-[#000] focus:ring-opacity-50 text-2xl font-bold`}
          >
            GET TO THE EXPERIMENTS!
          </button>
        </div>
      </section>

      <section>
        {/* What's a thought experiment? */}
        <div>
          <p>Thought experiments are a kind of mind game with a lofty goal.</p>
          <p>
            They describe situations that isolate moral principles or concepts
            about important ideas like “truth.” Often, they present difficult
            moral dilemmas and ask you to make a choice.
          </p>
          {/* <Image></Image>
          <Image></Image> */}
          <p>
            The choices you make may surprise you, and considering an experiment
            may even change your morality.
          </p>
          <p>Scary, huh?</p>
          <p>
            But avoiding exploration, relying on the ideas absorbed from one’s
            upbringing, society, and gut feeling...
          </p>
          <p>Well, my dog can do that (and a very fine dog she is).</p>
          {/* <Image></Image> */}
          <p>
            It’s better to live an examined life and forge paths of light in the
            dark, don’t you think?
          </p>
          {/* Yes/No buttons */}
        </div>
      </section>
    </>
  );
}
