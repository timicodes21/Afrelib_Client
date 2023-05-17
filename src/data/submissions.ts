export const data = [
  {
    index: 1,
    title: "AI Chatbot",
    team: "Team 03",
    submittedBy: "Peter Umoh",
    url: "example@mail.com",
    feedback: [
      {
        name: "Michael Lewis",
        image: "https://api.dicebear.com/6.x/adventurer/svg?seed=Pepper",
        comment: `I always felt like I could do anything. That is the main thing people are controlled by! Thoughts- their perception of themselves!`,
      },
      {
        name: "Michael Lewis",
        image: "https://api.dicebear.com/6.x/adventurer/svg?seed=Pepper",
        comment:
          "I always felt like I could do anything. That is the main thing people are controlled by! Thoughts- their perception of themselves!",
      },
      {
        name: "David Mark",
        image: "https://api.dicebear.com/6.x/adventurer/svg?seed=Chester",
        comment:
          "In hopes of finding out the truth, he entered the one-room library.",
      },
      {
        name: "Mr Marcelo",
        image: "https://api.dicebear.com/6.x/adventurer/svg?seed=Milo",
        comment: "It was the scarcity that fueled his creativity.",
      },
    ],
    comments:
      "Lorem ipsum dolor sit amet. Vel architecto dignissimos non quia maiores non quia assumenda sit similique expedita est dolores quos aut debitis architecto ex nobis maxime. Eos repellat sunt hic possimus rerum aut doloribus culpa sit doloribus",
    points: 600,
    date: "26/04/2023",
  },
  {
    index: 2,
    url: "example@mail.com",
    title: "Drone Delivery App",
    team: "Team 03",
    submittedBy: "Peter Umoh",
    feedback: [
      {
        name: "David Angelo",
        image: "https://api.dicebear.com/6.x/adventurer/svg?seed=Boots",
        comment: "Some bathing suits just shouldn’t be worn by some people.",
      },
      {
        name: "Mr Marcelo",
        image: "https://api.dicebear.com/6.x/adventurer/svg?seed=Milo",
        comment:
          "Going from child, to childish, to childlike is only a matter of time.",
      },
    ],
    comments:
      "Lorem ipsum dolor sit amet. Vel architecto dignissimos non quia maiores non quia assumenda sit similique expedita est dolores quos aut debitis architecto ex nobis maxime. Eos repellat sunt hic possimus rerum aut doloribus culpa sit doloribus",
    points: 300,
    date: "25/04/2023",
  },
  {
    index: 3,
    url: "example@mail.com",
    title: "Project Zen",
    team: "Team 03",
    submittedBy: "Peter Umoh",
    feedback: [
      {
        name: "Femi Otedola",
        image: "https://api.dicebear.com/6.x/adventurer/svg?seed=Chester",
        comment:
          "It was the first time he had ever seen someone cook dinner on an elephant.",
      },
      {
        name: "Mr. James",
        image: "https://api.dicebear.com/6.x/adventurer/svg?seed=Bear",
        comment: "Some bathing suits just shouldn’t be worn by some people.",
      },
      {
        name: "William Oliver",
        image: "https://api.dicebear.com/6.x/adventurer/svg?seed=Simon",
        comment:
          "The beauty of the sunset was obscured by the industrial cranes.",
      },
    ],
    comments:
      "Lorem ipsum dolor sit amet. Vel architecto dignissimos non quia maiores non quia assumenda sit similique expedita est dolores quos aut debitis architecto ex nobis maxime. Eos repellat sunt hic possimus rerum aut doloribus culpa sit doloribus",
    points: 1000,
    date: "23/04/2023",
  },
  {
    index: 4,
    url: "example@mail.com",
    title: "E-Commerce Project",
    team: "Team 03",
    submittedBy: "Peter Umoh",
    feedback: [
      {
        name: "Mr William",
        image: "https://api.dicebear.com/6.x/adventurer/svg?seed=Bear",
        comment: "It didn't make sense unless you had the power to eat colors.",
      },
    ],
    comments:
      "Lorem ipsum dolor sit amet. Vel architecto dignissimos non quia maiores non quia assumenda sit similique expedita est dolores quos aut debitis architecto ex nobis maxime. Eos repellat sunt hic possimus rerum aut doloribus culpa sit doloribus",
    points: 400,
    date: "23/04/2023",
  },
  {
    index: 5,
    url: "example@mail.com",
    title: "Micro-Raptor",
    team: "Team 03",
    submittedBy: "Peter Umoh",
    feedback: null,
    comments:
      "Lorem ipsum dolor sit amet. Vel architecto dignissimos non quia maiores non quia assumenda sit similique expedita est dolores quos aut debitis architecto ex nobis maxime. Eos repellat sunt hic possimus rerum aut doloribus culpa sit doloribus",
    points: 0,
    date: "21/04/2023",
  },
  {
    index: 6,
    url: "example@mail.com",
    title: "Image-Generator",
    team: "Team 03",
    submittedBy: "Peter Umoh",
    feedback: [
      {
        name: "Mr Oliver",
        image: "https://api.dicebear.com/6.x/adventurer/svg?seed=Bella",
        comment: "It didn't make sense unless you had the power to eat colors.",
      },
      {
        name: "Mike Paige",
        image: "https://api.dicebear.com/6.x/adventurer/svg?seed=Chester",
        comment:
          "It dawned on her that others could make her happier, but only she could make herself happy.",
      },
    ],
    comments:
      "Lorem ipsum dolor sit amet. Vel architecto dignissimos non quia maiores non quia assumenda sit similique expedita est dolores quos aut debitis architecto ex nobis maxime. Eos repellat sunt hic possimus rerum aut doloribus culpa sit doloribus",
    points: 0,
    date: "17/04/2023",
  },
  {
    index: 7,
    url: "example@mail.com",
    title: "Group-Chat",
    team: "Team 03",
    submittedBy: "Peter Umoh",
    feedback: null,
    comments:
      "Lorem ipsum dolor sit amet. Vel architecto dignissimos non quia maiores non quia assumenda sit similique expedita est dolores quos aut debitis architecto ex nobis maxime. Eos repellat sunt hic possimus rerum aut doloribus culpa sit doloribus",
    points: 0,
    date: "17/04/2023",
  },
];

type feedback = {
  name: string;
  image: string;
  comment: string;
};

export type submissionType = {
  title: string;
  team: string;
  submittedBy: string;
  index: number;
  url: string;
  feedback: feedback[] | null;
  comments: string;
  points: number;
  date: string;
};
