import { Experience } from "@/components/experienceSection/experience";
import { CREATION_YEAR } from "@/constants/constants";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebase";

export default async function fetchExperiences() {
  const maxYear =
    new Date().getFullYear() === CREATION_YEAR
      ? new Date().getFullYear() + 1
      : new Date().getFullYear();
  const years: number[] = [];
  for (let year = CREATION_YEAR; year <= maxYear; ++year) {
    years.push(year);
  }
  const experiences: Experience[][] = [];
  years.forEach(() => experiences.push([]));

  const fetchCall = await getDocs(collection(db, "experiences"));
  const fetchedData = fetchCall.docs.map((doc) => ({
    ...doc.data(),
  }));
  fetchedData.forEach((doc) => {
    const experience: Experience = {
      title: doc.title,
      position: doc.position,
      year: doc.year,
      link: doc.link,
      date: doc.date,
      description: doc.description,
      color: doc.color,
    };
    const index = experience.year - CREATION_YEAR;
    experiences[index].push(experience);
  });
  experiences.forEach((year) => {
    year.sort(
      (a, b) =>
        parseInt(a.date.substring(0, 2)) - parseInt(b.date.substring(0, 2))
    );
  });
  return { experiences, maxYear };
}
