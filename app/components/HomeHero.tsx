import Image from "next/image";

export default function HomeHero() {
  return (
    <>
      <div className='hero min-h-400 bg-base-200'>
        <div className='hero-content flex-col lg:flex-row'>
          <Image src='/bee.png' alt='NewBee logo' width={100} height={100} />
          <div>
            <h1 className='text-5xl font-bold'>NewBee</h1>
            <h4 className='text-xl font-bold'>
              TAKING THE STING OUT OF THE JOB SEARCH
            </h4>
            <p className='py-2'>
              This app was designed by bootcamp grads turned Software Engineers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
