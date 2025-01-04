# Disease Prediction System

Welcome to the **Disease Prediction System** repository! This innovative platform is designed to assist patients, doctors, and administrators in predicting diseases, managing appointments, and collecting valuable feedback for improving healthcare services.

---

## Features

### For Patients:
- **Disease Prediction**: Enter symptoms to receive predicted diseases with associated precautions and doctor recommendations.
- **Appointment Booking**: Schedule appointments with doctors based on predictions and availability.
- **Profile Management**: Update personal information and medical history.
- **Insurance Quotes**: Get personalized insurance premium estimates based on medical and social history.
- **Feedback Submission**: Share feedback about your experience.

### For Doctors:
- **Patient Management**: View and manage patient profiles, medical histories, and social histories.
- **Appointment Management**: Create, update, view, and delete appointment slots, including booked appointments.
- **Feedback Submission**: Provide feedback to help enhance the system.

### For Administrators:
- **User Management**: Add, remove, and manage doctor profiles.
- **Disease Database**: Add, update, delete, and view diseases and symptoms.
- **Feedback Tools**: Create feedback surveys and review responses.
- **User Profiles**: Access and manage patient and doctor data.

---

## Project Overview

### Use Case Design
The system supports diverse use cases, including:
- **User Registration**: Role-specific user registration for patients, doctors, and admins.
- **Disease Prediction**: Intelligent symptom analysis and disease forecasting.
- **Profile Management**: Streamlined profile updates for all roles.
- **Appointment Handling**: Comprehensive scheduling and slot management tools.

### Diagrams
- **Use Case Diagram**: Visualizes interactions between users and the system.
- **Class Diagram**: Details relationships among key components, such as Patient, Doctor, Disease, and Symptom Checker.

### Validation Tests
A suite of test cases ensures reliability for:
- User registration and login
- Disease prediction accuracy
- Appointment scheduling and updates

---

## Technologies Used

- **Frontend**: Angular  
- **Backend**: Django  
- **Database**: SQLite  

---

## Installation

Follow these steps to set up and run the project:

### Prerequisites
1. Install **Sublime Text** for reading and modifying the code.
2. Install **Node.js** from the [official website](https://nodejs.org/).
3. Install **Python** from the [official website](https://python.org/).
4. Install **SQLite Studio** from [sqlitestudio.pl](https://sqlitestudio.pl/).
5. Install **Postman** to test API functionality.

### Step-by-Step Guide

1. **Verify Node.js Installation**:
   - Open Node.js command prompt and run:
     ```bash
     node -v
     npm -v
     ```

2. **Install Angular CLI**:
   ```bash
   npm install -g @angular/cli
   ```

3. **Set Python Environment Variable**:
   - Add Python to your system's PATH environment variable.

4. **Create Virtual Environment**:
   - Navigate to the project folder and run:
     ```bash
     python -m venv environmentname
     ```

5. **Activate Virtual Environment**:
   - Go to the `Scripts` folder in the virtual environment and run:
     ```bash
     activate
     ```

6. **Install Backend Dependencies**:
   - Install Django and Django Rest Framework:
     ```bash
     pip install django djangorestframework django-cors-headers scipy sklearn joblib json numpy pandas
     ```

7. **Configure Database**:
   - Run SQLite Studio, and add `db.sqlite3` located at:
     ```
     FinalProjectSE\FinalProjectSE\projectdisease\db.sqlite3
     ```

8. **Update Dataset Paths**:
   - Update paths in `views.py` at:
     ```
     FinalProjectSE\FinalProjectSE\projectdisease\DiseaseApp\views.py
     ```
     - Update paths for training/testing datasets in the `predictdisease` API.
     - Update the insurance dataset path in the `predictinsurance` API.

9. **Start Backend Server**:
   - Navigate to the backend folder and run:
     ```bash
     python manage.py runserver
     ```

10. **Start Frontend Server**:
    - Open Node.js command prompt, navigate to:
      ```
      SE project\SE project\cliniva\source\light
      ```
    - Run:
      ```bash
      ng serve
      ```

11. **Launch Application**:
    - Open your browser and visit:
      ```
      http://localhost:4200/
      ```

---

## How to Use

1. **Register**: Create an account as a patient, doctor, or admin.
2. **Login**: Log in using your credentials to access your personalized dashboard.
3. **Explore Features**:
   - **Patients**: Predict diseases, book appointments, and manage profiles.
   - **Doctors**: View and manage patient details, and schedule consultations.
   - **Admins**: Oversee users, manage disease databases, and monitor feedback.

---

## Contribution

We welcome contributions! To contribute:
1. Fork this repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---
