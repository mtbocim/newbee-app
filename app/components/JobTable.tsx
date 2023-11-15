import JobPostingsInterface from "../interfaces/JobPostingsInterface";

export default function JobTable({
  descriptions,
}: {
  descriptions: Array<JobPostingsInterface>;
}) {
  return (
    <div className="JobTable overflow-x-auto grid-centered">
      <table className="table table-xs table-pin-rows">
        <thead>
          <tr className='text-lg'>
            <th >Job Title</th>
            <th>Company</th>
            <th>Description Summary</th>
            <th>Tech Stack</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {descriptions.map((item, i) => {
            return (
              <tr key={i}>
                <td style={{width:'10vw'}}>
                  <a href={item.job_url} target="_blank">{item.job_title}</a>
                </td>
                <td>{item.company_name}</td>
                <td style={{width:'35vw'}}>{item.job_description?.slice(0, 160)}</td>
                <td style={{width:'35vw'}}>{item.json_response?.tech_stack?.join(", ")}</td>
                <td>{item.json_response?.location}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
