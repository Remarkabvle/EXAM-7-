import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.scss';

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="admin-container container">
      <h1>Admin panel</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        cupiditate inventore, deserunt magnam provident dolores blanditiis ullam
        iusto! Assumenda dolor quis itaque commodi tempore laudantium quam
        deleniti id consequatur. Minus delectus officia unde quam nulla ut.
        Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem
        maiores suscipit. Dignissimos, ut repudiandae!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        cupiditate inventore, deserunt magnam provident dolores blanditiis ullam
        iusto! Assumenda dolor quis itaque commodi tempore laudantium quam
        deleniti id consequatur. Minus delectus officia unde quam nulla ut.
        Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem
        maiores suscipit. Dignissimos, ut repudiandae!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        cupiditate inventore, deserunt magnam provident dolores blanditiis ullam
        iusto! Assumenda dolor quis itaque commodi tempore laudantium quam
        deleniti id consequatur. Minus delectus officia unde quam nulla ut.
        Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem
        maiores suscipit. Dignissimos, ut repudiandae!
      </p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Admin;
