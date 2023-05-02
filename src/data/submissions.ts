export const data = [
  {
    index: 1,
    title: "AI Chatbot",
    team: "Team 03",
    submittedBy: "Peter Umoh",
    feedback: [
      {
        name: "",
        image: "",
        comment: "",
      },
      {
        name: "",
        image: "",
        comment: "",
      },
      {
        name: "",
        image: "",
        comment: "",
      },
      {
        name: "",
        image: "",
        comment: "",
      },
    ],
    comments:
      "Lorem ipsum dolor sit amet. Vel architecto dignissimos non quia maiores non quia assumenda sit similique expedita est dolores quos aut debitis architecto ex nobis maxime. Eos repellat sunt hic possimus rerum aut doloribus culpa sit doloribus",
    points: 0,
    date: "26/04/2023",
  },
  {
    index: 2,
    title: "Drone Delivery App",
    team: "Team 03",
    submittedBy: "Peter Umoh",
    feedback: [
      {
        name: "",
        image: "",
        comment: "",
      },
      {
        name: "",
        image: "",
        comment: "",
      },
    ],
    comments:
      "Lorem ipsum dolor sit amet. Vel architecto dignissimos non quia maiores non quia assumenda sit similique expedita est dolores quos aut debitis architecto ex nobis maxime. Eos repellat sunt hic possimus rerum aut doloribus culpa sit doloribus",
    points: 0,
    date: "25/04/2023",
  },
  {
    index: 3,
    title: "Project Zen",
    team: "Team 03",
    submittedBy: "Peter Umoh",
    feedback: [
      {
        name: "",
        image: "",
        comment: "",
      },
      {
        name: "",
        image: "",
        comment: "",
      },
      {
        name: "",
        image: "",
        comment: "",
      },
    ],
    comments:
      "Lorem ipsum dolor sit amet. Vel architecto dignissimos non quia maiores non quia assumenda sit similique expedita est dolores quos aut debitis architecto ex nobis maxime. Eos repellat sunt hic possimus rerum aut doloribus culpa sit doloribus",
    points: 0,
    date: "23/04/2023",
  },
  {
    index: 4,
    title: "E-Commerce Project",
    team: "Team 03",
    submittedBy: "Peter Umoh",
    feedback: [
      {
        name: "",
        image: "",
        comment: "",
      },
    ],
    comments:
      "Lorem ipsum dolor sit amet. Vel architecto dignissimos non quia maiores non quia assumenda sit similique expedita est dolores quos aut debitis architecto ex nobis maxime. Eos repellat sunt hic possimus rerum aut doloribus culpa sit doloribus",
    points: 0,
    date: "23/04/2023",
  },
  {
    index: 5,
    title: "Micro-Raptor",
    team: "Team 03",
    submittedBy: "Peter Umoh",
    feedback: [],
    comments:
      "Lorem ipsum dolor sit amet. Vel architecto dignissimos non quia maiores non quia assumenda sit similique expedita est dolores quos aut debitis architecto ex nobis maxime. Eos repellat sunt hic possimus rerum aut doloribus culpa sit doloribus",
    points: 0,
    date: "21/04/2023",
  },
  {
    index: 6,
    title: "Image-Generator",
    team: "Team 03",
    submittedBy: "Peter Umoh",
    feedback: [
      {
        name: "",
        image: "",
        comment: "",
      },
      {
        name: "",
        image: "",
        comment: "",
      },
    ],
    comments:
      "Lorem ipsum dolor sit amet. Vel architecto dignissimos non quia maiores non quia assumenda sit similique expedita est dolores quos aut debitis architecto ex nobis maxime. Eos repellat sunt hic possimus rerum aut doloribus culpa sit doloribus",
    points: 0,
    date: "17/04/2023",
  },
  {
    index: 7,
    title: "Group-Chat",
    team: "Team 03",
    submittedBy: "Peter Umoh",
    feedback: [],
    comments:
      "Lorem ipsum dolor sit amet. Vel architecto dignissimos non quia maiores non quia assumenda sit similique expedita est dolores quos aut debitis architecto ex nobis maxime. Eos repellat sunt hic possimus rerum aut doloribus culpa sit doloribus",
    points: 0,
    date: "17/04/2023",
  },
];

export type submissionType = {
  title: string;
  team: string;
  submittedBy: string;
  index: number;
  feedback: {
    name?: string;
    image?: string;
    comment?: string;
  }[];
  comments: string;
  points: number;
  date: string;
};
