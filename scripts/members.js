const members = [
    { name: "عضو ۱", picture: "pictures/member_image.png", resume: "رزومه نفر اول Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ex voluptatem soluta mollitia ut id placeat eos inventore. Blanditiis eligendi voluptatum ullam porro mollitia minus vel in, dignissimos impedit facere.", contact: "راه ارتباطی نفر اول" },
    { name: "عضو ۲", picture: "pictures/member_image.png", resume: "رزومه نفر دوم Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ex voluptatem soluta mollitia ut id placeat eos inventore. Blanditiis eligendi voluptatum ullam porro mollitia minus vel in, dignissimos impedit facere.", contact: "راه ارتباطی نفر دوم" },
    { name: "عضو ۳", picture: "pictures/member_image.png", resume: "رزومه نفر سوم Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ex voluptatem soluta mollitia ut id placeat eos inventore. Blanditiis eligendi voluptatum ullam porro mollitia minus vel in, dignissimos impedit facere.", contact: "راه ارتباطی نفر سوم" },
    { name: "عضو ۴", picture: "pictures/member_image.png", resume: "رزومه نفر چهارم Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ex voluptatem soluta mollitia ut id placeat eos inventore. Blanditiis eligendi voluptatum ullam porro mollitia minus vel in, dignissimos impedit facere.", contact: "راه ارتباطی نفر چهارم" },
    { name: "عضو ۵", picture: "pictures/member_image.png", resume: "رزومه نفر پنجم Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ex voluptatem soluta mollitia ut id placeat eos inventore. Blanditiis eligendi voluptatum ullam porro mollitia minus vel in, dignissimos impedit facere.", contact: "راه ارتباطی نفر پنجم" },
    { name: "عضو ۶", picture: "pictures/member_image.png", resume: "رزومه نفر ششم Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ex voluptatem soluta mollitia ut id placeat eos inventore. Blanditiis eligendi voluptatum ullam porro mollitia minus vel in, dignissimos impedit facere.", contact: "راه ارتباطی نفر ششم" },
    // Add more members as needed
];

const membersContainer = document.getElementById("members-container");
const memberInfoContainer = document.getElementById("member-info");
const memberName = document.getElementById("member-name");
const memberPicture = document.getElementById("member-picture");
const memberDetails = document.getElementById("member-details");
const backButton = document.getElementById("back-button");

// Populate members on the page
members.forEach((member, index) => {
    const memberCard = document.createElement("div");
    memberCard.className = "member-card";
    memberCard.innerHTML = `<img src="${member.picture}" alt="${member.name}"><br>${member.name}`;
    memberCard.addEventListener("click", () => showMemberInfo(index));
    membersContainer.appendChild(memberCard);
});

// Display member information when clicked
function showMemberInfo(index) {
    const selectedMember = members[index];
    memberName.textContent = selectedMember.name;
    memberPicture.src = selectedMember.picture;
    memberDetails.innerHTML = `<strong>رزومه:</strong><br>${selectedMember.resume}<br><br><strong>راه های ارتباطی:</strong><br>${selectedMember.contact}`;

    // Hide other member info and display the selected one
    memberInfoContainer.style.display = "block";
    membersContainer.style.display = "none";
}

// Go back to members list
function goBack() {
    memberInfoContainer.style.display = "none";
    membersContainer.style.display = "flex";
}