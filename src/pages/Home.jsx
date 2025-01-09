import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchJobs } from '../api/jobs';

function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function loadJobs() {
      const data = await fetchJobs();
      setJobs(data.jobs);
    }
    loadJobs();
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <Link to={`/job/${job.id}`}>{job.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
