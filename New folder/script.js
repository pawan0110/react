// API USED => https://api.github.com/users/username

const input_user = document.querySelector("#input");
const userImg = document.querySelector(".main-info");
const bio = document.querySelector("#bio");
const repos = document.querySelector("#repo");
const followers = document.querySelector("#followers");
const following = document.querySelector("#following");

const fetchUser = (user_name) => {
  fetch(`https://api.github.com/users/${user_name}`)
    .then((data) => data.json())
    .then((jsonData) => {
      if (jsonData.message === "Not Found") {
        alert("User Not Found");
        return;
      } else {
        userImg.innerHTML = `
          <img src="${jsonData.avatar_url}" alt="avatar" id="prof-img">
          <span class="name" id="name">${jsonData.name || "No Name Provided"}</span>
          <a href="${jsonData.html_url}" id="username" target="_blank">@${jsonData.login}</a>
        `;
        bio.innerHTML = jsonData.bio || "No Bio Available";
        repos.innerHTML = jsonData.public_repos;
        followers.innerHTML = jsonData.followers;
        following.innerHTML = jsonData.following;
      }
    })
    .catch((err) => {
      console.log("Catch: " + err.message);
      alert("Something went wrong. Please try again.");
    });
};

const getUser = () => {
  const user_name = input_user.value.trim();

  if (user_name.length === 0) {
    alert("Please enter a valid GitHub username");
  } else {
    fetchUser(user_name);
  }

  input_user.value = "";
};
