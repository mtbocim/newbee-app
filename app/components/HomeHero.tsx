import Image from "next/image";

export default function HomeHero() {
  return (
    <>
      <div className='hero min-h-400 bg-base-200'>
        <div className='hero-content flex-col lg:flex-row'>
          <Image
            src='/NewBee_bee.png'
            alt='NewBee logo'
            width={200}
            height={200}
          />
          <div>
            <Image
              src='/NewBee_title_and_slogan.png'
              alt='NewBee logo'
              width={300}
              height={200}
            />
            <p className='p-2'>
              This app was designed by bootcamp grads turned Software Engineers{" "}
              <br />
              who grew frustrated by the search for Junior and Entry Level
              careers in tech.
            </p>
            <a href='/about'><button className='btn btn-primary'>READ MORE</button></a>
          </div>
        </div>
      </div>
    </>
  );
}
