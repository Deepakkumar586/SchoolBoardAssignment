import Link from 'next/link';

const Home = () => {
  return (
    <div className="container">
      <h1 className="heading">School Directory</h1>

      <div className="cardContainer">
        <div className="card">
          <Link href="/addSchool" className="link">Add a School</Link>
        </div>
        <div className="card">
          <Link href="/showSchools" className="link">View Schools</Link>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f7f9fc;
          padding: 20px;
        }

        .heading {
          font-size: 3rem;
          color: #4a4a4a;
          margin-bottom: 40px;
          text-align: center;
          font-weight: 700;
          animation: fadeIn 2s ease-out;
        }

        .cardContainer {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .card {
          background-color: #fff;
          border-radius: 12px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          width: 250px;
          overflow: hidden;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }

        .link {
          display: block;
          padding: 20px;
          text-align: center;
          font-size: 1.2rem;
          color: #fff;
          background-color: #3498db;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .link:hover {
          background-color: #2980b9;
          transform: translateY(-5px);
        }

        .link:active {
          transform: translateY(2px);
        }

        @media (max-width: 768px) {
          .heading {
            font-size: 2.5rem;
          }

          .cardContainer {
            gap: 20px;
            flex-direction: column;
            align-items: center;
          }

          .card {
            width: 80%;
          }

          .link {
            font-size: 1rem;
            padding: 15px;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
