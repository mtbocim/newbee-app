import Image from 'next/image'
import ContributorCard from '../components/ContributorCard';

const contributors = [
  "camrandev",
  "CodingHobo",
  "hbnnguyen",
  "MGHermanMancarella",
  "mtbocim",
  "stzheng716",
];

export default async function About() {
    const contribData = []
    for(const u of contributors){
        const response = await fetch(`https://api.github.com/users/${u}`)
        contribData.push(await response.json())
    }

    return( <div className="grid-centered">
        About page
        {contribData.map(contributor => {
            console.log(contributor)
            return(
                <div key={contributor.id}>
                    <ContributorCard contributorData={contributor} />
                </div>
            )
        })}
        </div>
    )
}
