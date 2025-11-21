# 📝 React To-Do List Application

A simple and clean To-Do List application built using **React + Vite**.  
This project allows users to:

- Add new tasks  
- Edit existing tasks  
- Delete tasks  
- Mark tasks as completed using a checkbox  
- Completed tasks appear with a strike-through  

This app is fully built using **functional components**, **React hooks**, and **props**.

---

## 📘 What Each File Contains

### **1. App.jsx**
- Main component of the app  
- Stores all todos in a state (`useState`)  
- Includes logic for:
  - Add Todo  
  - Edit Todo  
  - Delete Todo  
  - Toggle Completed  
- Passes todos and functions to child components via props  

### **2. components/Header.jsx**
- Displays the title of the application  
- Simple UI component (no logic)

### **3. components/ToDoList.jsx**
- Contains the input field  
- Handles “Add” button logic  
- Maps through todos and displays them using the ToDoItem component  

### **4. components/ToDoItem.jsx**
- Represents a single todo item  
- Includes:
  - **Checkbox** for marking completed  
  - **Edit** and **Save** functionality  
  - **Delete** button  
- Applies a strike-through style when a todo is marked completed  

### **5. index.css**
- Contains all styling for the application  
- Includes responsiveness for mobile & tablet  
- Defines `.completed` class for strike-through effect  
- Styles for layout, buttons, input, and todo cards  

---

## ✔ How to Run the Project

### ✔ 1. Clone the Repository
```bash
git clone https://github.com/Sweety-Mitra/ToDo_List.git
```

### ✔ 2. Navigate to the Project Folder
```bash
cd ToDo_List
```

### ✔ 3. Install Dependencies
```bash
npm install
```

### ✔ 4. Run the Development Server
```bash
npm run dev
```

### ✔ 5. Open the App
After running the development server, Vite will show a link like:

```
http://localhost:5173/
```

Open this link in your browser to view the To-Do application.

---

## 🛠️ Technologies Used
- React.js  
- Vite  
- JavaScript (ES6+)  
- CSS