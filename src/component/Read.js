import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReadAction } from '../REDUX/Action/ReadAction';
import { DeleteAction } from '../REDUX/Action/DeleteAction';
import 'primeicons/primeicons.css';
import './Read.css';
import { useNavigate } from 'react-router-dom';
import spin from '../../src/Assests/Spinner@1x-1.0s-200px-200px.gif'


const Read = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ReadAction());
  }, [dispatch]);

  // const response = useSelector(state => state.ReadReducer)
  // const userData = response?.data
  const response = useSelector(state => state.ReadReducer);
  const { loading, data: userData } = response;

  const deleteUser = (id) => {
    dispatch(DeleteAction(id));
    console.log("id", id);
  };

  const updateUser = (item) => {
    console.log('item', item);
    navigate('/update', { state: { user: item } });
    console.log('Update user:', item);
  };

  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <>
      {loading ? (
      <div>
       <img src={spin} style={{width:'150px',height:'150px'}}/>
       <p style={{marginLeft:'32px'}}>Loading...</p>
       </div>
      ) : (
       
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>S.No</th>
              <th>UserName</th>
              <th>Password</th>
              <th>Language</th>
              <th>Gender</th>
              <th>Developer</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.userName}</td>
                <td>{item.password}</td>
                <td>{item.language}</td>
                <td>{item.gender}</td>
                <td>{item.developer}</td>
                <td>
                  <button onClick={() => updateUser(item)} className='pencil'><i className="pi pi-pencil"></i></button>
                  <button onClick={() => deleteUser(item.id)} className='trash'><i className="pi pi-trash delete"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
          <button className='home' onClick={goToHomePage}>Home</button>
        </table>
      
        
      )
    }
    
    </>
  );
};

export default Read;
