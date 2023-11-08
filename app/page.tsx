"use client";

import { useEffect, useState } from "react";

// import styles from "./page.module.css";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getProjectsData() {
      const response = await fetch(`/api/job_postings`);
      const data = await response.json();
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
              <div>{item.job_title} --- {item.company_name} <a href={item.job_url}>Apply</a></div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
