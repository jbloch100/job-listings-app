import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchJobs } from '../api/jobs';
import '../styles/JobDetails.css';

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
    <div className="job-details-container">
      <h1>{job.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: job.description.replace( 
              /href="(https?:\/\/[^"]+)"/g, // Regex to find all external links
              'href="$1" target="_blank" rel="noopener noreferrer"'
      ) }}
    />
      <a href={job.url} className="apply-button" target="_blank" rel="noopener noreferrer">Apply Now</a>
    </div>
  );
}

export default JobDetails;
