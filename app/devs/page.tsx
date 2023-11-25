"use client";

import React, { useEffect, useState } from "react";
import ContributorInterface from "../interfaces/ContributorInterface";
import ContributorCard from "../components/ContributorCard";
import Header from "../components/Header";

const contributors = [
  "stzheng716",
  "MGHermanMancarella",
  "CodingHobo",
  "camrandev",
  "hbnnguyen",
  "mtbocim",
];

export default function Devs() {
  const [contribData, setContribData] = useState<ContributorInterface[]>([]);

  useEffect(() => {
    async function fetchContributors() {
      try {
        const responses = await Promise.all(
          contributors.map(username =>
            fetch(`https://api.github.com/users/${username}`)
          )
        );
        const data = await Promise.all(
          responses.map(res => res.json())
        ) as ContributorInterface[];
        setContribData(data);
      } catch (error) {
        console.error("Error fetching contributors:", error);
      }
    }

    fetchContributors();
  }, []);

  return (
    <>
    <Header pageName="Devs" />
    <div className="p-2">

        <div className="grid
                        grid-cols-1
                        sm:grid-cols-1
                        m:grid-cols-2
                        lg:grid-cols-2
                        xl:grid-cols-3
                        gap-6">
        {contribData.map(contributor => (
          <ContributorCard key={contributor.login} contributorData={contributor} />
        ))}
      </div>
      </div>
      </>
  );
}