import React, { useState } from 'react';
import './'

function EmployeData() {
    const [formData, setFormData] = useState({
        employeName: '',
        email: '',
        mobileNumber: '',
        department: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/project", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Employe saved successfully');
                
                setFormData({
                    employeName: '',
                    email: '',
                    mobileNumber: '',
                    department: ''
                });
            } else {
                alert('Failed to save employe');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="user-container"> 
            <h2 className='user-heading'>EMPLOYE DATA FORM</h2><br/>
            <form onSubmit={handleSubmit}>

                    <label htmlFor="employeName">Employe Name:</label>
                    <input type="text" id="name" name="employeName" value={formData.employeName} onChange={handleChange} required /><br/><br/>
               
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br/><br/>
                
                    <label htmlFor="mobileNumber">Mobile Number:</label>
                    <input type="mobileNumber" id='mobileNumber' name='mobileNumber' value={formData.mobileNumber} onChange={handleChange} required/><br/><br/>
                 
                    <label htmlFor="department">Department:</label>
                    <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} required /><br/><br/>
                <div className='centre'>
                <button type="submit" className='btn btn-primary'>Save</button> 
                </div>
            </form>
        </div>
    );
}

export default EmployeData;






