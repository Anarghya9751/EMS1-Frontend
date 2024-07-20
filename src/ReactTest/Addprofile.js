// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaCheck, FaTimes } from 'react-icons/fa';

// const AddProfile = ({ AddProfile }) => {
//   const [candidateName, setCandidateName] = useState('');
//   const [contact, setContact] = useState('');
//   const [roleApplyingFor, setRoleApplyingFor] = useState('active');
//   const [qualification, setQualification] = useState('');
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     if (AddProfile) {
//       setCandidateName(AddProfile.candidateName || ''); 
//       setContact(AddProfile.contact || '');
//       setQualification(AddProfile.qualification || ''); 
//       setRoleApplyingFor(AddProfile.roleApplyingFor || 'active'); 
//     }
//   }, [AddProfile]);

//   const handleSave = () => {
//     const newErrors = {};

//     if (!candidateName) newErrors.candidateName = 'Please fill out this field';
//     if (!contact) newErrors.contact = 'Please fill out this field';
//     else if (!/^\d{10}$/.test(contact)) newErrors.contact = 'Please enter a valid phone number';
//     if (!qualification) newErrors.qualification = 'Please fill out this field';

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//     } else {
//       console.log('Saving:', { candidateName, contact, qualification, roleApplyingFor });

//       setCandidateName('');
//       setContact('');
//       setQualification('');
//       setRoleApplyingFor('active');
//       setErrors({});
//     }
//   };

//   const handleCancel = () => {
//     setCandidateName('');
//     setContact('');
//     setQualification('');
//     setRoleApplyingFor('active');
//     setErrors({});
//   };

//   return (
//     <div className="p-4" style={{ width: '15cm', marginTop: '38px' }}>
//       <hr />
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h5 className="mb-0" style={{ marginLeft: '1rem' }}>{AddProfile ? 'Edit Profile' : 'Add Profile'}</h5>
//         <select className="form-select" style={{ width: '30%' }} value={roleApplyingFor} onChange={(e) => setRoleApplyingFor(e.target.value)}>
//           <option value="active">Active</option>
//           <option value="inactive">Inactive</option>
//         </select>
//       </div>
//       <hr />
//       <div className="mb-3">
//         <input
//           type="text"
//           className="form-control mb-3"
//           id="candidateName"
//           placeholder="Enter Candidate Name"
//           value={candidateName}
//           onChange={(e) => setCandidateName(e.target.value)}
//         />
//         {errors.candidateName && <div className="text-danger">{errors.candidateName}</div>}
//       </div>
//       <div className="mb-3">
//         <input
//           type="text"
//           className="form-control mb-3"
//           id="contact"
//           placeholder="Contact"
//           value={contact}
//           onChange={(e) => setContact(e.target.value)}
//         />
//         {errors.contact && <div className="text-danger">{errors.contact}</div>}
//       </div>
//       <div className="mb-3">
//         <textarea
//           className="form-control mb-3"
//           id="qualification"
//           placeholder="Qualification"
//           value={qualification}
//           onChange={(e) => setQualification(e.target.value)}
//         />
//         {errors.qualification && <div className="text-danger">{errors.qualification}</div>}
//       </div>
//       <div className="d-flex justify-content-start mt-3">
//         <button
//           style={{ backgroundColor: 'lightgrey', display: 'flex', alignItems: 'center' }}
//           className="btn me-2"
//           onClick={handleSave}
//         >
//           <FaCheck style={{ color: 'green' }} /> Save
//         </button>
//         <button className="btn btn-outline-danger" onClick={handleCancel}>
//           <FaTimes /> Cancel
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddProfile;
