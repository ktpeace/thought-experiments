import Link from "next/link";

const About = () => {
  return (
    <div className="main-container my-12 gap-4">
      <h2 className="mb-4 self-center text-3xl">About</h2>
      <section className="mb-8 flex flex-col gap-4">
        <p>
          Thought Experiment Explorer is a solo passion project made starting in
          May 2024. My motivations are my personal interests, programming
          practice, and belief that, especially today, we need to live more
          examined lives. Or, as the wise might put it, &quot;know
          thyself.&quot;
        </p>
        <p>
          If you somehow stumbled on this work in progress today, go away and
          come back tomorrow.
        </p>
        <p>I generated the images using Midjourney.</p>
      </section>
      {/* Contact / Donate */}
      <section className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="p-6 flex-1 flex flex-col gap-2 border border-dusky-400 rounded-lg">
          <h3 className="text-2xl text-center">✒️ Contact</h3>
          <p>
            Ideas? Polite criticisms? Lucrative offers? Contact me at
            <a href="mailto:thought_experiment_explorer@proton.me">
              thought_experiment_explorer@proton.me
            </a>
          </p>
        </div>
        <div className="p-6 flex-1 flex flex-col justify-center gap-2 border border-dusky-400 rounded-lg">
          <h3 className="text-2xl text-center">☕️ Donate</h3>
          <p>
            Enjoying the site? I made it on my own freesy fer nuffin&apos;! Buy
            me a cup of coffee and &quot;coffee&quot; here means I need new
            socks.
          </p>
          <p>25% of donations will go to charity.</p>
          <div>Patreon will go here</div>
        </div>
      </section>
    </div>
  );
};

export default About;
