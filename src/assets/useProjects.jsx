import { useEffect, useState } from "react";

const useProjects = () => {
  const [myProjects, setMyProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await fetch('https://tabtech-work.vercel.app/api');
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const res = await response.json();
        setMyProjects(res.projects);
      } catch (error) {
        console.error('There was a problem fetching the data:', error);
      }
    };

    getProjects();

  });

  return myProjects;
};

export default useProjects;
