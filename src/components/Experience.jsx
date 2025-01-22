import React from 'react';
import checkmark from'../images/checkmark.png'
const Experience = () => {
  const frontendSkills = [
    { name: 'HTML', level: 'Experienced' },
    { name: 'CSS', level: 'Experienced' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'Reactjs', level: 'Intermediate' },
  ];

  const backendSkills = [
    { name: 'Node JS', level: 'basic' },
    { name: 'PHP', level: 'basic' },
    { name: 'Git', level: 'Intermediate' },
  ];
   
  const vedioEditingSkils=[
    {name:'Adobe premier pro',level:'basic'},
    {name:'Capcut',level:'basic'},
    {name:'Canva',level:'basic'},
    {name:'Thumbnail Desogn',level:'basic'},
    {name:'Content Creature',level:''}

  ]
  const SkillArticle = ({ skill }) => (
    <article>
      <img src={checkmark} alt="Experience icon" className="icon" />
      <div>
        <h3>{skill.name}</h3>
        <p>{skill.level}</p>
      </div>
    </article>
  );

  return (
    <section className="experience">
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {frontendSkills.map((skill, index) => (
                <SkillArticle key={index} skill={skill} />
              ))}
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              {backendSkills.map((skill, index) => (
                <SkillArticle key={index} skill={skill} />
              ))}
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Vedio Editing</h2>
            <div className="article-container">
              {vedioEditingSkils.map((skill, index) => (
                <SkillArticle key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
