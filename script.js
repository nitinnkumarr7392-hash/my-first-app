function scrollToApp() {
  document.getElementById("app").scrollIntoView({ behavior: "smooth" });
}

function generateIdeas() {
  const skill = document.getElementById("skillInput").value.trim();
  const category = document.getElementById("categorySelect").value;
  const resultsDiv = document.getElementById("results");

  if (!skill) {
    alert("Please enter a skill.");
    return;
  }

  resultsDiv.innerHTML = "";

  const ideasDatabase = {
    freelancing: [
      `Offer ${skill} services on Fiverr`,
      `Start freelancing ${skill} on Upwork`,
      `Provide consulting in ${skill}`,
      `Create gig packages for ${skill}`
    ],
    business: [
      `Start a small business using ${skill}`,
      `Sell digital products related to ${skill}`,
      `Create paid workshops for ${skill}`,
      `Build a startup around ${skill}`
    ],
    content: [
      `Start YouTube channel teaching ${skill}`,
      `Create Instagram content about ${skill}`,
      `Launch a blog on ${skill}`,
      `Make short-form videos on ${skill}`
    ],
    passive: [
      `Sell online course on ${skill}`,
      `Create ebook about ${skill}`,
      `Build automated digital assets with ${skill}`,
      `Start affiliate marketing related to ${skill}`
    ]
  };

  const selectedIdeas = ideasDatabase[category];

  selectedIdeas.forEach(idea => {
    const div = document.createElement("div");
    div.className = "result-card";
    div.innerText = idea;
    resultsDiv.appendChild(div);
  });
}
