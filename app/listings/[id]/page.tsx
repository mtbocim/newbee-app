import prisma from "@/app/lib/prisma";
import JobListingsInterface from "@/app/interfaces/JobListingsInterface";
import { Typography } from "@mui/material";
import { redirect } from "next/navigation";
import Header from "@/app/components/Header";
import Image from "next/image";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';

export default async function Listing({ params }: { params: { id: string } }) {
  const id = Number(params.id);

  if (isNaN(id)) {
    redirect("/listings");
  }

  try {
    const result = (await prisma.job_postings.findFirst({
      where: {
        id: id,
      },
    })) as JobListingsInterface;

    if (result === null) {
      //Add handling here for if result comes back empty.
      //Back to listings page? No result found error with button?
      return (
        <div>
          No such job found
          <br />
          <a href='/listings' style={{ color: "blue" }}>
            Back to listings
          </a>
        </div>
      );
    }
    console.log("");
    return (
      <>
      <Header pageName='Job Details'  />
      <div className='job-details'>
        {/* Job listing components here */}
        <Typography variant='h4'><WorkOutlineOutlinedIcon style={{ color: "#0c4a6e" }} /> {result.job_title}</Typography>
        <Typography variant='h5'> <BusinessOutlinedIcon style={{ color: "#0c4a6e" }} /> {result.company_name}</Typography>
        <Typography variant='h5'> <LocationOnOutlinedIcon style={{ color: "#0c4a6e" }}/> {result.json_response.location}</Typography>
        <br />
        <Typography variant='h6'>
          <MonetizationOnOutlinedIcon style={{ color: "#0c4a6e" }} /> Salary:{" "}
          {result.json_response.salary}
        </Typography>
        {/* NOTE:should tech stack ever be completly empty? */}
        <Typography variant='h6'>
          <SettingsApplicationsOutlinedIcon style={{ color: "#0c4a6e" }} /> Tech Stack:{" "}
          {result.json_response.tech_stack?.join(", ") || "not provided"}
        </Typography>
        <br />
        <div>
          {/* <DescriptionOutlinedIcon
            style={{ color: "#0c4a6e" }} />{" "} */}
          {result.job_description}
        </div>
        <br />
        <a href={result.job_url} target="_blank">
            <button className='btn btn-primary'>
              <CreateOutlinedIcon />
              apply here</button>
          </a>
          <br />
          <br />
          <a href='/'>
          <button className='btn btn-ghost'><FormatListBulletedSharpIcon />All listings</button>
          </a>
        </div>

        </>
    );
  } catch {
    console.log("error");
    // Not sure where to send people or what to display if query fails at the moment
  }
}
