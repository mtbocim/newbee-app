import ContributorInterface from "../interfaces/ContributorInterface";
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function ContributorCard({
  contributorData,
}: {
  contributorData: ContributorInterface;
  }) {
  return (
    <div className='card card-side bg-info w-64 h-64 flex'>
      <div className='w-1/3 flex justify-center p-2'>
        <div
          className='avatar w-32 h-32 flex-shrink-0 rounded-full overflow-hidden bg-cover bg-center'
          style={{
            backgroundImage: `url('${contributorData.avatar_url}')`,
          }}></div>
      </div>
      <div className='card-body'>
        <h2 className='card-title'>{contributorData.name}</h2>
        <h3><b>{contributorData.location}</b></h3>
        <p className='card-info'>{contributorData.bio}</p>
        <span className='card-info'>
          <a href={contributorData.html_url} target="_blank"><GitHubIcon />
          </a> <a
            href={contributorData.blog} target="_blank"><WebIcon />
          </a> <a
            href='mailto:{contributorData.email}' target="_blank"><MailOutlineIcon  />
          </a>
        </span>
      </div>
    </div>
  );
}
