import ContributorInterface from "../interfaces/ContributorInterface";
import GitHubIcon from "@mui/icons-material/GitHub";
import ImportantDevicesSharpIcon from '@mui/icons-material/ImportantDevicesSharp';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function ContributorCard({
  contributorData, linkedInUrl
}: {
    contributorData: ContributorInterface;
    linkedInUrl: string;
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
        <h3>
          <b>{contributorData.location}</b>
        </h3>
        <p className='card-info'>{contributorData.bio}</p>
        <span className='card-info'>
          <a href={contributorData.html_url} target='_blank'>
            <GitHubIcon style={{ marginRight: '10px' }} />
          </a>
          <a href={contributorData.blog} target='_blank'>
            <ImportantDevicesSharpIcon style={{ marginRight: '10px' }}/>
          </a>

          <a href={linkedInUrl} target='_blank'>
          <LinkedInIcon style={{ marginRight: '10px' }} />
        </a>

          {/* The email addy is not accessible w/o token, or maybe some other workaround */}
          {/* <a
            href={`mailto:${contributorData.email}`}
            target='_blank'
            rel='noreferrer'>
            <MailOutlineIcon />
          </a> */}
        </span>
      </div>
    </div>
  );
}
