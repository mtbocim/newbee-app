import Image from "next/image";
import ContributorInterface from "../interfaces/ContributorInterface";

export default function ContributorCard({
  contributorData,
}: {
  contributorData: ContributorInterface;
  }) {
  return (
  <div className='card card-side bg-base-100 shadow-xl'>
    <figure>
        <Image src={contributorData.avatar_url} alt='user' width={100} height={100} />
    </figure>
    <div className='card-body'>
      <h2 className='card-title'>{contributorData.name}</h2>
        <p>{contributorData.bio}</p>
      <div className='card-actions justify-end'>
        <button className='btn btn-primary'>Watch</button>
      </div>
    </div>
    </div>
  )
}
