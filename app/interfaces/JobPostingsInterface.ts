export default interface JobPostingsInterface {
    id: number;
    job_title: string | null;
    job_url: string;
    job_id: string;
    job_scraped_date: Date;
    company_name: string;
    job_description: string | null;
    json_response?: {
        apply?: string;
        salary?: string;
        location?: string;
        department?: string;
        tech_stack?: string[];
      };
}
  