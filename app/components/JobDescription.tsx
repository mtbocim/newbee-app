import JobListingsInterface from "../interfaces/JobListingsInterface";
import TagDataInterface from "../interfaces/TagDataInterface";

export default function JobDescription({
  jobDescription,
  selectedLocationTags,
  selectedTechTags,
}: {
  jobDescription: JobListingsInterface;
  selectedLocationTags: Array<TagDataInterface>;
  selectedTechTags: Array<TagDataInterface>;
}) {
  const techTags = selectedTechTags.map((i) => i.value);
  const locationTags = selectedLocationTags.map((i) => i.value);


  const hasTech = jobDescription.json_response?.tech_stack
    ? jobDescription.json_response?.tech_stack.some((value) =>
        techTags.includes(value)
      )
    : false;

  const hasLocation = jobDescription.json_response?.location
    ? locationTags.includes(jobDescription.json_response?.location)
    : false;

  const display = hasLocation && hasTech;

  return (
    <div >
      {display && (
        <div style={{width:'50vw'}}>
          <br />
          <div>{jobDescription.job_title}</div>
          <div>{jobDescription.json_response?.location}</div>
          <div>{jobDescription.json_response?.tech_stack?.join(" ")}</div>
        </div>
      )}
    </div>
  );
}
