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

#### Technology Roles and Usage

- **React (Frontend)**:  
  React is used to build the user interface of the Tic Tac Toe game. It allows us to manage the game state, including the board, player turns, winner detection, and score tracking, in a clean and reactive way. Components like `Board` and `Square` make the UI modular and easy to maintain.

- **TailwindCSS (Styling)**:  
  TailwindCSS is a utility-first CSS framework that enables rapid and responsive styling without writing custom CSS for every element. It is used to create the modern, animated, and visually appealing game board, buttons, scoreboards, and hover effects, while keeping the code maintainable.

- **Vite (Frontend Build Tool)**:  
  Vite serves as the development and build tool for the frontend. It provides fast hot module replacement (HMR) during development and optimizes the final build for production, ensuring the game loads quickly in the browser.

- **Python (Backend Language)**:  
  Python is used to implement the server-side logic of the game, including handling API requests and the AI algorithm. Its simplicity and readability make it easy to write and maintain the AI logic.

- **Flask (Backend Framework)**:  
  Flask is a lightweight Python web framework used to create the backend API. It handles HTTP requests from the frontend, such as receiving the current board state and returning the AI's best move. Flask’s simplicity is ideal for a small project like this.

- **Flask-CORS (Cross-Origin Requests)**:  
  Flask-CORS is used to allow requests from the frontend, which may run on a different port during development. Without CORS, the browser would block API requests to the backend, so this library ensures smooth communication between frontend and backend.

- **Minimax Algorithm with Alpha-Beta Pruning (AI Algorithm)**:  
  The Minimax algorithm evaluates all possible future moves to select the optimal one for the AI. Alpha-beta pruning optimizes this process by skipping unnecessary calculations, making the AI’s decision-making fast and efficient while guaranteeing that it never loses.


---

#### AI Details / How Minimax Works

The AI in this Tic Tac Toe project is designed to be **an unbeatable opponent**. To achieve this, it uses the **Minimax algorithm**, a classical recursive decision-making algorithm commonly used in two-player, turn-based games such as Tic Tac Toe, Chess, and Checkers. The algorithm works by simulating all possible moves, predicting the opponent’s responses, and selecting the move that maximizes the AI’s chances of winning while minimizing the opponent’s chances.

Here is a detailed breakdown of how the Minimax algorithm is applied in this project:

1. **Game Tree Construction**  
   At any given turn, the algorithm considers the current board state and generates all possible moves for the active player. Each move results in a new hypothetical board state. For each of these states, the algorithm recursively simulates subsequent moves by both the AI and the human player. This recursive process forms a **game tree**, where each node represents a possible board configuration and each branch represents a potential move. The root of the tree is the current board state, and the leaves are terminal states where the game ends in a win, loss, or draw.

2. **Terminal State Evaluation**  
   Each leaf node of the game tree represents a board state where the game is over. These terminal states are assigned scores based on the outcome:  
   - **+10** if the AI wins.  
   - **-10** if the human player wins.  
   - **0** for a draw.  
   In addition, the algorithm incorporates the depth of the node into the scoring. A faster win is preferred over a slower one, and a delayed loss is preferred over an immediate loss. This ensures the AI makes not just optimal moves, but also strategically efficient ones.

3. **Maximizing and Minimizing Strategy**  
   Minimax assumes both players play optimally. During recursion:  
   - When it is the AI’s turn, it selects the move that **maximizes the score**, representing the AI’s goal to win or force a draw.  
   - When it is the human player’s turn, it assumes the human will choose the move that **minimizes the score**, representing the human’s goal to win or prevent the AI from winning.  
   By alternating between maximizing and minimizing at each level of the tree, the AI effectively anticipates the opponent’s best possible responses to every potential move.

4. **Alpha-Beta Pruning Optimization**  
   In a naive implementation, the Minimax algorithm explores every possible board configuration. While Tic Tac Toe has a small game tree and can handle this brute-force approach, more complex games would be computationally expensive. To improve efficiency, **alpha-beta pruning** is implemented. Alpha represents the best already explored option along the path for the maximizer (AI), and beta represents the best for the minimizer (human). If a node cannot improve the outcome for the current player, the algorithm stops exploring that branch. This pruning significantly reduces the number of calculations required and allows the AI to make decisions almost instantly.

5. **Selecting the Best Move**  
   After recursively evaluating all possible moves and scoring each branch of the game tree, the AI selects the move that leads to the highest possible score according to the Minimax evaluation. This ensures that the AI never loses — if the human plays perfectly, the game will end in a draw, but if the human makes a mistake, the AI will capitalize and win.

6. **Practical Example in Tic Tac Toe**  
   Suppose the board is in the following state (X is human, O is AI):  
   ```diagram
   X | O | X 
     | X |
   O |   |
   ```
The AI examines every empty cell and simulates placing an “O” there. For each simulated move, it recursively explores all future moves the human could make, scores the resulting outcomes, and propagates the scores back up the tree. By comparing these scores, the AI chooses the move that maximizes its chance of winning or forcing a draw.  

By combining **recursive exploration**, **terminal state scoring**, **maximizing/minimizing strategy**, and **alpha-beta pruning**, the AI ensures it never loses and always plays optimally.

---

#### Optional Enhancements
- Score persistence using localStorage
- Hover animations and winning line highlights
- Sound effects for clicks and wins


---
#### What I Learned

Working on this project was an incredible learning experience that reinforced my understanding of both **frontend and backend development**, as well as **algorithmic thinking** and **game logic**. Here are the key lessons I gained from building this full-stack Tic Tac Toe game:

1. **Full-Stack Development**  
   I deepened my knowledge of how frontend and backend systems interact. Implementing the **Flask API** and connecting it to the **React frontend** gave me hands-on experience in handling HTTP requests, JSON payloads, and asynchronous communication. I learned how to structure a project so that the frontend and backend are loosely coupled yet fully functional, enabling the UI to react instantly to AI decisions.

2. **State Management in React**  
   Building the interactive game board required managing multiple pieces of state: the current board configuration, player turns, winner status, AI thinking state, and score tracking. Using React’s `useState` hook, I learned to manage and update state efficiently. I also realized the importance of **lifting state up** to parent components and passing props down to child components, which allowed me to create modular, reusable UI elements like `Board` and `Square`.

3. **Styling with TailwindCSS**  
   TailwindCSS taught me how utility-first CSS can make styling faster and more consistent. I learned how to use responsive classes, gradients, animations, hover effects, and conditional styling to make the interface visually appealing. Applying these techniques, I was able to create a modern, polished look similar to professional Tic Tac Toe games, complete with animated winning highlights and interactive buttons.

4. **Algorithmic Thinking and Minimax**  
   Implementing the **Minimax algorithm** with alpha-beta pruning was perhaps the most challenging and rewarding part. I learned how to:  
   - Represent the game state in a way that the AI can analyze efficiently.  
   - Recursively explore all possible moves and simulate opponent strategies.  
   - Score terminal states and incorporate depth to prefer faster wins and delayed losses.  
   - Apply the **maximizing/minimizing strategy** to anticipate an optimal opponent.  
   - Implement **alpha-beta pruning** to skip unnecessary branches, improving performance significantly.  

   This not only reinforced my understanding of recursion and tree traversal, but also gave me a practical example of **AI decision-making** in games. I now understand how AI can “think ahead” and make decisions that guarantee optimal outcomes.

5. **Backend API Design**  
   By designing the Flask backend, I learned how to structure RESTful endpoints for a game application. I implemented a `/api/move` POST endpoint that accepts the current board state and returns the AI’s best move. I also learned how to handle errors gracefully, validate input data, and use **Flask-CORS** to enable smooth communication between frontend and backend during development.

6. **Performance Optimization**  
   The first naive implementation of Minimax was slower, especially on repeated moves or full board evaluations. Integrating **alpha-beta pruning** taught me how to optimize recursive algorithms without changing the core logic. I also learned the importance of **asynchronous operations** in JavaScript when calling backend APIs, ensuring the UI remains responsive while the AI computes its move.

7. **UX Design Considerations**  
   I realized that creating a game isn’t just about logic—it’s also about the player experience. I learned to provide clear feedback using:  
   - Animated winning highlights for squares.  
   - Status messages indicating whose turn it is or when the AI is thinking.  
   - Score tracking to keep players engaged over multiple rounds.  
   - A reset button to start a new game seamlessly.  

   These enhancements reinforced the importance of **usability, feedback, and polish** in software projects.

8. **Project Structuring and Best Practices**  
   Organizing the project into separate frontend and backend folders, creating modular components, and maintaining a clean folder structure taught me **good software engineering practices**. I also learned the importance of writing a comprehensive README, explaining setup instructions, technology choices, and algorithmic details for future maintainers or reviewers.

9. **Problem-Solving and Debugging Skills**  
   During development, I faced challenges such as delayed AI responses, state management issues, and styling problems. Debugging these issues taught me patience, attention to detail, and the value of breaking down problems into smaller, manageable parts. I also improved my ability to read and interpret error messages and stack traces.

10. **Real-World Application of Theory**  
    Finally, this project bridged the gap between theory and practice. Concepts like recursion, game trees, and alpha-beta pruning were no longer abstract—they were applied in a tangible, interactive project that I could play and share. This helped solidify my understanding and confidence in applying theoretical computer science concepts to practical software development.

Overall, this project has strengthened my skills across **frontend, backend, AI algorithms, optimization, and user experience design**, and has prepared me to tackle more complex full-stack and AI-driven applications in the future.

---
---

#### Author
Suraj Singh Chauhan

