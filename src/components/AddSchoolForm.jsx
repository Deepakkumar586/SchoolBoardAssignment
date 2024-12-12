import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Link from 'next/link';

const AddSchoolForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('address', data.address);
    formData.append('city', data.city);
    formData.append('state', data.state);
    formData.append('contact', data.contact);
    formData.append('email_id', data.email_id);
    formData.append('image', data.image[0]);

    try {
      const response = await axios.post('/api/addSchool', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(response.data.message);
    } catch (error) {
      alert('Failed to add school');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h2 className="heading">Add School</h2>

        <div className="formGroup">
          <label htmlFor="name" className="label">School Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter School Name"
            {...register('name', { required: 'Name is required' })}
            className="input"
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div className="formGroup">
          <label htmlFor="address" className="label">Address</label>
          <input
            id="address"
            type="text"
            placeholder="Enter Address"
            {...register('address', { required: 'Address is required' })}
            className="input"
          />
          {errors.address && <p className="error">{errors.address.message}</p>}
        </div>

        <div className="formGroup">
          <label htmlFor="city" className="label">City</label>
          <input
            id="city"
            type="text"
            placeholder="Enter City"
            {...register('city', { required: 'City is required' })}
            className="input"
          />
          {errors.city && <p className="error">{errors.city.message}</p>}
        </div>

        <div className="formGroup">
          <label htmlFor="state" className="label">State</label>
          <input
            id="state"
            type="text"
            placeholder="Enter State"
            {...register('state', { required: 'State is required' })}
            className="input"
          />
          {errors.state && <p className="error">{errors.state.message}</p>}
        </div>

        <div className="formGroup">
          <label htmlFor="contact" className="label">Contact</label>
          <input
            id="contact"
            type="text"
            placeholder="Enter Contact Number"
            {...register('contact')}
            className="input"
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email_id" className="label">Email</label>
          <input
            id="email_id"
            type="email"
            placeholder="Enter Email"
            {...register('email_id', { required: 'Email is required' })}
            className="input"
          />
          {errors.email_id && <p className="error">{errors.email_id.message}</p>}
        </div>

        <div className="formGroup">
          <label htmlFor="image" className="label">School Image</label>
          <input
            id="image"
            type="file"
            {...register('image', { required: 'Image is required' })}
            className="input"
          />
          {errors.image && <p className="error">{errors.image.message}</p>}
        </div>

        <button type="submit" className="submitButton">Add School</button>

        <div className="linkContainer">
          <Link href="/showSchools" className="link">View Schools</Link>
          <Link href="/">Home</Link>
        </div>
      </form>

      <style jsx>{`
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f7f7f7;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .heading {
          font-size: 2.5rem;
          margin-bottom: 20px;
          text-align: center;
          color: #3a3a3a;
        }

        .formGroup {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .label {
          font-size: 1.1rem;
          font-weight: 600;
          color: #4caf50;
        }

        .input {
          padding: 12px;
          font-size: 1rem;
          border-radius: 6px;
          border: 1px solid #ddd;
          transition: all 0.3s ease;
        }

        .input:focus {
          outline: none;
          border-color: #4caf50;
          box-shadow: 0 0 5px rgba(76, 175, 80, 0.4);
        }

        .error {
          color: #e74c3c;
          font-size: 0.875rem;
        }

        .submitButton {
          background-color: #4caf50;
          color: white;
          padding: 12px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .submitButton:hover {
          background-color: #45a049;
        }

        .linkContainer {
          margin-top: 20px;
          text-align: center;
          display: flex;
          gap:10px
        }

        .link {
          font-size: 1rem;
          color: #3498db;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .link:hover {
          text-decoration: underline;
          color: #2980b9;
        }

        @media (max-width: 768px) {
          .container {
            padding: 15px;
          }
          
          .heading {
            font-size: 2rem;
          }

          .input {
            font-size: 0.95rem;
          }

          .submitButton {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AddSchoolForm;
