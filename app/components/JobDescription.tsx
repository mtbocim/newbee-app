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

interface tagDataInterface {
  value: string;
  label: string;
}

export default function JobDescription({
  jobDescription,
  selectedLocationTags,
  selectedTechTags,
}: {
  jobDescription: dataInterface;
  selectedLocationTags: Array<tagDataInterface>;
  selectedTechTags: Array<tagDataInterface>;
}) {
  const techTags = selectedTechTags.map((i) => i.value);
  const locationTags = selectedLocationTags.map((i) => i.value);

  console.log("Are tags extracted correctly:", techTags, locationTags)
  
  const hasTech = jobDescription.json_response?.tech_stack
    ? jobDescription.json_response?.tech_stack.some((value) =>
        techTags.includes(value)
      )
    : false;

  const hasLocation = jobDescription.json_response?.location
    ? locationTags.includes(jobDescription.json_response?.location)
    : false;

    console.log("Are checks correct? ", hasLocation, hasTech)
  const display = hasLocation && hasTech;

  return (
    <div>
      {display && (
        <div>
          <br />
          <div>{jobDescription.job_title}</div>
          <div>{jobDescription.json_response?.location}</div>
          <div>{jobDescription.json_response?.tech_stack?.join(" ")}</div>
        </div>
      )}
    </div>
  );
}
