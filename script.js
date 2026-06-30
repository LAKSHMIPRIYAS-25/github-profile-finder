const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", async ()=> {

    const username = document.getElementById("username").value;

    const profile = document.getElementById("profile");
    if(username===""){
        profile.innerHTML="<h4>Please Enter a Username</h4>";
        return;
    }

    profile.innerHTML="<h4>Loading...</h4>";

    try{
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error("User Not Found");
        }

        const data = await response.json();

        profile.innerHTML=`<div class="text-center">
        <img src="${data.avatar_url}" width="150" alt="Profile Image">
        <h3 class="mt-3">${data.name ?? "No Name"}</h3>
        <p>${data.bio ?? "No Bio Available"}</p>
        <p><strong>Followers:</strong> ${data.followers}</p>
        <p><strong>Following:</strong> ${data.following}</p>
        <p><strong>Repositories:</strong> ${data.public_repos}</p>
        </div>
        `;
    }

    catch (error) {
        profile.innerHTML=`<h4>${error.message}</h4>`; 
    }


})