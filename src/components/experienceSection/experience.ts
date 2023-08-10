export type experience = {
  title: string;
  position: string;
  date: string;
  description: string;
  backgroundColor: string;
  underlineColor: string;
};

const Idemia: experience = {
  title: "Idemia",
  position: "Frontend Developer Intern",
  date: "03/2023 - 06/2023",
  description:
    "During my time at the company, I had a great opportunity to feel what it's like to be part of a team and work under time pressure. As it was only the first time I had a chance to work on a real product I tried to make the most of it and learn as much as possible in terms of soft and software skills. Our team was able to develop a web application with quizes for internal company use. The app was also successfully used at the company's expo by hundreds of visitors.",
  backgroundColor: "before:bg-[#420098]",
  underlineColor: "group-hover:decoration-[#420098]",
};

const Portfolio: experience = {
  title: "Portfolio",
  position: "Creator",
  date: "08/2023",
  description:
    "After my internship ended, I was looking for new challenges to take on. In the end, I decided to create a personal website where I could publish information about my ongoing academic and professional progress. It was very important for me to learn new technologies during the development process, so each technology I chose to create the site turned out to be completely new to me, so I could learn as much as possible.",
  backgroundColor: "before:bg-[#06b6d4]",
  underlineColor: "group-hover:decoration-[#06b6d4]",
};

export const experiences: experience[] = [Idemia, Portfolio];
