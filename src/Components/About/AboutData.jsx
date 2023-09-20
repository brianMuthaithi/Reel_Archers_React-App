import image3 from "../../rez/cubed.jpeg";
import image4 from "../../rez/k2.jpeg";
import image5 from "../../rez/swim.jpg";
import image6 from "../../rez/kuwait.jpeg";

//projects
import img1 from "../../Assets/Projects/swimming/swim1.jpg";
import img2 from "../../Assets/Projects/commercial/com11.jpg";
import img3 from "../../Assets/Projects/petro-station/petro11.jpg";
import img4 from "../../Assets/Projects/resdential/res43.webp";
import img5 from "../../Assets/Projects/cultural/cul1.jpg";

//mission and vision
import mission from "../../Assets/Us/our-mission.png";
import vission from "../../Assets/Us/vission.png";

//team
import umme from "../../Assets/Team/umme.jpeg";
import thomas from '../../Assets/Team/thomas.jpeg'
import ogutu from '../../Assets/Team/ogutu.jpg'
import humphrey from '../../Assets/Team/humphrey.jpg'


export const data = [
  {
    image: image4,
    caption: "Interiors"
    },
  {
    image: image3,    
    caption: "Architecture"
  },
  {
    image: image6,
    caption: "Master Planning"
  },
  {
    image: image5,
    caption: "Public spaces design"
  }
];

export const values = [
  {
    name: "Our Mision",
    image: mission,
    text: "Our focus is on creating innovative, sustainable, and functional architecture that inspires and delights. By working closely with our clients, we bring their unique visions to life while also pushing the boundaries of what is possible.",
  },
  {
    name: "Our Vision",
    image: vission,
    text: "Reel Achers Studios strives to breakdown the boundaries of standards and use innovative and complex design opportunities making every project unique, realistic with its goals, construction features and style.",
  },
];

export const teams = [
  {
    name: "Ogutu Bryan",
    role: "Founder and Principal Architect",
    text: "Bryan is the founder of Reel Archer Studios. He is an architect who has worked on different projects for different clients.",
    image: ogutu,
  },
  {
    name: "Humphrey Omukaga",
    role: "Co-founder and Architect",
    text: "Humphrey is the co-founder of Reel Archer Studios. He is passionate about designing sustainable and functional buildings that enhance the lives of those who use them.",
    image: humphrey,
  },
  {
    name: "Umme-Kulsum",
    role: "Interior Designer",
    
    text: "Umme is a creative and detail-oriented interior designer. She specializes in transforming spaces with their expertise in color, texture, and lighting.",
    image: umme,
  },
  {
    name: "Bonuke Thomas",
    role: "Project Manager and Architect",
    text: "Thomas is a visionary architect. He brings a wealth of knowledge and expertise to every project, from initial concept to final execution.",
    image: thomas,
  },
];

export const projects = [
  { image: img1, name: "Luxury Swimming Pools" },
  { image: img2, name: "Commercials" },
  { image: img4, name: "Residentials" },
  { image: img5, name: "Cultural" },
  { image: img3, name: "Petrol Station" },
];
