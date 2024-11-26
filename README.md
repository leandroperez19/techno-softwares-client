# Data Dashboard - Full Stack Developer Task

This project is a data dashboard built using React.js for the frontend and Node.js for the backend. It leverages MySQL for structured data storage and MongoDB for flexible data storage. This README focuses on the frontend setup.

## Setup and Execution

### 1. **Install and Run Locally**

1. **Extract the Project**  
   Extract the zip file to your desired directory.

2. **Navigate to the Project Directory**

    ```bash
    `cd techno-softwares-client`

    ```

3. **Install Dependencies**
   Install the required packages using npm:
   `npm install`

4. **Run the Development Server**
   `npm run dev`

### 2. **Docker Setup**

This project supports Docker for development and previewing the production build.

_Development with Live Reload_

1. **Build the Development Image**
   `npm run docker:build-dev`
2. **Run the Development Container**
   `npm run docker:run-dev`

3. **Access the Application**
   Navigate to: `http://localhost:5173`

_Preview Production Build_

1. **Build the Production Image**
   `npm run docker:build-prod`
2. **Run the Production Container**
   `npm run docker:run-prod`

3. **Access the Application**
   Navigate to: `http://localhost:8080`

## Project Features

1. **Interactive Dashboard**

    - Data visualizations using D3.js.
    - Filters for date range and data type.

2. **Pagination and Sorting**

    - Handle large datasets efficiently with React Table.

3. **Responsive Design**

    - Styled using TailwindCSS for a mobile-friendly UI.

4. **Reusable Components**

    - Built with React’s compound component pattern for flexibility.

## Notes

-   After installing the dependencies you can run the project, then open a new terminal and then either run `npx cypress run --component` to run component testing from the terminal or `npx cypress open` to run the tests with a UI (remember to run the project, otherwise the tests will fail).

-   The expected flow for the app is: Registering > Create a Category > Create a Sale. Charts and logs will be created automatically.
