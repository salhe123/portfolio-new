import { IoBookOutline, IoBriefcaseOutline } from 'react-icons/io5'

export default function Resume() {
  const education = [
    {
      title: "University school of the arts",
      period: "2007 — 2008",
      description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
    },
    {
      title: "New york academy of art",
      period: "2006 — 2007",
      description: "Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis."
    },
    {
      title: "High school of art and design",
      period: "2002 — 2004",
      description: "Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos."
    }
  ]

  const experience = [
    {
      title: "Creative director",
      period: "2015 — Present",
      description: "Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur."
    },
    {
      title: "Art director",
      period: "2013 — 2015",
      description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
    },
    {
      title: "Web designer",
      period: "2010 — 2013",
      description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
    }
  ]

  const skills = [
    { name: "Web design", percentage: 80 },
    { name: "Graphic design", percentage: 70 },
    { name: "Branding", percentage: 90 },
    { name: "WordPress", percentage: 50 }
  ]

  return (
    <article className="card resume">
      <header>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Resume</h2>
      </header>

      <section className="timeline mb-12">
        <div className="title-wrapper flex items-center mb-6">
          <div className="icon-box bg-blue-100 p-2 rounded-full mr-4">
            <IoBookOutline className="text-blue-600 text-xl" />
          </div>
          <h3 className="text-xl font-medium text-gray-800">Education</h3>
        </div>

        <ol className="timeline-list space-y-8 pl-8 border-l-2 border-gray-200">
          {education.map((item, index) => (
            <li key={index} className="timeline-item relative pl-6">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 top-1.5"></div>
              <h4 className="text-lg font-medium text-gray-800">{item.title}</h4>
              <span className="text-gray-500 text-sm block mb-2">{item.period}</span>
              <p className="text-gray-600">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline mb-12">
        <div className="title-wrapper flex items-center mb-6">
          <div className="icon-box bg-blue-100 p-2 rounded-full mr-4">
            <IoBriefcaseOutline className="text-blue-600 text-xl" />
          </div>
          <h3 className="text-xl font-medium text-gray-800">Experience</h3>
        </div>

        <ol className="timeline-list space-y-8 pl-8 border-l-2 border-gray-200">
          {experience.map((item, index) => (
            <li key={index} className="timeline-item relative pl-6">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 top-1.5"></div>
              <h4 className="text-lg font-medium text-gray-800">{item.title}</h4>
              <span className="text-gray-500 text-sm block mb-2">{item.period}</span>
              <p className="text-gray-600">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="skill">
        <h3 className="text-xl font-medium text-gray-800 mb-6">My skills</h3>

        <ul className="skills-list bg-white p-6 rounded-lg shadow-sm space-y-4">
          {skills.map((skill, index) => (
            <li key={index} className="skills-item">
              <div className="title-wrapper flex justify-between mb-1">
                <h5 className="text-gray-700 font-medium">{skill.name}</h5>
                <span className="text-gray-500">{skill.percentage}%</span>
              </div>
              <div className="skill-progress-bg w-full h-2 bg-gray-200 rounded-full">
                <div 
                  className="skill-progress-fill h-full bg-blue-500 rounded-full" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}