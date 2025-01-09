export async function fetchJobs() {
  const response = await fetch('https://remotive.io/api/remote-jobs');
  let data = await response.json();

  console.log("Fetched Jobs:", data.jobs);
  
  // Fix broken California links inside job descriptions
  /*data.jobs = data.jobs.map(job => ({
  ...job,
  description: job.description.replace(
  'https://broken-california-link.com', // Replace this with the incorrect URL from your API response
  'https://correct-california-info.com' // Replace this with a working link
  )
  }));*/
  
  return data;
  }
