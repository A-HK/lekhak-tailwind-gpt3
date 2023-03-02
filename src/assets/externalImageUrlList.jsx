/* all illustrations taken from Popsy : popsy.co*/

const ValidIllustrationCode = `const validColours = [
    "amber",
    "orange",
    "red",
    "pink",
    "fuchsia",
    "purple",
    "violet",
    "blue",
    "sky",
    "teal",
    "emerald",
    "green",
    "lime",
    "yellow",
    "white",
    "gray",
]

const validImgUrlList = [
 "/app-launch.svg",
 "/work-party.svg",
 "/achievement.svg",
 "/bitcoin-mining.svg",
 "/backpacking.svg",
 "/business-success-chart.svg",
 "/celebrating-business-success.svg",
 "/designer.svg",
 "/digital-nomad.svg",
 "/engineer.svg",
 "/falling.svg",
 "/finance-growth.svg",
 "/freelancer.svg",
 "/genius.svg",
 "/graphic-design.svg",
 "/happy-man-waving.svg",
 "/hitchhiking.svg",
 "/home-office.svg",
 "/man-on-a-bicycle.svg",
 "/man-riding-a-rocket.svg",
 "/paper-documents.svg",
 "/paper-plane.svg",
 "/presentation.svg",
 "/product-launch.svg",
 "/remote-work.svg",
 "/student-going-to-school.svg",
 "/success.svg",
 "/studying.svg",
 "/taking-notes.svg",
 "/web-design.svg",
 "/working-vacation.svg",
 "/work-party.svg",
 "/woman-with-a-laptop.svg",
]

const pickValidImgUrl1 = validImgUrlList[Math.floor(Math.random() * validImgUrlList.length)];
const pickValidImgUrl2 = validImgUrlList[Math.floor(Math.random() * validImgUrlList.length)];


export {pickValidImgUrl1, pickValidImgUrl2, validColours};
`

export default ValidIllustrationCode;