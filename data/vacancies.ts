export interface VacancyType {
  title: string;
  location: string;
  type: string;
  description: string;
  formLink: string;
  deadline: {
    from: string;
    to: string;
  };
}

export const vacancies: VacancyType[] = [
  {
    title: "IT Services Referral",
    location: "Remote",
    type: "Full-time",
    description: "📣Want to earn by recommending great IT services?🖥️\n\nJoin Song&Stark's referral program.\n Get paid for every successful referral. Refer a friend, and you could get up to 10% of the deal.\n\nApply now!💰",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSe9vTZEckGib4DUGvicQCXCtMLTp-ymaJxYeL4gn_KbG3vgxg/viewform?usp=dialog",
    deadline: {
      from: "2025-05-01T00:00:00",  
      to: "2025-05-31T23:59:59"
    }
  },
//   {
//     title: "Graphic Designer",
//     location: "Remote",
//     type: "Full-time",
//     description: "We're looking for an experienced graphic designer to join our team...",
//     formLink: "https://docs.google.com/forms/d/e/1FAIpQLSe9vTZEckGib4DUGvicQCXCtMLTp-ymaJxYeL4gn_KbG3vgxg/viewform?usp=dialog",
//     deadline: {
//       from: "2024-03-01T00:00:00",
//       to: "2024-03-31T23:59:59"
//     }
//   }
]; 