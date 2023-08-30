# Node.js Image Management Backend

A simple Express.js backend for managing images. It features endpoints for uploading images, liking images, updating image titles, and fetching all images. The backend uses MongoDB for data storage and local file storage for images.

## Features

- Upload images with titles.
- Like and unlike images.
- Update image titles.
- Fetch all uploaded images.
- Cyberpunk-themed iridescent gradient styling.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   $ git clone https://github.com/nate2427/AugXLabs-Interview-Node-Backend.git backend
   $ cd backend
   ```

2. Install the required packages:

   ```bash
   $ npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add your environment variables:
     ```
     DATABASE_URL=mongodb://your-mongo-url
     PORT=your-preferred-port
     ```

4. Start the server:
   ```bash
   $ npm start
   ```

## API Endpoints

- **Upload Image**: `POST /api/images/upload`
- **Like Image**: `POST /api/images/like/:id`
- **Update Image Title**: `PUT /api/images/update/:id`
- **Get All Images**: `GET /api/images`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
