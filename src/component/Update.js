import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate, useLocation } from 'react-router-dom';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { UpdateAction } from '../REDUX/Action/UpdateAction';
import './Create.css';

const Update = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const userToUpdate = location.state?.user;
  console.log("userToUpdate",userToUpdate);

  const initialValues = {
    userName: userToUpdate?.userName ,
    password: userToUpdate?.password ,
    developer: userToUpdate?.developer,
    gender: userToUpdate?.gender ,
    language: userToUpdate?.language ,
  };

  const validationSchema = yup.object().shape({
    userName: yup.string().required('*required!!'),
    password: yup.string().required('*required!!'),
    developer: yup.array().min(1, 'At least select one'),
    gender: yup.string().required('At least select one'),
    language: yup.string().required('At least select one'),
  });

  const onSubmit = (values) => {
    dispatch(UpdateAction({values, id: userToUpdate.id}));
    navigate('/read');
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    if (userToUpdate) {
      formik.setValues({
        userName: userToUpdate.userName,
        password: userToUpdate.password,
        developer: userToUpdate.developer,
        gender: userToUpdate.gender,
        language: userToUpdate.language,
      });
    }
  }, [userToUpdate]);

  return (
    <div className='container'>
      <div className='text'>
        <h1>Update Form</h1>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="userName">UserName :</label>
          <input
            type="text"
            name='userName'
            value={formik.values.userName}
            className='form-control'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.userName && formik.touched.userName ? (
          <p style={{ color: 'red' }}>{formik.errors.userName}</p>
        ) : null}

        <div>
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            name='password'
            className='form-control'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.password && formik.touched.password ? (
          <p style={{ color: 'red' }}>{formik.errors.password}</p>
        ) : null}

        <div style={{ marginTop: '10px' }}>
          <div>Developer :</div>
          <div>
            <input
              type="checkbox"
              name='developer'
              value="frontend"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='form-check-input'
              checked={formik.values.developer.includes('frontend')}
            />
            <label htmlFor="frontend" style={{ marginLeft: '10px' }}> Frontend </label>
          </div>
          <div>
            <input
              type="checkbox"
              name='developer'
              value="backend"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='form-check-input'
              checked={formik.values.developer.includes('backend')}
            />
            <label htmlFor="backend" style={{ marginLeft: '10px' }}> Backend </label>
          </div>
          <div className='m'>
            <input
              type="checkbox"
              name='developer'
              value="fullStack"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='form-check-input'
              checked={formik.values.developer.includes('fullStack')}
            />
            <label htmlFor="fullStack" style={{ marginLeft: '10px' }}> FullStack </label>
          </div>
          {formik.errors.developer && formik.touched.developer ? (
            <p style={{ color: 'red' }}>{formik.errors.developer}</p>
          ) : null}
        </div>

        <div style={{ marginTop: '10px', display: 'flex' }}> Gender :
          <div style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name='gender'
              value="male"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='form-check-input'
              checked={formik.values.gender === 'male'}
            />
            <label htmlFor="male" style={{ marginLeft: '10px' }}>Male</label>
          </div>
          <div style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name='gender'
              value="female"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='form-check-input'
              checked={formik.values.gender === 'female'}
            />
            <label htmlFor="female" style={{ marginLeft: '10px' }}>Female</label>
          </div>
        </div>
        {formik.errors.gender && formik.touched.gender ? (
          <p style={{ color: 'red' }}>{formik.errors.gender}</p>
        ) : null}

        <div style={{ marginTop: '10px' }}>
          <label htmlFor="language">Language :</label>
          <select
            name="language"
            id="language"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className='form-select'
            value={formik.values.language}
          >
            <option value="">Select Language</option>
            <option value="tamil">Tamil</option>
            <option value="english">English</option>
            <option value="malayalam">Malayalam</option>
            <option value="hindi">Hindi</option>
          </select>
          {formik.errors.language && formik.touched.language ? (
            <p style={{ color: 'red' }}>{formik.errors.language}</p>
          ) : null}
        </div>

        <div className='submit_btn'>
          <button type='submit' className='submit-btn'>Update</button>
        </div>
      </form>
    </div>
  );
};

export default Update;
