import Hero from "@/components/home/Hero";
import SectionTitle from "@/components/home/SectionTitle";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import ProjectGrid from "@/components/projects/ProjectGrid";

const workExperience = [
  {
    company: "ULH NHS Trust",
    role: "ICT Applications Developer",
    startDate: "2019-07",
    endDate: "2019-10",
    logo: "/ulh-nhs.png", // You'll need to add these logos to your public folder
    description: [
      "Created a stock control system for internal use throughout the trust.",
      "Implemented asset tracking and department assignment functionality."
    ],
    technologies: [".NET", "C#", "SQL Server", "DevExpress"]
  },
  {
    company: "Symphony RetailAI",
    role: "Junior Software Developer",
    startDate: '2019-10',
    endDate: '2021-09',
    logo: "/symphonyretailai.jpg",
    description: [
      "Worked primarily on a retailer CRM used by retailers internationally.",
      "Developed a desktop application for retailers to manage store floor plans and drive sales.",
      "Created a microservice for customer offer recommendations by productionising DBA's Python prototype in C#.",
      "Established new Azure DevOps deployment pipeline using ARM Templates."
    ],
    technologies: ["C#", ".NET", "SQL Server", "PostgreSQL", "Azure", "Selenium", "ASP.NET MVC", "KnockoutJS", "WPF", "Dapper", "CI/CD", "ARM Templates"]
  },
  {
    company: "Remarkable Commerce",
    role: "Software Developer",
    startDate: '2021-09',
    endDate: '2022-04',
    logo: "/remarkablecommerce.png",
    description: [
      "Worked on the Yours Clothing/Bad Rhino/LongTallSally team, working on their backend content management system.",
      "Led sprint planning and retrospectives.",
      "Delivered a high-throughput analytics dashboard showing real-time sales for use during Black Friday."
    ],
    technologies: ["C#", ".NET", "SQL Server", "Bootstrap", "jQuery", "ASP.NET MVC"]
  },
  {
    company: "Madgex",
    role: "Software Developer",
    startDate: '2022-04',
    endDate: 'Present',
    logo: "/madgex.png",
    description: [
      "Working on a JobBoard SaaS product for 200+ clients in the backend development team.",
      "Led end-to-end processes for new site builds, SSO implementations and general custom work.",
      "Helped train new developers and provided support when needed."
    ],
    technologies: ["Customer Facing", "C#", ".NET", "SQL Server", "Elasticsearch", "Kibana", "AWS"]
  }
];

const projects = [
  {
    title: "Asphalt",
    description: "Asphalt is a Discord bot that I have been working on since 2016, benefitted by over £377,000 worth of sponsorship from Sentry (sentry.io) since 2017. It currently has over 86,000,000 users.",
    imageUrl: "/projects/asphalt.png",
    technologies: ["C#", ".NET", "Discord.Net", "SQL Server", "Redis", "Graylog", "Azure ServiceBus", "Rust", "Go", "CircleCI", "Entity Framework", "Microservices"],
    liveUrl: "https://asphaltbot.com"
  },
  {
    title: "Watchtower",
    description: "Watchtower is a system that I created for Asphalt, which automatically monitors Asphalt and its microservices and attempts to automatically heal the service, only notifying me via text and phone call if it's unsuccessful.",
    imageUrl: "/projects/watchtower.png",
    technologies: ["C#", ".NET", "Twilio"],
    liveUrl: "https://watchtower.asphaltbot.com"
  },
  {
    title: "Lockza",
    description: "Lockza is a work in progress, which allows for file encryption and decryption using your USB drive as a key (i.e. when the USB is unplugged, the files will be re-encrypted automatically).",
    imageUrl: "/projects/lockza.png",
    technologies: ["C#", ".NET", "WPF", "C++"]
  },
  {
    title: "CensorMe",
    description: "CensorMe is an early work in progress, which allows people to upload audio clips and specify a list of words that they wish to be censored",
    imageUrl: "/projects/wip.png",
    technologies: ["C#", "Amazon Transcribe", "Amazon S3", "AWS Lambda"]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <Hero />
      
      {/* Experience Section */}
      <section id="experience" className="py-20 px-8 bg-gray-50/50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Professional Journey</SectionTitle>
          <ExperienceTimeline experiences={workExperience} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>My Projects</SectionTitle>
          <ProjectGrid projects={projects} />
        </div>
      </section>
    </div>
  );
}
