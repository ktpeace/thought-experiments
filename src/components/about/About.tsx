const About = () => {
  return (
    <div className="main-container mt-12 gap-4">
      <h2 className="mb-4 self-center text-3xl">About</h2>
      <section className="mb-8 flex flex-col gap-4">
        <p>
          Thought Experiment Explorer is a solo passion project made starting in
          May 2024. My motivations are my personal interests, programming
          practice, and belief that, especially today, we need to live more
          examined lives. Or, as the wise might put it, "know thyself."
        </p>
        <p>
          If you somehow stumbled on this work in progress today, go away and
          come back tomorrow.
        </p>
        <p>I generated the images using Midjourney.</p>
      </section>
      {/* Contact / Donate */}
      <section className="flex justify-between gap-8">
        <div className="p-4 px-6 flex-1 flex flex-col gap-2 border border-dusky-400 rounded-lg">
          <h3 className="text-2xl text-center">Contact</h3>
          <p>
            Ideas? Polite criticisms? Lucrative offers? Contact me at the email
            I am going to put here.
          </p>
        </div>
        <div className="p-4 px-6 flex-1 flex flex-col justify-center gap-2 border border-dusky-400 rounded-lg">
          <h3 className="text-2xl text-center">Donate</h3>
          <p>
            Enjoying the site? I made it on my own freesy fer nuffin'! Buy me a
            cup of coffee and "coffee" here means I need new socks:
          </p>
          <div>Patreon will go here</div>
        </div>
      </section>
    </div>
  );
};

export default About;
