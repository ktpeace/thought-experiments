import HomeImages from "@/components/HomeImages";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-neutral-200">
      <section className="md:max-w-70p lg:max-w-60p flex flex-col gap-4">
        <h2 className="text-2xl">
          Welcome to{" "}
          <span className="font-bold">Thought Experiment Explorer!</span>
        </h2>
        <p className="text-neutral-200">
          Thought experiments are hypothetical situations that isolate moral
          dilemmas or concepts for contemplation and exploration. You can
          explore some of the most famous ones below. Some of these are as old
          as ancient Greece!
        </p>
        <p>
          While exploring thought experiments, it's important to keep in mind
          the <span className="font-semibold">spirit</span> or intention of the
          thought experiment. You can usually come up with an alternate action
          you could take: "I wouldn't do either of these! I'd just..." But{" "}
          <span className="font-semibold">
            this is missing the point of the experiment
          </span>
          .
        </p>
        <p>
          If you think an experiment is flawed, consider the dilemma or concept
          it's trying to isolate, and try to come up with a better thought
          experiment for that case instead.
        </p>
        <p className="font-bold text-lg">Happy thinking!🥂</p>
      </section>
      <HomeImages />
    </main>
  );
}
