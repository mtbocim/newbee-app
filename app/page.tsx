"use client";

// import { useEffect, useState } from "react";
// import Select from "react-select";
// import JobDescription from "./components/JobDescription";
import '@/app/styles/globals.css'


// import styles from "./page.module.css";

// interface dataInterface {
//   id: number;
//   job_title: string;
//   job_url: string;
//   job_id: string;
//   job_scraped_date: string;
//   company_name: string;
//   job_description: string;
//   json_response?: {
//     apply?: string;
//     salary?: string;
//     location?: string;
//     department?: string;
//     tech_stack?: string[];
//   };
// }

// interface tagDataInterface {
//   value: string;
//   label: string;
// }

export default function Home() {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState<Array<dataInterface>>([]);

//   const [techStackTags, setTechStackTags] = useState<Array<tagDataInterface>>(
//     []
//   );
//   const [locationTags, setLocationTags] = useState<Array<tagDataInterface>>([]);

//   const [selectedLocations, setSelectedLocations] = useState<
//     Array<tagDataInterface>
//   >([]);
//   const [selectedTech, setSelectedTech] = useState<Array<tagDataInterface>>([]);

//   useEffect(() => {
//     async function getProjectsData() {
//       const response = await fetch(`/api/job_postings`);

//       const data = await response.json();
//       const techStacks = new Set<string>();
//       const jobLocations = new Set<string>();

//       for (const item of data) {
//         if (item.json_response.tech_stack) {
//           for (const tech of item.json_response.tech_stack)
//             techStacks.add(tech);
//         }
//         item.json_response.location &&
//           jobLocations.add(item.json_response.location);
//       }

//       setTechStackTags(() =>
//         Array.from(techStacks, (value) => ({
//           value: value,
//           label: value,
//         }))
//       );

//       setLocationTags(() =>
//         Array.from(jobLocations, (value) => ({
//           value: value,
//           label: value,
//         }))
//       );
//       setData(() => data);
//       setLoading(() => false);
//     }
//     getProjectsData();
//   }, []);

//   function handleSelectedTechTagsChange(
//     selectedValues: Array<tagDataInterface>
//   ) {
//     setSelectedTech(() => selectedValues);
//   }

//   function handleSelectedLocationTagsChange(
//     selectedValues: Array<tagDataInterface>
//   ) {
//     setSelectedLocations(() => selectedValues);
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

  return (
    // <main>
    //   <div style={{ display: "flex" }}>
    //     <Select
    //       closeMenuOnSelect={false}
    //       isMulti
    //       options={techStackTags}
    //       onChange={handleSelectedTechTagsChange}
    //       value={selectedTech}
    //       styles={selectStyles}
    //     />
    //     <Select
    //       closeMenuOnSelect={false}
    //       isMulti
    //       options={locationTags}
    //       onChange={handleSelectedLocationTagsChange}
    //       value={selectedLocations}
    //       styles={selectStyles}
    //     />
    //     {/* <main className={styles.main}>
    //   <div className={styles.description}> */}
    //     <div style={{ display: "flex", flexFlow: "column" }}>
    //       {selectedLocations.length !== 0 &&
    //         selectedTech.length !== 0 &&
    //         data.map((item: dataInterface, i) => (
    //           <JobDescription
    //             key={i}
    //             jobDescription={item}
    //             selectedTechTags={selectedTech}
    //             selectedLocationTags={selectedLocations}
    //           />
    //         ))}
    //     </div>
    //   </div>
    // </main>
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  );
}

const selectStyles = {
  control: (provided: any) => ({
    ...provided,
    width: "20vw",
    minWidth: "400px",
  }),
  menuList: (provided: any) => ({
    ...provided,
    width: "20vw",
    minWidth: "400px",
  }),
};
