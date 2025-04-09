"use client";

import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { toast } from "react-toastify";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  cvFile: File | null;
  coverLetter: string;
  fileUrl: string | null;
}

const SubmitCV: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    cvFile: null,
    coverLetter: "",
    fileUrl: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFileName(selectedFile.name);
      setFormData({
        ...formData,
        cvFile: selectedFile,
      });
    }
  };
  const uploadFile = async (file: File) => {
    const data = new FormData();
    data.append("file", file);
    const res = await fetch("/api/upload", {
      method: "POST",
      body: data,
    });
    const result = await res.json();
    return result.fileUrl;
  };

  const submitForm = async (submissionData: any) => {
    const response = await fetch("/api/sendresume", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData)
    });

    const result = await response.json();
    if (response.ok) {
      toast.success("Application submitted successfully!");
      // Clear form after successful submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        cvFile: null,
        coverLetter: "",
        fileUrl: null,
      });
      setFileName("");
    } else {
      toast.error(`Failed to submit application: ${result.message}`);
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // First upload the file and get the URL
      let fileUrl = null;
      if (formData.cvFile) {
        fileUrl = await uploadFile(formData.cvFile);
      }

      if (fileUrl) {
        // Prepare the submission data
        const submissionData = {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          position: formData.position,
          coverLetter: formData.coverLetter,
          cvFile: fileUrl
        };
        submitForm(submissionData)
      }

    } catch (error) {
      toast.error("An error occurred while submitting the application");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-20 px-4">
      <div className="mb-12 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-2">
          <span className="text-primary">No role fits</span>
          <span className="text-secondary"> you?</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Just share your CV with us. We are always looking for talented people to join our team.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg bg-tertiary/30 border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-tertiary/30 border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-tertiary/30 border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                placeholder="Position Applied For"
                className="w-full px-4 py-3 rounded-lg bg-tertiary/30 border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          <div>
            <div className="mt-1 flex justify-center px-6 py-4 border-2 border-gray-200 border-dashed rounded-lg bg-tertiary/30">
              <div className="text-center">
                <FaUpload className="mx-auto h-10 w-10 text-primary" />
                <div className="mt-2">
                  <label className="cursor-pointer text-primary hover:text-primary/90">
                    <span>{fileName || "Upload your CV"}</span>
                    <input
                      type="file"
                      name="cvFile"
                      onChange={handleFileChange}
                      className="sr-only"
                      accept=".pdf,.doc,.docx"
                      required
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-1">PDF, DOC up to 10MB</p>
              </div>
            </div>
          </div>

          <div>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              placeholder="Cover Letter"
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-tertiary/30 border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-32 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitCV;
