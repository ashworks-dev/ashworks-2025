#!/bin/bash

echo "Starting Development Environment..."
echo "=================================="

# Check if Python dependencies are installed
if ! python3 -c "import flask" 2>/dev/null; then
    echo "Installing Python dependencies..."
    pip3 install -r requirements.txt
fi

# Start Flask API server in background
echo "Starting Flask API server on http://localhost:5001..."
python3 api_server.py &
FLASK_PID=$!

# Wait a moment for Flask to start
sleep 2

# Start Angular development server
echo "Starting Angular development server on http://localhost:4200..."
ng serve &
ANGULAR_PID=$!

# Wait a moment for Angular to start
sleep 5

echo ""
echo "Development servers are running!"
echo "=================================="
echo "Flask API:    http://localhost:5001"
echo "Angular App:  http://localhost:4200"
echo ""
echo "Access URLs:"
echo "  Normal view: http://localhost:4200/showreels"
echo "  Edit mode:   http://localhost:4200/showreels?edit=true"
echo ""
echo "Press Ctrl+C to stop both servers"

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "Stopping servers..."
    kill $FLASK_PID 2>/dev/null
    kill $ANGULAR_PID 2>/dev/null
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Wait for user to stop
wait 