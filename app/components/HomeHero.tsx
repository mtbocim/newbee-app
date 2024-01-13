import Image from "next/image";

export default function HomeHero() {
  return (
    <>
      <div className="hero min-h-400 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src="/NewBee_bee.png"
            alt="NewBee logo"
            width={140}
            height={140}
          />
          <div>
            <Image
              src="/NewBee_title_and_slogan.png"
              alt="NewBee logo"
              width={260}
              height={260}
            />
            <p className="p-2">
              Created by passionate software engineers who started their
              journey <br />
              in a bootcamp, this app stems from our own challenges in finding <br />
              junior and truly entry-level opportunities in the tech industry.
            </p>
            <a href="/about">
              <button className="btn btn-primary">READ MORE</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
