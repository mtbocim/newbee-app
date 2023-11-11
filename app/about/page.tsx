import Image from 'next/image'

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

    return( <div>
        About page
        {contribData.map(i=>{
            return(
                <div key={i.login}>
                    {i.name}
                    <Image src={i.avatar_url} alt={`${i.name}'s avatar`} width={100} height={100}/>    
                </div>
                
            )
        })}
        </div>
    )
}
