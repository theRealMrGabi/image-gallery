# Image Gallery and Editor

This project is a small content creation tool that allows users to browse, edit, and download images from the Lorem Pictus API. It's built with Next.js 14 and TypeScript, providing a responsive and user-friendly interface for image manipulation.

## Features

- Browse through a paginated list of images
- View image previews and author names
- Edit images:
  - Adjust image size (width and height)
  - Apply grayscale filter
  - Apply blur effect (1-10 intensity)
- Preview edited images in real-time
- Download edited images
- Persistent state across page refreshes and navigation
- Responsive design with a photo grid layout

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository:

git clone https://github.com/theRealMrGabi/image-gallery.git

2. Navigate to the project directory:

3. Install the dependencies

4. Create a `.env.local` file in the root directory and add the copy the content of `.env.example` file

## Running the Application

To run the application in development mode:

`npm run dev`

This will start the development server. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Building for Production

To create a production build:
`npm run build`

To start the production server:
`npm start`

## Technologies Used

- Next.js 14
- TypeScript
- React
- Tailwind CSS
- Lorem Pictus API

## API Reference

This project uses the Lorem Pictus API. For detailed documentation, visit [https://picsum.photos/](https://picsum.photos/).

## Contributing

Contributions to this project are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Create a pull request

## License

This project is licensed under the MIT License.

Project Link: [https://github.com/theRealMrGabi/image-gallery](https://github.com/theRealMrGabi/image-gallery)
