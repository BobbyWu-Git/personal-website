export type QA = { 
  id: string; 
  topic: "badminton" | "climbing" | "tft" | "school" | "work" | "random"; 
  q: string; 
  a: { fun: string; serious: string } 
};

export const aboutQA: QA[] = [
  {
    id: "intro",
    topic: "random",
    q: "Hi! Who are you?",
    a: {
      fun: "Hey! I'm Bobby 👋 I build things people actually use (and occasionally break them in creative ways).",
      serious: "I'm Bobby, a Front-End & QA Automation Engineer who enjoys turning ideas into launchable products."
    }
  },
  {
    id: "why-code",
    topic: "work",
    q: "Why do you build things?",
    a: {
      fun: "Because shipping something people actually click is way better than writing cover letters nobody reads.",
      serious: "I love short feedback loops: design → build → test → learn. It's why I gravitate toward front-end and QA work."
    }
  },
  {
    id: "current-work",
    topic: "work",
    q: "What are you building right now?",
    a: {
      fun: "A WaterlooWorks helper extension and polishing my Live Caption demo (because accessibility is cool).",
      serious: "Working on a browser extension for job applications, refining accessibility features for my caption generator, and writing technical posts."
    }
  },
  {
    id: "badminton-deep",
    topic: "badminton",
    q: "How deep are you into badminton?",
    a: {
      fun: "Deep enough to schedule my entire week around court times and have strong opinions about feather vs nylon shuttles 🏸",
      serious: "I'm President of Operations for UW Badminton Club (~3,000 members), managing budgets up to $18k and coordinating events."
    }
  },
  {
    id: "badminton-ops",
    topic: "badminton",
    q: "What's it like running a 3,000-member club?",
    a: {
      fun: "Like herding cats, but the cats all want court time at 7 PM and have very specific shuttle preferences.",
      serious: "It's taught me capacity planning, stakeholder management, and how to scale operations without burning out volunteers."
    }
  },
  {
    id: "climbing-story",
    topic: "climbing",
    q: "What got you into climbing?",
    a: {
      fun: "Turns out I enjoy problems where the solution is 'just don't fall' and 'trust your feet more.'",
      serious: "I climb 2-3x per week, focusing on technique improvement and route reading. It's great for problem-solving mindset."
    }
  },
  {
    id: "climbing-progress",
    topic: "climbing",
    q: "What's your climbing like?",
    a: {
      fun: "Working through V4s and trying to stop barn-dooring like a screen door in a tornado 🧗‍♂️",
      serious: "Logging attempts and focusing on technique goals like smear confidence, pacing, and reading sequences efficiently."
    }
  },
  {
    id: "tft-rank",
    topic: "tft",
    q: "TFT rank? Be honest.",
    a: {
      fun: "Peaked Diamond in Set 10. I draft econ like a finance major and still somehow roll down at 3-2 🎲",
      serious: "I enjoy the strategic planning and risk management aspects—skills that transfer well to test planning and edge case analysis."
    }
  },
  {
    id: "tft-skills",
    topic: "tft",
    q: "How does TFT relate to your work?",
    a: {
      fun: "Both involve optimizing for multiple variables while everything is on fire and RNG hates you.",
      serious: "Resource management, probability assessment, and adapting strategies based on incomplete information—very relevant to QA work."
    }
  },
  {
    id: "school-study",
    topic: "school",
    q: "What did you study at UW?",
    a: {
      fun: "A little ops, a little econ, and a lot of 'wait, why is this algorithm O(n log n)?'",
      serious: "Focused on front-end development, QA automation, and operations through coursework and co-op experiences."
    }
  },
  {
    id: "school-coop",
    topic: "school",
    q: "Best thing about co-op?",
    a: {
      fun: "Getting paid to break things professionally and call it 'quality assurance.'",
      serious: "Real-world experience at Ansys and Manulife taught me how to scale testing, mentor teams, and ship reliable software."
    }
  },
  {
    id: "mentoring",
    topic: "work",
    q: "You mentored 50+ students?",
    a: {
      fun: "Yeah! Turns out teaching people to code is like teaching climbing—start with the basics and don't let them fall too hard.",
      serious: "Led code reviews and workshops at Manulife, achieving a 96% project pass rate. I love helping others grow their skills."
    }
  },
  {
    id: "testing-scale",
    topic: "work",
    q: "800+ tests sounds like a lot...",
    a: {
      fun: "It is! I basically became best friends with Python, pytest, and a very patient CI pipeline at Ansys.",
      serious: "Maintained regression test suites, integrated GPT-assisted generation, and optimized CI workflows to reduce manual verification time."
    }
  },
  {
    id: "proud-moment",
    topic: "random",
    q: "Non-tech thing you're proud of?",
    a: {
      fun: "Convincing my friends that 'one more game' is never actually just one more game (they still fall for it).",
      serious: "Growing the badminton club sustainably without burning out volunteers. Good systems beat heroic efforts every time."
    }
  },
  {
    id: "future-goals",
    topic: "work",
    q: "What's next for you?",
    a: {
      fun: "World domination through better UX and fewer broken tests. Also maybe learning to consistently hit cross-court drops.",
      serious: "Continuing to build accessible, AI-powered tools while growing as a technical leader and mentor."
    }
  }
];
