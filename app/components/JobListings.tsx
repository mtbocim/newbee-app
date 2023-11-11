'use client'

import { useEffect, useState } from "react";
import Select from "react-select";
import JobDescription from "./JobDescription";
import JobPostingsInterface from "../interfaces/JobPostingsInterface";
import TagDataInterface from "../interfaces/TagDataInterface";

//This is solely for temp styling the 'Select' component, and until adding tailwind styling
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

export default function JobListings({jobListingData}:{jobListingData:Array<JobPostingsInterface>}){

    const [data, setData] = useState<Array<JobPostingsInterface>>([]);

    const [techStackTags, setTechStackTags] = useState<Array<TagDataInterface>>(
      []
    );
    const [locationTags, setLocationTags] = useState<Array<TagDataInterface>>([]);

    const [selectedLocations, setSelectedLocations] = useState<
      Array<TagDataInterface>
    >([]);
    const [selectedTech, setSelectedTech] = useState<Array<TagDataInterface>>([]);

    useEffect(() => {
      async function getProjectsData() {
        const techStacks = new Set<string>();
        const jobLocations = new Set<string>();

        for (const item of jobListingData) {
          if (item.json_response?.tech_stack) {
            for (const tech of item.json_response.tech_stack)
              techStacks.add(tech);
          }
          item.json_response?.location &&
            jobLocations.add(item.json_response.location);
        }

        setTechStackTags(() =>
          Array.from(techStacks, (value) => ({
            value: value,
            label: value,
          }))
        );

        setLocationTags(() =>
          Array.from(jobLocations, (value) => ({
            value: value,
            label: value,
          }))
        );
        setData(() => jobListingData);
      }
      getProjectsData();
    }, [jobListingData]);

    function handleSelectedTechTagsChange(
      selectedValues: Array<TagDataInterface>
    ) {
      setSelectedTech(() => selectedValues);
    }

    function handleSelectedLocationTagsChange(
      selectedValues: Array<TagDataInterface>
    ) {
      setSelectedLocations(() => selectedValues);
    }

  return (
    <main>
      <div style={{ display: "flex" }}>
        <Select
          closeMenuOnSelect={false}
          isMulti
          options={techStackTags}
          onChange={handleSelectedTechTagsChange}
          value={selectedTech}
          styles={selectStyles}
        />
        <Select
          closeMenuOnSelect={false}
          isMulti
          options={locationTags}
          onChange={handleSelectedLocationTagsChange}
          value={selectedLocations}
          styles={selectStyles}
        />
        <div style={{ display: "flex", flexFlow: "column" }}>
          {selectedLocations.length !== 0 &&
            selectedTech.length !== 0 &&
            data.map((item: JobPostingsInterface, i) => (
              <JobDescription
                key={i}
                jobDescription={item}
                selectedTechTags={selectedTech}
                selectedLocationTags={selectedLocations}
              />
            ))}
        </div>
      </div>
    </main>
  )
}