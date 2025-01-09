export async function fetchJobs() {
  const response = await fetch('https://remotive.io/api/remote-jobs');
  let data = await response.json();
  
  // Debugging: Log first job description
  console.log("Original Job Description:", data.jobs[0].description);
  
  // Fix broken California link
  data.jobs = data.jobs.map(job => ({
  ...job,
  description: job.description.replace(
  /https:\/\/www\.suvoda\.com\/california-applicant-privacy-notice-and-policy/g, // Regex to catch variations
  'https://correct-california-info.com' // Replace with a valid link
  )
  }));
  
  // Debugging: Log fixed description
  console.log("Updated Job Description:", data.jobs[0].description);
  
  return data;
  }