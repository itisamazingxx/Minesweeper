## **Steps to Start the Project**
1. **Run the development server**:
```bash
npm run dev
```

2. **Render Link**:
```bash
https://jingwen-hou-minesweeper.onrender.com
```

## **Write-Up**
### **1. Challenges Faced**
- **State Management:** 
- Handling the interaction between multiple components (e.g., Board, Cell, Game) while maintaining a unidirectional data flow required careful thought.
- **React Router Integration:**
- Dynamically loading different difficulty levels and ensuring proper navigation while avoiding refresh-related issues was challenging.

### **2. Additional Features or Changes**
- Display the dimensions of the board (height x width) dynamically based on the selected difficulty.

### **3. Assumptions**
- Users will primarily play on devices with screen sizes that support at least an 8x8 grid.
- A "game over" occurs immediately upon clicking a mine.
- Changing difficulty levels restarts the game without confirmation.

### **4. Time Taken**
- Few days to familiar the project