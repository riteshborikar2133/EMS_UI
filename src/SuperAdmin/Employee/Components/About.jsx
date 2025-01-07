// About.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get("https://api.example.com/about");
        setAboutData(response.data);
      } catch (error) {
        console.error("Error fetching about data", error);
      }
    };

    fetchAboutData();
  }, []);

  if (!aboutData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h4>About Section</h4>
      <p>{aboutData.description}</p>
    </div>
  );
};

export default About;
