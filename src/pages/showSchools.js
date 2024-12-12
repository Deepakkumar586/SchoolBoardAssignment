import React, { useEffect, useState } from 'react';
import SchoolCard from '../components/SchoolCard';
import axios from 'axios';

const ShowSchools = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get('/api/getSchools');
        setSchools(response.data);
      } catch (error) {
        console.error('Error fetching schools');
      }
    };

    fetchSchools();
  }, []);

  return (
    <div className="school-list">
      {schools.map(school => (
        <SchoolCard key={school.id} school={school} />
      ))}
    </div>
  );
};

export default ShowSchools;
