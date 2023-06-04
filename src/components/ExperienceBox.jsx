import Image from "next/image"

const Arrow = () => (
  <div className="mt-0.5">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  </div>

)

const SkillBox = ({ skills }) => {
  return skills.map((skill, index) => {
    return (
      <div className="flex" key={index}>
        <Arrow />
        {skill}
      </div>
    )
  })
}
const AchievementBox = ({ achievements }) => {
  return achievements.map((ach, index) => {
    return <div className="flex" key={index}><Arrow />{ach}</div>
  })
}

export function ExperienceBox({ company }) {

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-900/5 shadow p-2">
      <div className="grid sm:grid-rows-4 grid-rows-5 ">
        <div className="grid-cols-4 row-span-1 grid">
          <div className="justify-center col-span-2 relative align-middle px-10 my-auto">
            <Image src={company.companyLogo} className="max-w-xs" height={100} width={100} alt={company.companyName} />
          </div>
          <div className="col-span-2 py-auto my-auto">
            <p className="text-gray-900 leading-10 text-xl">
              {company.companyName}
            </p>
          </div>
        </div>

        <div className="row-span-1 h-32">
          <div className="grid">
            <p className="text-gray-900 mx-2 mt-1 text-lg">
              {company.jobProfile}
            </p>
            <p className="mx-2 my-1 text-sm text-gray-600">
              {company.location}
            </p>
            <p className="mx-2 my-1 text-sm text-gray-600">
              {company.timePeriod}
            </p>
            <hr className="h-1" />
          </div>
        </div>
        <div className="sm:row-span-1 row-span-2 h-32 md:mx-1 mx-12 ">
          <p className="text-gray-900 pb-5 text-center">
            {company.description}
          </p>
        </div>
        <div className="row-span-1 grid grid-cols-4 mx-0.5 px-2 ">
          <div className="col-span-2">
            <p className="text-gray-900 text-xl">Achievements</p>
            <AchievementBox achievements={company.achievements} />
          </div>
          <div className="col-span-2">
            <p className="text-gray-900 text-xl">Skills used</p>
            <SkillBox skills={company.skillsUsed} />
          </div>
        </div>
      </div>
    </div>
  )
}