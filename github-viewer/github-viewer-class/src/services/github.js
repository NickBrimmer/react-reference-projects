export const fetchUserDetails = username => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(({ name, login, avatar_url, html_url }) => ({
      name,
      username: login,
      image: avatar_url,
      profileUrl: html_url
    }));
};

export const fetchUserRepos = username => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
    .then(repos => repos.map(({ name, html_url, pushed_at }) => ({
      name,
      url: html_url,
      lastPush: pushed_at
    })));
};
