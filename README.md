# World's Hardest Tic Tac Toe
#### Video Demo: [LINK](https://youtu.be/r-eU8WoNe2w)


#### Description:
This is a **full-stack Tic Tac Toe game** where a human player competes against an AI. The AI uses the **Minimax algorithm with alpha-beta pruning**, ensuring that it plays optimally. The project demonstrates both frontend and backend development skills and implements game logic, AI, and a responsive user interface.

---


#### Folder Structure:
```folder
tic-tac-toe/
├── backend/ # Flask API
│ ├── app.py # Main Flask API file
│ ├── ai/ # AI logic folder
│ │ ├── init.py
│ │ └── minimax.py
│ ├── config.py # Config for Flask
│ └── requirements.txt # Python dependencies
├── frontend/ # React frontend
│ ├── src/
│ │ ├── App.jsx
│ │ ├── api.js # Axios API for AI moves
│ │ └── components/
│ │ ├── Board.jsx
│ │ └── Square.jsx
│ ├── index.css # TailwindCSS import
│ └── package.json
└── README.md
```

---


#### How to Run Locally:

1. **Backend Setup**
```bash
cd backend
python -m venv .venv          # Create virtual environment
source .venv/bin/activate     # Linux/Mac
.venv\Scripts\activate        # Windows
pip install -r requirements.txt
flask run
```

2. **Frontend Setup**
```bash
cd frontend
npm install
npm run dev
```


---

#### AI Details
 - The AI uses the Minimax algorithm to evaluate all possible game outcomes.

- Alpha-Beta pruning is implemented to improve performance, skipping unnecessary moves.

- AI is designed to never lose, making it a challenging opponent.

---

#### Technologies Used
- Frontend: React, TailwindCSS, Vite
- Backend: Python, Flask, Flask-CORS
- AI Algorithm: Minimax with alpha-beta pruning

#### Optional Enhancements
- Score persistence using localStorage
- Hover animations and winning line highlights
- Sound effects for clicks and wins

---
---

#### Author
Suraj Singh Chauhan

