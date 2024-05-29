import HomeImages from "@/components/HomeImages";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-12 md:px-24 text-neutral-300">
      <section className="flex flex-col">
        <h2 className="text-5xl text-neutral-200 flex flex-col self-center">
          <span className="text-pool-500">Welcome</span>
          <span>to Thought</span>
          <span>Experiment</span>
          <span>Explorer.</span>
        </h2>
        <div className="flex justify-between">
          <button
            className={`rounded-full px-4 py-2 w-48 bg-pool-500 text-white hover:bg-pool-600 focus:outline-none focus:ring-2 focus:ring-pool-700 focus:ring-opacity-50 text-lg`}
          >
            What’s a thought experiment, exactly?
          </button>
          <button
            className={`rounded-full px-4 py-2 w-48 border hover:bg-pool-600 focus:outline-none focus:ring-2 focus:ring-pool-700 focus:ring-opacity-50 text-lg`}
          >
            Anything extra I should know before diving in?
          </button>
          <button
            className={`rounded-full px-4 py-2 w-48 bg-neutral-900 text-white hover:bg-neutral-950 focus:outline-none focus:ring-2 focus:ring-[#000] focus:ring-opacity-50 text-lg font-bold`}
          >
            GET TO THE EXPERIMENTS!
          </button>
        </div>
      </section>
    </main>
  );
}
