const express = require('express')

const router = express.Router()

//=================================================================

var header = {
  name: {
    firstname: 'Dmytro',
    lastname: 'Ivanov',
  },

  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Ukraine, Kyiv 01001, Khreschatyk 1',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

router.get('/', function (req, res) {
  res.render('index', {})
})

// ================================================================

router.get('/summary', function (req, res) {
  res.render('summary', {
    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },

      experience: {
        title: `Other experience`,
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

router.get('/skills', function (req, res) {
  res.render('skills', {
    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code & NPM',
          point: 10,
          isTop: false,
        },
        {
          name: 'Git & Terminal',
          point: 9,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'sport',
          isMain: true,
        },
        {
          name: 'music',
          isMain: true,
        },
        {
          name: 'IT',
          isMain: true,
        },
        {
          name: 'dance',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

// ================================================================

router.get('/education', function (req, res) {
  res.render('education', {
    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'School #1',
          isEnd: true,
        },
        {
          name: 'College of digital technologies',
          isEnd: true,
        },
        {
          name: 'Ai school IT-Brains',
          isEnd: false,
        },
      ],

      certificates: [
        {
          name: 'School certificate',
          id: 21,
        },
        {
          name: 'College certificate',
          id: 0312,
        },
        {
          name: 'IT-Brains certificate',
          id: 1023,
        },
      ],
    },

    footer,
  })
})
router.get('/work', function (req, res) {
  res.render('work', {
    page: {
      title: 'Resume | Work',
    },
    layout: 'big',
    header,
    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Bains',
            url: null,
          },
          duration: {
            from: '21.01.23',
            to: null,
          },
          projectAmount: 1,
          stackAmount: 3,
          awardAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'http://resume.com.ua',
              about: `This modern resume template is an 
              exquisite,simple project which wouldbe an 
              excellent fit for more formal job applications 
              e.g.in the IT industry. If you’re applying 
              for retail or management roles, this document 
              layout is legible and stylish without being
              overbearing.`,
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML/CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: `Complete detailed programming a
                  nd development tasks for front end public
                  and internal websites as well as challenging
                  back-end server code.`,
                },
                {
                  name: `Cooperate with designers to create 
                  clean interfaces and simple, intuitive
                  interactions and experiences.`,
                },
              ],
            },
          ],
        },
      ],
    },
    footer,
  })
})

router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'person',

    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================

module.exports = router
