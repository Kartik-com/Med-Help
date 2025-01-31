---

### **Med Help - A Smart Healthcare Record System**  
🚀 *Effortless Medical Record Management using the MERN Stack*  

#### **📌 Overview**  
Med Help is a secure healthcare record management system that allows patients to store and share their medical history digitally. Doctors can access a patient’s records using their phone number and update prescriptions, reducing paperwork and improving healthcare efficiency. Insurance companies can verify medical history for transparency and trust.  

#### **⚡ Features**  
✅ Secure user authentication (Login, Signup, OTP verification)  
✅ Doctors can access and update patient medical history using a phone number  
✅ Patients can upload and manage medical documents  
✅ Insurance companies can verify user medical history  
✅ Profile management, including display picture updates and document uploads  
✅ End-to-end encryption for data security  

---

## **🛠️ Tech Stack**  
- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js, MongoDB  
- **Storage:** Cloudinary (for medical records & prescriptions), AWS (for backup)  
- **Security:** AES encryption, SHA-256 password hashing, SSO login  
- **Other Tools:** JWT authentication, Cookies for session management  

---

## **📌 API Endpoints**  

### **User APIs**  
- `POST /auth/signup` - Register a new user  
- `POST /auth/login` - User login  
- `POST /auth/sendotp` - Send OTP for verification  
- `POST /auth/changepassword` - Change user password  

### **Profile APIs**  
- `GET /profile/getAllUserDetails` - Fetch all user details  
- `PATCH /profile/updateProfile` - Update user profile  
- `DELETE /profile/deleteAccount` - Delete user account  
- `PATCH /profile/updateDisplayPicture` - Update profile picture  
- `GET /profile/getUploadedDocuments` - Retrieve uploaded documents  

### **Doctor APIs**  
- `GET /doctor/getPatientHistory/:phoneNumber` - Fetch patient history using phone number  
- `POST /doctor/addPrescription` - Add prescription details  

### **Insurance APIs**  
- `GET /insurance/verifyUserHistory/:userId` - Verify a user’s medical history  

### **Contact APIs**  
- `POST /contact/sendMessage` - Contact support  

🔹 *More APIs will be added as the project evolves!*  

---

## **🚀 Getting Started**  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/yourusername/med-help.git
cd med-help
```

### **2️⃣ Install Dependencies**  
#### *Backend*  
```bash
cd backend
npm install
```
#### *Frontend*  
```bash
cd ../frontend
npm install
```

### **3️⃣ Configure Environment Variables**  
Create a `.env` file in both `backend` and `frontend` folders. Example:  

#### *Backend `.env`*  
```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET=your_secret
```

#### *Frontend `.env`*  
```env
REACT_APP_BACKEND_URL=http://localhost:5173
```

### **4️⃣ Run the Project**  
#### *Backend*  
```bash
cd backend
npm start
```
#### *Frontend*  
```bash
cd frontend
npm start
```

---

## **🔒 Security Measures**  
- AES encryption for medical records  
- SHA-256 password hashing  
- Secure JWT authentication & SSO login  
- Temporary QR codes valid for 30 minutes  

---

## **🌍 Contributing**  
Contributions are welcome! If you're participating through **GSSOC**, follow these steps:  
1. **Fork the repository**  
2. **Create a new branch** (`feature-branch-name`)  
3. **Commit changes** with clear messages  
4. **Push to your fork and submit a Pull Request**  

---

## **📞 Contact**  
💡 Have questions or want to contribute? Reach out!  
📧 Email: tusharminche@gmail.com  
🌐 GitHub: [TusharMinche](https://github.com/TusharMinche) 

📧 Email: shingadekartik1@gmail.com

🌐 GitHub: [KartikShingade](https://github.com/Kartik-com)  

🚀 *Let's build a revolutionary healthcare system together!* 🎉  

---
