import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/listings" passHref>
        <Button variant="contained" style={{ backgroundColor: "#ffbe0b" }}>
          View Listings
        </Button>
      </Link>
    </>
  );
}
