const workHistory = [
    {
        companyName: 'Clutch Technologies',
        role: 'Senior Software Engineer',
        duration: "October'21 – present",
        workDes: [
            'Led the system design of the backend API for Scholine, a school management system enabling schools to manage their curriculum, keep track of teachers’ productivity, and tally test results which are used to generate a report for parents via their mobile application.',
            'Built robust GraphQL APIs that interface with both PostgreSQL, and MongoDB databases.',
            'Introduced and followed a strict TDD methodology to ensure that a minimum amount of code is written to satisfy user needs, as well as ensure that breaking changes can easily be tracked.',
            'Dockerized the backend API to ensure that there’s a coherent development environment across the team.',
            'Built CI/CD pipelines using docker images via GitHub Actions to deployment on GCP Compute Engine and leading the backend/DevOps infrastructure teams.',
            'Setup and manage an agile dev cycle(scrum) within the organization to bring about fast delivery of features and bug fixes and manage the CI/CD delivery pipeline from the conception of user requirements to their breakdown into granular actionable tasks using git, CircleCI, GitHub Actions, and codeclimate to maintain a high quality of code hence minimizing tech debt.',
            'Mentor and support a team of junior engineers to debug code and provide clarity on tasks to meet user requirements in an agile development cycle.',
            'Lead the frontend team to build a responsive user interface for a product called Scholine which provides a management dashboard for schools and enables them to track staff performance, compile reports on learner performance, and relay them to guardians via their mobile app. The stack is React/Apollo and Tailwind CSS.'
        ],
        exposer: ["ReactJS", "TailwindCSS", "Django", "Python", "Celery", "RabbitMQ", "Docker", "Heroku", "CircleCI", "Digital Ocean"],
        link: 'https://clutchtechnologies.org/',
    },
    {
        companyName: 'BPOSeats',
        role: 'Backend Engineer',
        duration: "March'21 – Oct'21",
        workDes: [
            'Built backend APIs for in-house and client productivity engines, HQZen, BPOSeats.com, and ApplyBPO using an in-house custom framework called Sileo. Sileo extends Django and Django Rest Framework with improved scalability and optimization spanning over 2 million users.',
            'Built frontend interfaces using VueJS to interact with backend APIs for HQZen, and ApplyBPO.',
            'Led the initiative which introduced technical writing to the organization to enable developers to create written content about productivity hacks and a variety of topics ranging from optimizing database queries to how to implement certain tasks/features in Django.'
        ],
        exposer: ["Python", "Django", "Celery", "Redis", "PostgreSQL", "AWS", "CI/CD", "VueJS"],
        link: 'https://bposeats.com/',
    },
    {
        companyName: 'Sail Global Corporation',
        role: 'Technical Lead',
        duration: "Jan'20 – July'21",
        workDes: [
            'Built backend Django graphene APIs for Sail Access, an online consultancy platform that enables clients to remotely find consultancy solutions in a plethora of fields including legal, mining, technology, procurement, and marketing.',
            'Led backend architecture design for Sail Access, which included architecting a scalable database design and managing our DevOps infrastructure using Digital Ocean.',
            'Led the full-stack architecture of Sail Live, a paid event live-streaming web application using React, Redux, Firebase, AWS Kinesis Video Streams, and daily.co video API.',
            'Led the frontend development of Sail Live, a paid event live-streaming web application using React, Redux, Firebase, WebRTC, AWS Kinesis Video Streams, and daily.co video API.',
            'Led a team of mobile app developers that built a mobile application called Sail Live, a paid event live-streaming application using Flutter, Firebase, and daily.co video API.',
            'Inspired and oversaw the rebuild of the company’s official website in conjunction with various stakeholders; including UI/UX designers, software developers and senior management.',
            'Supported a recruitment process that has led to the recruitment of one UI/UX designer, two developers.',
            'Led product development teams wherein I interfaced with our product’s clients, received feedback, and bug reports, relayed them to the engineering team, and drove discussions around ways to ship the solution in the shortest amount of time with the most value.'
        ],
        exposer: ["Python", "ReactJS", "Django", "GraphQL", "PostgreSQL", "Firebase", "Digital Ocean", "CI/CD"],
        link: 'https://sailglobalcorp.com/',
    },
    {
        companyName: 'Mansa Technologies',
        role: 'Backend Engineer',
        duration: "October'19 – Oct'20",
        workDes: [
            'Built backend GraphQL APIs for Dispatch, a mobile hailing platform for ambulances that enables users to make requests for ambulances through a mobile app.',
            'Led backend architecture design for a product called Dispatch, which included influencing a change from RESTful APIs to GraphQL that led to an improved structure in the response data from the APIs, faster data queries also solving an overfitting/underfitting problem that we were facing with REST APIs.'
        ],
        exposer: ["Python", "Django", "GraphQL", "GCP", "PostgreSQL", "CI/CD"],
        link: 'https://mansatech.africa/',
    },
    {
        companyName: 'Andela',
        role: 'Software Engineer',
        duration: "November'18 – Oct'19",
        workDes: [
            'Built backend REST APIs in Python/Django and frontend interface in React/Redux for a product called Authors’ Haven which enables authors to write articles and readers find their articles of interest on an agile team.',
            'Served as Product Owner on the development team of Authors’ Haven, ensuring that the product comes to life from inception to deployment using an Agile/Scrum Development Methodology.',
            'Built backend GraphQL APIs as an apprentice on HealthID, enabling pharmacies to manage their inventory, do stock counts, automatically get notified about products that are expiring, make discount promotions, and schedule consultations.'
        ],
        exposer: ["Python", "Django", "GraphQL", "Heroku", "PostgreSQL", "React", "CI/CD"],
        link: 'https://andela.com/',
    },
];

export default workHistory;
