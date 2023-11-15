import JobPostingsInterface from "../interfaces/JobPostingsInterface";

export default function JobTable({
  descriptions,
}: {
  descriptions: Array<JobPostingsInterface>;
}) {
  return (
    <div className="w-10/12 shadow overflow-x-auto grid-centered">
      <table className="table table-xs table-pin-rows">
        <thead>
          <tr className='font-bold text-xl'>
            <th>Job Title</th>
            <th>Company</th>
            <th>Description Summary</th>
            <th>Tech Stack</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {descriptions.map((item, i) => {
            return (
              <tr className="hover" key={i}>
                <td className="w-1/12">
                  <a href={item.job_url} target="_blank">{item.job_title}</a>
                </td >
                <td className="w-1/12">{item.company_name}</td>
                <td className="w-3/12">{item.job_description?.slice(0, 300)}</td>
                <td className="w-2/12">{item.json_response?.tech_stack?.join(", ")}</td>
                <td className="w-1/12">{item.json_response?.location}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
