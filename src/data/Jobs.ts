/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
  title: string;
  startDate: string;
  endDate?: string;
  company: string;
  location: string;
  description: string;
  goals: string[];
  currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience: WorkExperience[] = [
  {
    title: "Growth & SEO Lead",
    startDate: "2024-04-01",
    endDate: "",
    company: "VTG Hair - Vua Tóc Giả · Contract",
    location: "Vietnam",
    description: `
        <b>Achievements (Apr 2024 – Jul 2025):</b><br/>
- Increased website leads by +134%, peaking at +222%.<br/>
- Boosted website-driven revenue: starting from Apr 2024 as the 100% baseline, reached a peak at +270% — equal to 2.4× growth within 15 months, +6% MoM<br/>
- Built a sustainable growth model through Search strategy, CRO, Google Ads, and website touchpoints optimization.<br/>
-------------<br/>
<b>Scope:</b><br/>
- Lead Search strategy (SEO, AEO, GEO Local Maps, PR, Social) & Google Ads and direct cross-functional team to drive website growth focusing on GMV & CR improvements.<br/>
- Collaborate with development, sales, and content teams to improve website sales journey.<br/>
- Provide consultation and explore new touchpoint directions for long-term growth.<br/>
    `,
    goals: [],
    currentJob: true,
  },
  {
    title: "Sr Search Engine Optimization",
    startDate: "2023-08-01",
    endDate: "2025-03-01",
    company: "Shopee",
    location: "Vietnam",
    description: `
        - Consult Full-stack SEO specialized in On-page, Technical, and Content & UIUX (for Shopee.vn & Shopee Ecosystem (SPX, Shopee Blog, CS, Affiliate,..)<br/>
- Propose SEO strategy & manage freelancers for execution<br/>
- R&D SEO tactics applied such as using AI tools<br/>
    `,
    goals: [],
    currentJob: false,
  },
  {
    title: "Senior Performance Strategist",
    startDate: "2021-12-01",
    endDate: "2023-08-01",
    company: "Gameloft",
    location: "Vietnam",
    description: `
        > Propose, monitor and plan SEO full stack, CRO, A/B testing strategies, proposals & execution plan.<br/>
> Collect, clean data and generate insightful reports from pre-determined sources using BI tools<br/>
> Collaborate with product teams, marketing teams (paid ads, account) for implementation & reporting<br/>
    `,
    goals: [],
    currentJob: false,
  },
  {
    title: "Search Engine Optimization Team Lead",
    startDate: "2020-09-01",
    endDate: "2021-11-01",
    company: "TopOnSeek | Dịch vụ SEO uy tín",
    location: "Vietnam",
    description: `
        - Propose SEO strategies with detailed execution plan & resources assigned<br/>
- Leverage data analysis to track campaign performance with optimize audit & content plan<br/>
- Manage client communications for updates and reporting<br/>
- Manage content freelancers with quality assurance & guidelines<br/><br/>
<b>Project Highlights:</b><br/>
> Lazada.vn (E-commerce): Achieved TOP 5 search volume increase to 7M over 6 months.<br/>
> Jysk.vn: Enhanced SEO for a Scandinavian interior furniture brand.<br/>
> Cleanipedia.com: Optimized blog performance for Unilever.<br/>
> Dep365.com: Managed SEO for a beauty and health blog.<br/>
    `,
    goals: [],
    currentJob: false,
  },
  {
    title: "Sale and Marketing Leader",
    startDate: "2020-04-01",
    endDate: "2020-08-01",
    company: "TMP - The Brand Storytelling Agency",
    location: "Vietnam",
    description: `
        - Organize client meetings for briefings and proposal presentations, collaborating with vendors and stakeholders on content marketing, website design, event planning, and TVC ideation.<br/>
- Guide team members to achieve company goals through strategic consultation.<br/><br/>
<b>Work-on projects summary:</b><br/>
1. Dongfeng intergrated marketing: website development, social media content marketing (Facebook, Zalo), sale material kits.<br/>
2. Atlasfinefood website development pitching.<br/>
3. Nha Khoa Hà Thu Content Marketing (Facebook, video).<br/>
4. Donagamex website development pitching.<br/>
    `,
    goals: [],
    currentJob: false,
  },
  {
    title: "Marketing Executive",
    startDate: "2018-11-01",
    endDate: "2020-03-01",
    company: "BalanceJob",
    location: "Vietnam",
    description: `
    - Developed and executed content marketing and SEO strategies, overseeing social media management (Facebook, LinkedIn, Instagram) and coordinating with IT on website technical issues.<br/>
    - Led and supervised freelancers for content creation tasks.<br/><br/>
    <b>Achievement:</b><br/>
    1. Registered users up to 20k<br/>
    2. Traffic increased up to 1k5/day<br/>
    3. Facebook: 21k, Instagram: 7k followers<br/>
    4. Stable organic traffic: 1k/day<br/>
    `,
    goals: [],
    currentJob: false,
  },
  {
    title: "Account Executive",
    startDate: "2018-01-01",
    endDate: "2018-01-01",
    company: "Dentsu X",
    location: "Vietnam",
    description: "",
    goals: [],
    currentJob: false,
  },
  {
    title: "Crew",
    startDate: "2017-10-01",
    endDate: "2017-10-01",
    company: "Nordic Digital Business Summit",
    location: "Finland",
    description:
      "Livestreaming the event and broadcasting it to YouTube Channel",
    goals: [],
    currentJob: false,
  },
  {
    title: "Marketing Team Member",
    startDate: "2016-02-01",
    endDate: "2016-05-01",
    company: "Nordic Africa Trade Fair · Internship",
    location: "Finland",
    description:
      "Supporting event organization - Nordic Africa Trade and Investment Seminar with the participation of  speakers, companies and organizations coming from Finland and other Nordic countries",
    goals: [],
    currentJob: false,
  },
];
export default workExperience;
