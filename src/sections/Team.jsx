import React from 'react'
import { motion } from 'framer-motion'
import './Team.css'

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Student 1',
      role: 'Nano Robotics Team Member',
      bio: 'Part of the 5-student Nano Robotics team contributing to the design, development, and testing of the modular rover system.',
      imageUrl: 'https://i.pravatar.cc/300?img=47',
      socialPrimary: 'ROBOTICS',
      socialSecondary: 'TEAMWORK',
    },
    {
      id: 2,
      name: 'Student 2',
      role: 'Nano Robotics Team Member',
      bio: 'Contributing to system integration, practical prototyping, and the collaborative development of the rover platform.',
      imageUrl: 'https://i.pravatar.cc/300?img=11',
      socialPrimary: 'EMBEDDED SYSTEMS',
      socialSecondary: 'PROTOTYPING',
    },
    {
      id: 3,
      name: 'Student 3',
      role: 'Nano Robotics Team Member',
      bio: 'Focused on building reliable subsystems and supporting the rover’s modular design for real-world testing.',
      imageUrl: 'https://i.pravatar.cc/300?img=5',
      socialPrimary: 'MECHANICAL DESIGN',
      socialSecondary: 'TESTING',
    },
    {
      id: 4,
      name: 'Student 4',
      role: 'Nano Robotics Team Member',
      bio: 'Supporting the team through problem solving, assembly, and refinement of the rover’s functional modules.',
      imageUrl: 'https://i.pravatar.cc/300?img=12',
      socialPrimary: 'SYSTEM INTEGRATION',
      socialSecondary: 'COLLABORATION',
    },
    {
      id: 5,
      name: 'Student 5',
      role: 'Nano Robotics Team Member',
      bio: 'Helping shape the project through iterative development, field-oriented thinking, and hands-on engineering work.',
      imageUrl: 'https://i.pravatar.cc/300?img=15',
      socialPrimary: 'FIELD DESIGN',
      socialSecondary: 'ENGINEERING',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 80, filter: 'blur(10px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15,
        mass: 1,
      },
    },
  }

  return (
    <section className="team-section">
      <div className="team-header">
        <h2 className="section-title">Nano Robotics</h2>
        <p className="team-subtitle">
          A team of 5 students collaborating on a modular robotics project focused on embedded control, mechanical design, and practical field-ready problem solving.
        </p>
      </div>

      <motion.div
        className="team-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        {teamMembers.map((member) => (
          <motion.div key={member.id} variants={cardVariants} className="team-card">
            <div className="team-image-wrapper">
              <img src={member.imageUrl} alt={member.name} className="team-image" />
              <div className="image-overlay">
                <button className="pill-btn dark small">TEAM MEMBER</button>
              </div>
            </div>

            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>

              <div className="team-socials">
                <a href="#" className="social-text-link">{member.socialPrimary}</a>
                <a href="#" className="social-text-link">{member.socialSecondary}</a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Team
