"use client";

import { useEffect, useState } from "react";

// import styles from "./page.module.css";

interface dataInterface {
  id: number;
  job_title: string;
  job_url: string;
  job_id: string;
  job_scraped_date: string;
  company_name: string;
  job_description: string;
  json_response?: {
      apply?: string;
      salary?: string;
      location?: string;
      department?: string;
      tech_stack?: string[];
  };
}

export default function Home() {
  const [data, setData] = useState<Array<dataInterface>>([]);
  const [techStackTags, setTechStackTags] = useState<Array<{ value: string; label: string }>>([]);
  const [locations, setLocations] = useState<Array<{ value: string; label: string }>>([]);

  useEffect(() => {
    async function getProjectsData() {
      const response = await fetch(`/api/job_postings`);

      const data = await response.json();
      const techStacks = new Set<string>();
      const jobLocations = new Set<string>();

      for(const item of data){
          if(item.json_response.tech_stack){
            for(const tech of item.json_response.tech_stack)
            techStacks.add(tech)
          }
          item.json_response.location && jobLocations.add(item.json_response.location)
        }

      setTechStackTags(() =>
        Array.from(techStacks, (value) => ({ value: value, label: value }))
      );
      setLocations(() =>
        Array.from(jobLocations, (value) => ({ value: value, label: value }))
      );
      setData(data);
    }
    getProjectsData();
  }, []);

  console.log(data);
  return (
    <main>
      <div>
        {/* <main className={styles.main}>
      <div className={styles.description}> */}
        Hello!
        {data.map((item, i) => {
          return (
            <div key={i} className="parent">
              <div>
                {item.job_title} --- {item.company_name}{" "}
                <a href={item.job_url}>Apply</a>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
