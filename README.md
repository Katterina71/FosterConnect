# Fosters Connect

Welcome to Fosters Connect, a dynamic platform designed to facilitate connections between animal shelters and potential fosters, ensuring that pets find the temporary homes they need. Our service offers a comprehensive approach to foster care coordination, simplifying the process for both shelters and foster caregivers.

Visit website [Fosters Connect](https://fosterconnect.onrender.com/)

![](https://github.com/Katterina71/FosterConnect/blob/main/presentation/Device%20Mashup.png)

## Project Goals

The primary goal of Fosters Connect is to create a seamless and efficient platform that bridges the gap between animal shelters and potential foster caregivers. Our objectives include:

1. **Enhancing Foster Coordination**: Simplifying the process for shelters to list pets needing foster homes and for potential fosters to find and connect with these pets.
2. **Support Fosters**: Offer fosters an intuitive platform to find animals in need of temporary homes, manage preferences, and receive updates tailored to their location and profile.
3. **Enhance Animal Welfare**: By improving the efficiency of the fostering process, more animals can be placed in supportive, temporary homes, reducing shelter overcrowding and increasing the quality of care.
4. **Increasing Awareness**: Raising awareness about the importance of foster care in animal welfare and encouraging more people to participate in fostering.

## Technical Goals

The primary goal of this project is to enhance understanding and proficiency in several key areas of web development:

1. **MERN Stack Mastery**: Building a robust and scalable application using MongoDB, Express.js, React, and Node.js.
2. **UI/UX Enhancement with MUI**: Utilizing Material-UI (MUI) to create a visually appealing and user-friendly interface.
3. **Secure Authentication with Firebase**: Implementing Firebase Authentication to ensure secure and reliable user login and registration processes.
4. **Efficient Media Management with Cloudinary**: Integrating Cloudinary for efficient handling and optimization of media assets such as images and videos.
5. **Effective Email Communication with SendGrid**: Utilizing SendGrid to manage and send automated emails, enhancing communication between shelters and fosters.

### Technologies Used

This project is built on the MERN stack, utilizing additional technologies such as:

- **Material-UI (MUI)**: For a responsive and accessible user interface.
- **Firebase Authentication**: For secure and scalable user authentication.
- **Cloudinary**: To manage pet image uploads and storage.
- **SendGrid**: For automating email communications based on dynamic foster preferences and shelter requests.

## Challenges Addressed

1. **Dashboard Adaptation**: Creating a dynamic dashboard that changes depending on whether the user is a shelter or a foster, ensuring relevant functionalities are accessible.
2. **Profile Creation**: Facilitating seamless profile creation for both shelters and fosters, ensuring all necessary information is captured and easily manageable.
3. **Connecting New Services**: Integrating new services such as Firebase for authentication, Cloudinary for media management, and MUI for enhancing the user interface.

## Agile methodology

My project utilizes agile methodology to ensure iterative development, continuous feedback, and rapid adaptation to changes. Duration of project development: four weeks.

![](https://github.com/Katterina71/FosterConnect/blob/main/presentation/Agile.png)

Sprints example: 
![](https://github.com/Katterina71/FosterConnect/blob/main/presentation/Agile-sprints.jpg)

## Database Structure
I use MongoDB to manage our database, which is structured to handle user profiles, pet profiles, fostering preferences, and addresses efficiently. The user profiles link to pet profiles, fostering preferences, and addresses, facilitating seamless coordination between shelters and fosters.

![](https://github.com/Katterina71/FosterConnect/blob/main/presentation/FosterConnectDB.png)

## Examples of API Endpoints example

### **User Management**

### **1. User Registration**

- **Endpoint:** **`POST /api/users/`**
- **Description:** Register a new user (either foster or shelter).

### **2. Get User Profile**

- **Endpoint:** **`GET /api/users/:firebaseUid`**
- **Description:** Get the profile of the logged-in user.

### **3. Update User Profile**

- **Endpoint:**  **`PATCH /api/users/:firebaseUid`**
- **Description:** Update the profile of the logged-in user.

### **4. Remove User Profile**

- **Endpoint:**  **`DELETE /api/users/:firebaseUid`**
- **Description:** Remove the profile of the logged-in user.

### **5. Get all Shelters Profiles**

- **Endpoint:** **`GET /api/shelters`**
- **Description:** Retrieve all shelter profiles.

## Website structure

![](https://github.com/Katterina71/FosterConnect/blob/main/presentation/FosterConnect-Website%20Structure.png)

## Wireframes examples

![](https://github.com/Katterina71/FosterConnect/blob/main/presentation/wireframes.jpg)

## Features

- **Shelter Dashboard**: A dedicated dashboard for shelters to manage their listed pets, manage automating email communication.
- **Foster Dashboard**: A personalized dashboard for foster caregivers to manage their profiles, view available pets.
- **Pets Finder**: A user-friendly search tool for potential fosters to find pets based on various criteria such as location, breed, and care requirements.
- **Profile Management**: Comprehensive profiles for both shelters and fosters, allowing for easy management of information and preferences.
- **Notification System**: Automated notifications to keep users informed about important updates and actions required.

## Future Features
** Send Application Form to Shelter:** We plan to implement a feature allowing users to send application forms directly to shelters through our website. This will streamline the process of applying to foster or adopt pets, making it more convenient for potential fosters and shelters alike.

**Create List of Favorite Pets:** Users will be able to create and manage a list of their favorite pets. This feature will enable users to easily keep track of the pets they are most interested in, enhancing their experience and engagement with the platform.

**Connect SendGrid for Email Notifications:** We will integrate SendGrid to enable robust email notifications. This will ensure users receive timely updates and important information, such as new pet listings, application status updates, and other relevant communications from shelters.
