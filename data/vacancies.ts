export interface VacancyType {
  title: string;
  location: string;
  type: string;
  description: string;
  deadline: {
    from: string;
    to: string;
  };
}

export const vacancies: VacancyType[] = [
//   {
//     title: "Senior Software Engineer",
//     location: "Remote",
//     type: "Full-time",
//     description: "We're looking for an experienced software engineer to join our team...",
//     deadline: {
//       from: "2024-03-01T00:00:00",
//       to: "2024-03-31T23:59:59"
//     }
//   },
//   {
//     title: "Graphic Designer",
//     location: "Remote",
//     type: "Full-time",
//     description: "We're looking for an experienced graphic designer to join our team...",
//     deadline: {
//       from: "2024-03-01T00:00:00",
//       to: "2024-03-31T23:59:59"
//     }
//   }
]; 