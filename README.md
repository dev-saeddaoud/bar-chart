# Bar Chart [Live](https://my-bar-chart.herokuapp.com/)

### Summary
This is an intercative bar chart developed using different state-of-the-art web technologies, that represents the population of countries. 

## Technologies
 - TypeScript (for type saftey)
 - React with hooks (to control the DOM)
 - D3 (to do the calculations)
 - Styled Components (to style html elements)
 - Redux (to manage the global state)
 - Framer Motion (to implement transitions and animations)
 
 ## Features
  - Arrange countries based on population in descening order
  - Add new country-population entry to the begining of the graph
  - Delete a bar by clicking on it
  - Form validation to avoid duplicates and invalid values
  
  ### How to run the application locally
   - First download/clone the repository to your computer. To clone it, use the following command in your terminal 
   ```
   git clone https://github.com/dev-saeddaoud/bar-chart.git
   ```
   - Navigate to the frontend folder (the backend folder is there only to serve the static build folder on deployment)
   ```
   cd bar-chart/frontend
   ```
   - Install the dependencies
   ```
   npm install
   ```
   - Run the application
   ```
   npm start
   ```
