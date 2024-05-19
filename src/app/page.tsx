import HomeImages from "@/components/HomeImages";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-12 md:px-24 text-neutral-300">
      <section className="md:max-w-70p lg:max-w-60p mb-12 flex flex-col gap-4">
        <h2 className="text-2xl text-neutral-200">
          Welcome to{" "}
          <span className="font-bold">Thought Experiment Explorer!</span>
        </h2>
        <p>
          Thought experiments are hypothetical situations that isolate moral
          dilemmas or concepts for contemplation and exploration. You can
          explore and <span className="font-semibold">vote</span> on some of the
          most famous ones below. Some of these are as old as ancient Greece!
        </p>
        <p>
          While exploring thought experiments, it&apos;s important to keep in
          mind the <span className="font-semibold">spirit</span> or intention of
          the thought experiment. You can usually come up with an alternate
          action you could take: &quot;I wouldn&apos;t do either of these!
          I&apos;d just...&quot; But{" "}
          <span className="font-semibold">
            this is missing the point of the experiment
          </span>
          .
        </p>
        <p>
          If you think an experiment is flawed, consider the dilemma or concept
          it&apos;s trying to isolate, and try to come up with a better thought
          experiment for that case instead.
        </p>
        <p className="font-semibold text-lg">Happy thinking!🥂</p>
      </section>
      <HomeImages />
    </main>
  );
}
