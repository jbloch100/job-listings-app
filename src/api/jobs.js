export async function fetchJobs() {
  const response = await fetch('https://remotive.io/api/remote-jobs');
  let data = await response.json();
  
  // Replace broken Suvoda California privacy link with a real working link
  data.jobs = data.jobs.map(job => ({
  ...job,
  description: job.description.replace(
  'https://www.suvoda.com/california-applicant-privacy-notice-and-policy',
  'https://policies.google.com/privacy?hl=en-US' // Replace with actual working link
  )
  }));
  
  return data;
  }