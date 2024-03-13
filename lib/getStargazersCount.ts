const repoUrl = 'https://api.github.com/repos/weijunext/NextjsTranslate';
const fallbackCount = 0o0;

export async function getStargazersCount() {
  try {
    const res = await fetch(repoUrl);
    const repo = await res.json();
    return repo.stargazers_count ?? fallbackCount;
  } catch (err) {
    return fallbackCount;
  }
}