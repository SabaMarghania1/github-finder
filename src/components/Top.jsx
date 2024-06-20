import React from 'react';

export default function Top() {
  return (
    <div className="top">
      <img
        src="https://avatars.githubusercontent.com/u/583231?v=4"
        alt="avatar"
        className="avatar"
      />
      <div className="user-info">
        <div>
          <p className="user">The Octocat</p>
          <p className="username">@octocat</p>
        </div>
        <p className="date">Joined 25 Jan 2011</p>
      </div>
    </div>
  );
}
