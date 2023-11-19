import Image from "next/image";
import ContributorInterface from "../interfaces/ContributorInterface";

export default function ContributorCard({
  contributorData,
}: {
  contributorData: ContributorInterface;
  }) {
  return (
  <div className='card card-side bg-info'>
      <div className="avatar">
        <div className="w-48 rounded-full shadow-xl">
          <Image src={contributorData.avatar_url} alt='user' width={100} height={100} />
        </div>
    </div>
    <div className='card-body'>
      <h2 className='card-title'>{contributorData.name}</h2>
        <p>{contributorData.bio}</p>
        <p></p>
    </div>
    </div>
  )
}
