import SkillCategory from '../components/SkillCategory'
import { skillCategories } from '../data/skills'

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-sm tracking-widest uppercase text-muted mb-4">About Me</h3>
          <p className="text-muted leading-relaxed mb-6">
            I'm currently pursuing my undergraduate in computer science at Shiv Nadar University.
            I absolute love building things. Doesn't matter what!
            My current objective is to try out different fields before I graduate to figure out what I like!
          </p>
          <p className="text-muted leading-relaxed mb-8">
            {/* [Add a second paragraph here: interests, goals, what you are looking for.] */}
          </p>
        </div>

        {/* Categorized Skills */}
        <div>
          <h3 className="text-sm tracking-widest uppercase text-muted mb-6">My Skills</h3>
          <div className="space-y-6">
            {skillCategories.map((category) => (
              <SkillCategory key={category.title} title={category.title} skills={category.skills} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About