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
      {schools.length > 0 ? (
        schools.map(school => (
          <SchoolCard key={school.id} school={school} />
        ))
      ) : (
        <div className="no-results">
          <p>No schools found</p>
        </div>
      )}

      <style jsx>{`
        .school-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); /* Adjusts layout based on screen size */
          gap: 20px;
          justify-items: center;
          padding: 20px;
        }

        .no-results {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          color: #888;
          font-size: 1.5rem;
        }

        .no-results p {
          text-align: center;
        }

        @media (max-width: 768px) {
          .school-list {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Makes cards responsive for smaller screens */
          }
        }

        @media (max-width: 480px) {
          .school-list {
            grid-template-columns: 1fr; /* Stack the cards on very small screens */
          }
        }
      `}</style>
    </div>
  );
};

export default ShowSchools;
