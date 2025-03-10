import ContactForm from "@/components/contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Song & Stark",
  description: "Contact Song & Stark for inquiries and support.",
};

export default function Contact() {
    return (
        <main className="container mx-auto px-4 py-8">
            <ContactForm />
        </main>
    )
}
