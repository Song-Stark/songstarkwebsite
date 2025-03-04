import SubmitCV from "@/components/career/submit";
import Vacancies from "@/components/career/vacancies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career - Song & Stark",
  description: "Explore career opportunities at Song & Stark.",
};

export default function Career() {
    return (
        <main className="min-h-screen">
            <Vacancies />
            <div className="bg-tertiary/20">
                <SubmitCV />
            </div>
        </main>
    )
}