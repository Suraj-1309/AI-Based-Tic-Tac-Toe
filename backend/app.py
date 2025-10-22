from flask import Flask, request, jsonify
from flask_cors import CORS
from ai.minimax import check_winner, get_best_move
from config import Config

app = Flask(__name__)

# Load constarts like DEBUG, PORT etc.
app.config.from_object(Config)  

# Allow requests from frontend
CORS(app)  

@app.route('/')
def home():
    return jsonify({"message" : "Tic Tac Toe API is running!"})


@app.route('/api/move', methods=['POST'])
def ai_move():
    data = request.get_json()

    if not data or "board" not in data:
        return jsonify({"error" : "Board data is required"}), 400
    
    board = data.get("board")
    ai_player = data.get("ai", "O")

    winner = check_winner(board)

    if winner:
        return jsonify({"move" : None, "winner" : winner})

    move = get_best_move(board, ai_player)

    return jsonify({"move" : move})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

