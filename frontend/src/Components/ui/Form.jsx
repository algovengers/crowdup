import axios from "axios";
import React, { useRef } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const Form = ({ setStartupState }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const inputFileRef = useRef(null);
  const imageViewRef = useRef(null);
  const { currentUser } = useAuth();
  const [report, setReport] = useState(null);
  const [logo, setLogo] = useState(null);

  const createStartup = (e) => {
    e.preventDefault();
    const nodeEnv = process.env.REACT_APP_NODE_ENV;
    const baseUrl =
      nodeEnv === "production"
        ? "https://crowdup-api.vercel.app"
        : "http://localhost:5000";

    const name = e.target[0].value;
    const description = e.target[1].value;
    const fundsRequired = e.target[4].value;
    const stocks = e.target[5].value;
    const domain = e.target[6].value;
    const websiteLink = e.target[7].value;

    const uploadData = async () => {
      setLoading(true);
      const formData = new FormData();
      formData.append("report", report);
      formData.append("logo", logo);
      formData.append("useruid", currentUser?.uid);
      formData.append("username", currentUser?.displayName);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("stocks", stocks);
      formData.append("fundsRequired", fundsRequired);
      formData.append("domain", domain);
      formData.append("websiteLink", websiteLink);
      // formData.append("withCredentials", true);
      try {
        await axios.post(baseUrl + "/api/startups/create", formData, {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Startup created successfully");
        setLoading(false);
        navigate("/dashboard");
        window.location.reload();
      } catch (error) {
        console.log("Startup creation failed");
        setLoading(false);
      }
    };
    uploadData();
  };

  const uploadImage = (file) => {
    if (!file) return;
    console.log(file);
    setLogo(file);
    let imgLink = URL.createObjectURL(file);
    imageViewRef.current.style.backgroundImage = `url(${imgLink})`;
    imageViewRef.current.textContent = "";
    imageViewRef.current.style.border = 0;
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.items) {
      for (var i = 0; i < e.dataTransfer.items.length; i++) {
        if (e.dataTransfer.items[i].kind === "file") {
          let file = e.dataTransfer.items[i].getAsFile();
          uploadImage(file);
        }
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handlePdf = (e) => {
    console.log(e);
    console.log(e.target.files[0]);
    setReport(e.target.files[0]);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <form onSubmit={createStartup}>
      <div className="w-full flex flex-wrap justify-center pb-6 space-y-6 md:pb-12">
        <div className="container grid gap-6 px-4 md:grid-cols-2 md:px-6 lg:gap-10">
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="startup-name"
              >
                Startup Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 ring-green-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="startup-name"
                required
                placeholder="InnoviseHub"
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 ring-green-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none h-64"
                id="description"
                placeholder="Enter a brief description of your startup."
                required
              ></textarea>
            </div>
          </div>
          <div className="space-y-4 flex flex-col">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="report"
              >
                Report
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent ring-green-500 file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="file"
                id="startup-name"
                accept=".pdf,.doc,.docx,.txt"
                placeholder="InnoviseHub"
                required
                onChange={handlePdf}
              />
            </div>
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="logo"
            >
              Logo
            </label>
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 h-64"
              htmlFor="input-file"
              id="drop-area"
              onDragOver={handleDragOver}
              onDrop={handleFileDrop}
            >
              <input
                type="file"
                accept="image/*"
                id="input-file"
                hidden
                required
                ref={inputFileRef}
                onChange={(e) => uploadImage(e.target.files[0])}
              />

              <div
                id="img-view"
                ref={imageViewRef}
                className="flex flex-col justify-center items-center"
              >
                <img src="/images/icon.png" alt="" />
                <p>
                  Drag and drop or click here
                  <br /> to upload image
                </p>
                <span>Upload any images from destop</span>
              </div>
            </label>
          </div>
        </div>
        <div className="container grid gap-6 px-4 md:grid-cols-2 md:px-6 lg:gap-10">
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="funds-received"
              >
                Funds Required
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-green-500 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="startup-name"
                placeholder="1000"
                required
                type="number"
              />
              <div></div>
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="stocks"
              >
                Stocks
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-green-500 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="startup-name"
                placeholder="10000"
                required
                type="number"
              />
              <div></div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="domain"
              >
                Domain
              </label>
              <input
                className="flex ring-green-500 h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="domain"
                placeholder="Fintech, Health, Tech"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="website-link"
              >
                Website Link
              </label>
              <input
                className="flex ring-green-500 h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="website-link"
                placeholder="https://example.com"
              />
            </div>
          </div>
        </div>
        <div className="container px-4 md:px-6">
          <button className="inline-flex items-center bg-green-500 hover:bg-green-600 transition-all duration-300 ease-in-out justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
