import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchJobs } from '../api/jobs';
import '../styles/JobDetails.css';

function JobDetails() 
{
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    async function loadJob() {
      const data = await fetchJobs();
      const foundJob = data.jobs.find(job => job.id.toString() === id);
      console.log("Full Job Description:", foundJob.description);
      setJob(foundJob);
    }
    loadJob();
  }, [id]);

  if (!job) return <p>Loading...</p>;

  // Define the correct California privacy policy link
  const californiaLink = "https://www.suvoda.com/california-applicant-privacy-notice-and-policy";

  // Fix broken links in job description
  const jobDescriptionSanitized = job.description.replace(
    /href="(?!http)([^"]+)"/g,
    `href="${californiaLink}" target="_blank" rel="noopener noreferrer"`
  );

  return (
    <div className="job-details-container">
      <h1>{job.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: jobDescriptionSanitized }} />
      <a href={job.url} className="apply-button" target="_blank" rel="noopener noreferrer">
        Apply Now
      </a>
    </div>
  );
}

export default JobDetails;