import { match as Match } from "react-suspense-router";

export type GitHubRepoData = {
  total_count: number;
  incomplete_results: number;
  items: {
    id: number;
    name: string;
    full_name: string;
    private: boolean;
    html_url: string;
    description: string;
    url: string;
    created_at: string;
    updated_at: string;
    git_url: string;
    homepage: string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string;
  }[];
};

const fetchGitHubRepoData = async (match: Match<{ query: string }>) => {
  const { query } = match.params;
  const url = `https://api.github.com/search/repositories?q=${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data as GitHubRepoData;
};

export default fetchGitHubRepoData;
