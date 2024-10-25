import React from 'react';
import GitHubCalendar from 'react-github-calendar';

interface GitHubContributionsProps {
  username: string,
}

const GitHubContributions: React.FC<GitHubContributionsProps> = ({ username }) => {
  return (
    <div className="github_contributions">
      <div className="container mx-auto p-8">
        <h2>My Github contributions</h2>

        <div className="github_contributions_component mt-12">
          <GitHubCalendar
            username={username}
            colorScheme="dark"
            fontSize={14}
            blockSize={15}
          />
        </div>
      </div>
    </div>
  );
};

export default GitHubContributions;