export const links = [
  {
    href: "about",
    label: {
      pl: "O mnie",
      en: "About",
    },
  },
  {
    href: "education",
    label: {
      pl: "Wykształcenie",
      en: "Education",
    },
  },
  {
    href: "projects",
    label: {
      pl: "Projekty",
      en: "Projects",
    },
  },
  {
    href: "contact",
    label: {
      pl: "Kontakt",
      en: "Contact",
    },
  },
];

export const aboutData = {
  texts: {
    title: {
      pl: "O mnie",
      en: "About me",
    },
    desc: {
      pl:
        "Cześć! Jestem absolwentem Politechniki Wrocławskiej, na której uzyskałem stopień magistra " +
        "inżyniera z\u00A0Informatyki Stosowanej. Podczas studiów drugiego stopnia zawuażyłem, że najbardziej podoba mi się " +
        "programowanie w\u00A0ReactJS. Stowrzyliśmy wtedy projekt w\u00A0ReactNative na zaliczenie przedmiotu. Z\u00A0drugiej strony " +
        "koledzy wciągneli mnie w\u00A0Pythona. Dzięki temu napisałem magisterkę związaną z\u00A0uczeniem maszynowym i\u00A0jego możliwym " +
        "zastosowaniem w\u00A0infrastrukturze kolejowej. Zacząłem również uczyć się Django i\u00A0jego REST framework. Po studiach " +
        "poszedłem na studia podyplomowe z\u00A0Angulara oraz ReactJS, co pozwoliło mi utwierdzić się w\u00A0zamiłowaniu do React'a.\n" +
        "W\u00A0wolnych chwilach bardzo lubię majsterkować przy samochodzie, składać i\u00A0naprawiać komputery, grać w\u00A0gry wideo oraz " +
        "rozszerzać moją największą pasję jaką jest kolej.",
      en:
        "Hi! I'm a graduate of Computer Science at Wroclaw University of Technology. During second-level studies, " +
        "I realized that ReactJS is the library which I'm interested in. On the other side my friends introduced me to " +
        "the world of python. Then I wrote my master thesis using python for machine-learning libraries and started to work " +
        "with Django. After studies I tried Angular on post-graduate studies as well as I developed ReactJS skills.\n" +
        "In my spare time I repair and assemble computers, tinker with my car, play video games and travel by trains which are my biggest crush.",
    },
  },
};

export const projects = [
  {
    name: "JobsPortal",
    image: "./projects/jobsportal.webp",
    descriptionText: {
      pl:
        "Frontend projektu został stworzony w NextJS z\u00A0użyciem TypeScript, TailwindCSS oraz NextUI, " +
        "natomiast do backendu użyto django, djangoRESTframework oraz swagger." +
        "Jest to projekt inspirowany portalami do szukania pracy, takimi jak JustJoinIT",
      en:
        "This is project created in NextJS with TypeScript, TailwindCSS and " +
        "NextUI on frontend and django, djangoRESTframework, swagger on " +
        "backend. It's inspired with portals with jobs offers.",
    },

    stack: [
      "nextjs",
      "typescript",
      "nextui",
      "tailwindcss",
      "django",
      "swagger",
    ],
    github: "https://github.com/kysniw/jobsportal-app",
    demo: "https://jobsportal-app.vercel.app/",
  },
  {
    name: "WHERE2B",
    image: "./projects/where2b.webp",
    descriptionText: {
      pl:
        "Projekt stworzony na studiach magisterskich w\u00A0ramach projektu zespołowego w\u00A04-osobowej grupie." +
        "Moim zadaniem był frontend w\u00A0ReactNative. Aplikacja służy do wyszukiwania restauracji w\u00A0okolicy " +
        "z\u00A0ulubionym jedzeniem oraz umożliwia rezerwację miejsca.",
      en:
        "Project created to credit course during stuides. Worked on frontend with ReactNative. " +
        "App for restaurant owner and their clients to find favourite food and book a seat.",
    },

    stack: ["reactjs", "reactnative", "typescript", "django", "swagger"],
    github:
      "https://github.com/kysniw/WHERE2B/tree/restaurants-edit-frontend/client",
    demo: null,
  },
  {
    name: "ToDoApp",
    image: "./projects/todoapp.webp",
    descriptionText: {
      pl: "Jest to aplikacja stworzona na potrzeby zaliczenia przedmiotu z\u00A0ReactJS na studiach podyplomowych.",
      en: "This is project created in ReactJS with TypeScript, CSS and fake REST API json-server",
    },

    stack: ["reactjs", "typescript", "css"],
    github: "https://github.com/kysniw/react-todoapp-wsb",
    demo: null,
  },
];

export const educationBars = [
  {
    period: "2022 - 2023",
    headText: {
      pl: "Studia podyplomowe związane z\u00A0AngularJS i\u00A0ReactJS ",
      en: "Post-graduate studies with AngularJS and ReactJS.",
    },
    locationText: {
      pl: "WSB Merito w\u00A0Łodzi",
      en: "WSB Merito in Łódź",
    },
  },
  {
    period: "2021 - 2022",
    headText: {
      pl: "Stopień Magister Inżynier z\u00A0Informatyki Stosowanej",
      en: "Master of Engineering degree in Applied Computer Science",
    },
    centerText: {
      pl: "Studia drugiego stopnia w\u00A0dyscyplinie Informatyka Techniczna i\u00A0Telekomunikacja",
      en: "Second-level studies in the discipline of Information And Communication Technology",
    },
    locationText: {
      pl: "Politechnika Wrocławska we\u00A0Wrocławiu",
      en: "Politechnika Wrocławska in Wrocław",
    },
  },
  {
    period: "2017 - 2021",
    headText: {
      pl: "Stopień Inżyniera z\u00A0Informatyki",
      en: "Engineering degree in Computer Science.",
    },
    centerText: {
      pl: "Studia pierwszego stopnia w\u00A0dyscyplinie Informatyka Techniczna i\u00A0Telekomunikacja",
      en: "First-level studies in the discipline of Information And Communication Technology",
    },
    locationText: {
      pl: "Politechnika Lubelska w\u00A0Lublinie",
      en: "Politechnika Lubelska in Lublin",
    },
  },
];

export const contactData = {
  texts: {
    title: {
      pl: "Kontakt",
      en: "Contact",
    },
    placeholder: {
      fullName: {
        pl: "Imię i nazwisko",
        en: "Full Name",
      },
      email: {
        pl: "Adres email",
        en: "Email Address",
      },
      phoneNumber: {
        pl: "Numer telefonu",
        en: "Mobile Number",
      },
      subject: {
        pl: "Temat wiadomości",
        en: "Email Subject",
      },
      message: {
        pl: "Treść wiadomości",
        en: "Your Message",
      },
    },

    sendButton: {
      pl: "Wyślij",
      en: "Send message",
    },
    statusSuccess: {
      pl: "Wiadomość wysłana!",
      en: "Message sent!",
    },
    statusError: {
      pl: "Coś poszło nie tak, spróbuj później.",
      en: "Something went wrong, try again later.",
    },
    validationMessages: {
      required: {
        pl: "To pole jest wymagane!",
        en: "This field is required!",
      },
      length: {
        fullName: {
          pl: "Pole musi mieć więcej niż 4 i\u00A0mniej niż 30 znaków.",
          en: "Must be longer than 4 and shorter than 30.",
        },
        email: {
          pl: null,
          en: null,
        },
        phoneNumber: {
          pl: "Pole musi zawierać 9-13 cyfr/znaków.",
          en: "Field must have between 9 and 13 digits/signs.",
        },
        subject: {
          pl: "Temat musi mieć min. 5 oraz max. 30 liter.",
          en: "Subject must be from 5 to 30.",
        },
        message: {
          pl: "Wiadomość musi mieć liczbę znaków w\u00A0przedziale 20-400.",
          en: "Message must be longer than 20 and shorter than 400.",
        },
      },
      pattern: {
        fullName: {
          pl: "Uzupełnij 1-4 słowami w\u00A0zakresie 3-16 znaków.",
          en: "Fill with 1-4 words within 3-16 signs!",
        },
        email: {
          pl: "Zapisz email w\u00A0poprawnej formie.",
          en: "Please write valid email.",
        },
        phoneNumber: {
          pl: 'Numer musi mieć min. 9 cyfr i może zawierać "+"',
          en: 'Number must have min 9 digits and accept "+" sign',
        },
        subject: {
          pl: null,
          en: null,
        },
        message: {
          pl: null,
          en: null,
        },
      },
    },
  },
};
