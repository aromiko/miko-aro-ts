import Building from "assets/images/building.jpg";
import Fujitsu from "assets/images/fujitsu.jpg";
import Fujitsu2 from "assets/images/fujitsu2.jpg";
import Homesetup from "assets/images/homesetup.jpg";
import Laptop from "assets/images/laptop.jpg";
import Misys from "assets/images/misys.jpeg";
import Stopover from "assets/images/stopover.jpg";
import Tanda from "assets/images/tanda.jpg";
import Tanda2 from "assets/images/tanda2.jpg";
import Zuellig from "assets/images/zuellig.jpg";

export const WorkHistoryData = [
  {
    company: "Bolton International",
    description:
      "Bolton International delivers streamlined and transparent remote talent solutions to support the world's fastest-growing companies",
    metaDescription:
      "Discover more on Miko's work experience at Bolton International",
    position: "Frontend Web Developer",
    tenure: "July 2020 - Present",
    imageUrl: Stopover,
    route: "bolton",
    theme: "#f58a20",
    sectionImage: Homesetup,
    sectionOne:
      "Joining Bolton International is a very new experience for me since it is during the COVID-19 pandemic. Work is now fully remote and I have to make some adjustments to be fully productive.",
    sectionTwo:
      "Creating an application for our client OpenEnvoy. They are a fintech startup company that audits every invoice for duplicate billings, excess charges, and supplier fraud. It is a very interesting, and challenging project because it is fast-paced and has some of the most talented people I have ever met.",
    technology: [
      "React",
      "Redux",
      "Typescript",
      "Bootstrap",
      "Material UI",
      "Storybook",
      "Nx",
      "AWS",
    ],
  },
  {
    company: "Tanda | Workforce",
    description:
      "Tanda / Workforce.com is a platform for workforce success that helps businesses build productive workforces to create more jobs",
    metaDescription:
      "Discover more on Miko's work experience at Tanda | Workforce",
    position: "Frontend Web Developer",
    tenure: "February 2020 - April 2020",
    imageUrl: Laptop,
    route: "workforce",
    sectionImage: Tanda,
    sectionImageTwo: Tanda2,
    sectionOne:
      "Became part of Tanda's marketing team. I created pages on the marketing website and helped on transitioning to their new brand, Workforce. Met people on different fields such as marketing manager, designers, content creators, and SEO specialists.",
    sectionTwo:
      "I've met some of the most fun and talented people here in Tanda and I wish I could have worked with them longer. Because of the COVID-19 pandemic, Tanda had to lay off some of their employees. I have experienced a lot of new and challenging things and despite of what happened, I'm still thankful because it made me wiser and stronger.",
    theme: "#3fafd6",
    technology: ["React", "Redux", "Typescript", "Tailwind CSS", "Wordpress"],
  },
  {
    company: "Fujitsu Philippines",
    description:
      "Fujitsu provides innovative IT services and digital technologies globally including cloud, mobile, AI and security solutions",
    metaDescription:
      "Discover more on Miko's work experience at Fujitsu Philippines",
    position: "Application Systems Engineer",
    tenure: "October 2016 - February 2020",
    imageUrl: Building,
    route: "fujitsu",
    theme: "#ec1d24",
    sectionImage: Fujitsu,
    sectionImageTwo: Fujitsu2,
    sectionOne:
      "My first full time job. Created applications for banking systems in Japan. Made prototypes for demos and converting prospects into clients.",
    sectionTwo:
      "Everything that I have experienced here shaped me to who I am today. I have learned a lot not only the technologies I used, but also the values in life that I am carrying with me up until this point. I have also made some of my closest friends here. They helped and supported me throughout my career in Fujitsu. Our teamwork made difficult work easy and fun.",
    technology: [
      "Angular",
      "React",
      "Redux",
      "Vue",
      "Javascript",
      "jQuery",
      "Bootstrap",
      "Angular Material",
      "Java",
      "SQL",
    ],
  },
  {
    company: "Misys Philippines",
    description:
      "Misys (now Finastra) offers one of the broadest portfolio of solutions for financial institutions of all sizes",
    metaDescription:
      "Discover more on Miko's work experience at Misys Philippines",
    imageUrl: Zuellig,
    position: "Software QA Tester Intern",
    tenure: "January 2016 - May 2016",
    route: "misys",
    theme: "#c137a2",
    sectionImage: Misys,
    sectionOne:
      "I had my on-the-job training in Misys Philippines. This is an eye opener because I got to see how it is like to work on a corporate setting.",
    sectionTwo:
      "As a Software QA intern, I have automated manual test cases using Java and Selenium for Misys' financial application.",
    technology: ["Java", "Selenium", "Jenkins"],
  },
];
