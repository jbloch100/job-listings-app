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
console.log("Full Job Description:", foundJob.description);
setJob(foundJob);
}
loadJob();
}, [id]);

if (!job) return <p>Loading...</p>;

// Define the California privacy policy link
const californiaLink = "https://www.suvoda.com/california-applicant-privacy-notice-and-policy";

return (
<div className="job-details-container">
<h1>{job.title}</h1>
<div
dangerouslySetInnerHTML={{
__html: job.description.replace(
/href="(?!http)([^"]+)"/g,
'href="https://$1" target="_blank" rel="noopener noreferrer"'
)
}}
/>
<p>
If you are based in California, read this important information
<a href={californiaLink} target="_blank" rel="noopener noreferrer"> here</a>.
</p>
<a href={job.url} className="apply-button" target="_blank" rel="noopener noreferrer">
Apply Now
</a>
</div>
);
}

export default JobDetails;