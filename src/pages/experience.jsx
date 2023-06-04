import Head from 'next/head'
import Image from 'next/image'

import { ExperienceBox } from '@/components/ExperienceBox'
import { SimpleLayout } from '@/components/SimpleLayout'
import unilever from "@/images/photos/companies/unilever.png"
import kores from "@/images/photos/companies/kores.png"
import drreddy from "@/images/photos/companies/drreddy.svg"
import ltfoods from "@/images/photos/companies/ltfoods.png"
import makson from "@/images/photos/companies/makson.jpg"
import parleagro from "@/images/photos/companies/parleagro.png"
import piramal from "@/images/photos/companies/piramal.png"
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'



const projectObjects = [
  {
    id: 1,
    companyName: "Kores (India) Limited",
    companyLogo: kores,
    timePeriod: "Aug 2017 - Present (5 yrs 9 mos)",
    location: "Ahmedabad, Gujarat",
    jobProfile: "Branch Manager",
    skillsUsed: ["Marketing Management", "Product Launch", "Sales Schemes", "Appointing T.S.I.s"],
    description: "Currently handling all of Gujarat. Includes 112 dealer and distributors across all districts, and managing 9 sales executives, and one ASM directly reporting to me.",
    achievements: ["Improved Outstanding Collection", "Appointed 8 S.E.s", "Appointed 1 A.S.M."]
  },
  {
    id: 2,
    companyName: "Dr. Reddy's Laboratories",
    companyLogo: drreddy,
    timePeriod: "Mar 2015 - Aug 2017 (2 yrs 6 mos)",
    location: "Vadodara, Gujarat",
    jobProfile: "Area Sales Manager",
    skillsUsed: ["Product Placement", "New Sales Routes", "Sales Operations", "Appointing S.E.s"],
    description: "Handled sales operations of the state of Gujarat. Managed 8 sales officers, reporting directly to me. Designed sales routes. Handled product placement during launches and did other brand extensions as well.",
    achievements: ["Created 16 new OTC Distributors", "Appointed 8 S.O.s"]
  },
  {
    id: 3,
    companyName: "LT Foods Ltd.",
    companyLogo: ltfoods,
    timePeriod: "May 2014 - Mar 2015 (11 mos)",
    location: "Ahmedabad, Gujarat",
    jobProfile: "Area Sales Manager",
    skillsUsed: ["Distribution Management", "Sales Operations"],
    description: "Handled sales throughout Gujarat, i.e. Primary and Secondary Sales. Took care of 8 super stockists and 25 sub stockists. Managed 6 sales officers on company payroll, and paved way for sales infrastructure for new product launches in the state.",
    achievements: ["Appointed 6 S.O.s", "Appointed 9 S.E.s"]
  },
  {
    id: 4,
    companyName: "Makson Group",
    companyLogo: makson,
    timePeriod: "Nov 2013 - May 2014 (7 mos)",
    location: "Vadodara, Gujarat",
    jobProfile: "Area Sales Manager",
    skillsUsed: ["Distribution Management", "Sales Operations", "New Sales Routes"],
    description: "Built sales infrastructure in the state of Gujarat from the start. Appointed new sales executives and representatives. Appointed super stockist and distributors.",
    achievements: ["Appointed 15 S.E.s", "Appointed 8 Super-Stockists across Gujarat"]
  },
  {
    id: 5,
    companyName: "Parle Agro Pvt. Ltd.",
    companyLogo: parleagro,
    timePeriod: "Aug 2012 - Nov 2013 (1 yr 4 mos)",
    location: "Vadodara, Gujarat",
    jobProfile: "Regional Growth Manager",
    skillsUsed: ["Distribution Management", "Appointing Distributors", "Sales Operations"],
    description: "Covering entire Central Gujarat, managing 19 growth officers on company payroll with direct reporting to me. Designed dispatch plans for distributors far from the depot. Focused on brand-wise achievements.",
    achievements: ["Appointed 7 Growth Officers", "Appointed 1 A.S.M."]
  },
  {
    id: 6,
    companyName: "Piramal Group",
    companyLogo: piramal,
    timePeriod: "Jul 2009 - Jul 2012 (3 yrs 1 mo)",
    location: "Vadodara, Gujarat",
    jobProfile: "Area Sales Manager",
    skillsUsed: ["Distribution Management", "Appointing Distributors", "Sales Operations", "Appointing S.E.s"],
    description: "Handled all OTC product sales for South Gujarat, covering 28 distributors across the territory, and handling 16 field force with directly answerable to me, delivering 60% growth year on year.",
    achievements: ["Achieved 60% year-on-year growth", "Appointed 28 distributors"]
  },
  {
    id: 7,
    companyName: "Unilever",
    companyLogo: unilever,
    timePeriod: "Jun 2004 - Jul 2009 (5 yrs 2 mos)",
    location: "Rajkot, Gujarat",
    jobProfile: "Territory Sales Incharge",
    skillsUsed: ["Interpersonnel Communication", "Marketing", "Sales"],
    description: "Handled all FMCG Sales products of Hindustan Unilever, including food and beverages, and home and personal care.",
    achievements: ["Received market-share increment award for the year 2006"]
  }
]



function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Experience - Rikesh Shah</title>
        <meta
          name="description"
          content="My work experience."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            My work experience
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;ve worked across a lot of sales streams - Stationery, FMCG, Retail, Commodity, and even OTC.
            My job profile has included a lot of responsibilities such as appointing new salesmen, setting up new
            distributors, designing local marketing schemes, designing schemes to counter competitors, and so on.
            Here&apos;s a list of my work experience.
          </p>
        </header>
        <a href="/cv.pdf" className='bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none'>
          Download CV
        </a>
        <div className="mt-16 sm:mt-20">

          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-1 lg:grid-cols-2"
          >
            {projectObjects.map((company) => (
              <ExperienceBox key={company.id} company={company} />
            ))}
          </ul>
        </div>
      </Container>

    </>
  )
}
