import React from 'react';
import JobTableRow from './JobTableRow'; // Adjust the path as necessary
import JobPostingsInterface from "../interfaces/JobPostingsInterface";

interface JobTableProps {
  descriptions: Array<JobPostingsInterface>;
}

const JobTable: React.FC<JobTableProps> = ({ descriptions }) => {
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
          {descriptions.map((item, index) => (
            <JobTableRow key={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;
