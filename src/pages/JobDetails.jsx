import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchJobs } from '../api/jobs';

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    async function loadJob() {
      const data = await fetchJobs();
      const foundJob = data.jobs.find(job => job.id.toString() === id);
      setJob(foundJob);
    }
    loadJob();
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <a href={job.url} target="_blank" rel="noopener noreferrer">Apply Now</a>
    </div>
  );
}

export default JobDetails;
