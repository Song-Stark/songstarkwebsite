import * as React from "react";
interface EmailTemplateProps {
    fullName: string;
    email: string;
    phone: string;
    position: string;
    coverLetter: string;
    cvFile: string ;
}

export const EmailTemplate = ({ fullName, email, phone, position, coverLetter, cvFile }: EmailTemplateProps) => {
    return (
        <div>
            <h3> New Resume submission from Songstark Rwanda website</h3>
            <p>Name: {fullName}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Position: {position}</p>
            <p>Cover Letter: {coverLetter}</p>
            <p>CV File: {cvFile ? <a href={cvFile} target="_blank" rel="noopener noreferrer">View CV</a> : 'No file attached'}</p>
        </div>
    );
};

