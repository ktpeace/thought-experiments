import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "../icons/svgIcons";

const About = () => {
  return (
    <div className="main-container my-12 gap-4">
      <h2 className="mb-4 self-center text-3xl">About</h2>
      <section className="mb-8 flex flex-col gap-4">
        <p>
          <span className="font-semibold">ORIGIN:</span> Thought Experiment
          Explorer is a solo passion project begun in late May 2024. My
          motivations are my personal interests, programming practice, and
          belief that, especially today, we need to live more examined lives.
          Or, as the wise might put it, &quot;know thyself.&quot;
        </p>
        <p>
          <span className="font-semibold">FUTURE PLANS:</span> I&apos;ll soon
          add more thought experiments, small UX improvements, sorting, etc.
          Content-wise, I want to add some more thoughts post-voting for each
          experiment, but that&apos;s may be a bit. Contact me if there is a
          feature you&apos;d like to see.
        </p>
        <p>
          <span className="font-semibold">ART:</span> I generated the images
          using Midjourney. My feelings are not unmixed, but I am an indie
          developer (that&apos;s Glam for &quot;broke&quot;), not a
          mega-corporation who could have paid a real artist for dozens of
          original images. And it is pretty cool. That said, if I somehow make
          money off this site, I&apos;ll buy somethin&apos; from a local artist.
        </p>
      </section>
      {/* Contact / Donate */}
      <section className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="p-6 flex-1 flex flex-col gap-2 border bg-dusky-100 dark:bg-dusky-400 dark:bg-opacity-30 dark:border-dusky-400 rounded-lg">
          <h3 className="text-2xl text-center">✒️ Contact</h3>
          <p>
            Ideas? Polite criticisms? A job? Contact me at{" "}
            <a
              href="mailto:minmi_drover@proton.me"
              className="text-pool-500 font-medium break-words"
            >
              minmi_drover@proton.me
            </a>
          </p>
        </div>
        <div className="p-6 flex-1 flex flex-col justify-center gap-2 border bg-dusky-100 dark:bg-dusky-400 dark:bg-opacity-30 dark:border-dusky-400 rounded-lg">
          <h3 className="text-2xl text-center">☕️ Donate</h3>
          <p>
            Enjoying the site? Yay! Buy me a cup of coffee and
            &quot;coffee&quot; here means I need new socks.
          </p>
          <p className="italic opacity-80">
            25% of donations will go to charity and this will persist even if I
            inexplicably get a million smackers.
          </p>
          <div className="w-full flex flex-col justify-center items-center">
            <Link
              href="https://ko-fi.com/minmi_drover"
              className="flex gap-1 mt-4 inline-block w-full h-60 bg-cover bg-center bg-[url('/media/me-red.jpg')] text-center text-white font-medium rounded-lg shadow-md flex items-center justify-center hover:opacity-90"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ko-Fi <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
