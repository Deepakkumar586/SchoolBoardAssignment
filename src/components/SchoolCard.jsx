import Link from "next/link";

const SchoolCard = ({ school }) => {
  return (
    <div className="card-container">
      <div className="school-card">
        <img src={school.image} alt={school.name} className="school-image" />
        <div className="card-content">
          <h3 className="school-name">{school.name}</h3>
          <p className="school-address">{school.address}</p>
          <p className="school-city">{school.city}</p>

          <div className="card-actions">
            <Link href="/addSchool" className="button-link">
              Add School
            </Link>
            <Link href="/" className="button-link">
              Home
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card-container {
          display: grid;
          grid-template-columns: repeat(
            auto-fill,
            minmax(280px, 9fr)
          ); /* Adjusts to create multiple cards in rows */
          gap: 20px;
          justify-items: center;
          margin: 20px;
          width: 100%;
        }

        .school-card {
          background-color: #fff;

          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          width: 100%; /* Ensures card takes full width within grid column */
        }

        .school-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }

        .school-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .card-content {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .school-name {
          font-size: 1.5rem;
          font-weight: 600;
          color: #333;
          margin: 0;
        }

        .school-address,
        .school-city {
          font-size: 1rem;
          color: #555;
        }

        .card-actions {
          display: flex;
          justify-content: space-between;
          gap: 10px;
        }

        .button-link {
          background-color: #4caf50;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
          font-size: 0.95rem;
          text-align: center;
          width: 45%;
          display: block;
          transition: background-color 0.3s ease;
        }

        .button-link:hover {
          background-color: #45a049;
        }

        /* Tablet and mobile responsiveness */
        @media (max-width: 768px) {
          .card-container {
            grid-template-columns: repeat(
              auto-fill,
              minmax(200px, 1fr)
            ); /* Adjust to show more cards in a row on tablet */
          }

          .school-card {
            width: 100%; /* Ensures cards take full width on smaller screens */
          }

          .school-name {
            font-size: 1.2rem;
          }

          .button-link {
            width: 48%;
          }
        }

        @media (max-width: 480px) {
          .card-container {
            grid-template-columns: 1fr; /* Stack the cards into a single column on very small screens */
          }

          .school-card {
            width: 100%;
          }

          .school-name {
            font-size: 1.1rem;
          }

          .button-link {
            width: 48%;
          }
        }
      `}</style>
    </div>
  );
};

export default SchoolCard;
