"use client";

import React, { useEffect, useState } from 'react';
import ContributorInterface from '../interfaces/ContributorInterface';
import ContributorCard from '../components/ContributorCard';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
          contributors.map(username => fetch(`https://api.github.com/users/${username}`))
        );
        const data = await Promise.all(responses.map(res => res.json())) as ContributorInterface[];
        setContribData(data);
      } catch (error) {
        console.error('Error fetching contributors:', error);
        // Optionally handle error state
      }
    }

    fetchContributors();
  }, []);

  return (
    <Box sx={{ width: '80%', padding: 2 }}>
      <Grid container spacing={2}>
        {contribData.map(contributor => (
          <Grid item xs={6} sm={4} md={4} lg={4} key={contributor.login}>
            <div className={`card card-side bg-info shadow-xl fixed-size-card`}>
              <ContributorCard contributorData={contributor} />
            </div>

          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
