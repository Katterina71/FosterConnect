// FormContext.js
// import React, { createContext, useContext, useState } from 'react';
import { createContext, useContext, useState } from 'react';

import {BASE_URL} from '../services/endpointsDB'
import {useAuth} from '../context/AuthContext'

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {

    const {currentUser} = useAuth()

    const [formData, setFormData] = useState({
        userInfo: {},
        fostering_preferences: {}
    });


     // Method to update general form data
     const updateFormData = (section, data) => {
        if (section === 'petPreferences') {
            // Append to the array for pet preferences
            setFormData(prev => ({
                ...prev,
                [section]: [data]  // Check if it's an array, if not, start a new array
            }));
        } else {
            // Handle other updates for non-array types
            setFormData(prev => ({
                ...prev,
                [section]: {
                    ...prev[section],
                    ...data
                }
            }));
        }
    };

    const submitForm = async () => {
        console.log("Submitting Form:", formData);

        // Add logic to handle form submission such as API calls.

        // Set up the options for the fetch request
        const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)  // Convert the formData object into a JSON string
        };

        console.log(formData)
        console.log(currentUser.uid)

    // Perform the fetch operation to send the data to the server
        try {
            let response = await fetch(BASE_URL+'/'+currentUser.uid, requestOptions)

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            let data = await response.json()
            console.log('Success:', data);  // Log success message and data returned from the server
            return data;
        } catch (error) {
            console.error('Error:', error);  // Log any errors encountered during the fetch
        }
         

    };

    return (
        <FormContext.Provider value={{ formData, updateFormData, submitForm }}>
            {children}
        </FormContext.Provider>
    );
};
