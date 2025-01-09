export async function fetchJobs() {
  const response = await fetch('https://remotive.io/api/remote-jobs');
  return response.json();
}
