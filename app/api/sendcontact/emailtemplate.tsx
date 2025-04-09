import * as React from "react";
interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

export const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => {
    return (
        <div>
            <h3> New Contact from Songstark Rwanda website</h3>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Message: {message}</p>
        </div>
    );
};

