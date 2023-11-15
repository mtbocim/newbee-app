"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import JobPostingsInterface from "../interfaces/JobPostingsInterface";

interface JobTableRowProps {
  item: JobPostingsInterface;
}

const JobTableRow: React.FC<JobTableRowProps> = ({ item }) => {
  const router = useRouter();

  const navigateToJob = () => {
    window.open(item.job_url, '_blank');
  };

  return (
    <tr
      className="hover cursor-pointer"
      onClick={navigateToJob}
    >
      <td className="w-1/12">{item.job_title}</td>
      <td className="w-1/12">{item.company_name}</td>
      <td className="w-3/12">{item.job_description?.slice(0, 300)}</td>
      <td className="w-2/12">{item.json_response?.tech_stack?.join(", ")}</td>
      <td className="w-1/12">{item.json_response?.location}</td>
    </tr>
  );
};

export default JobTableRow;


