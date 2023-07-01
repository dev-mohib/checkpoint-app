import { Box } from "./Box.js";
import { Head, Link } from '@inertiajs/react';

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
    <div className="bg-gradient-to-r from-blue-500 to-purple-500">
      <header className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-5xl md:text-6xl text-gray-800 font-bold">
              Welcome to EduHub
            </h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link
                    href={route('login')}
                    className="text-gray-600 hover:text-gray-800 font-medium px-2 py-1 rounded"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href={route('register')}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded"
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className='mt-36' />
          <p className="text-3xl md:text-xl text-center text-gray-600 mt-4 my-12">
            A platform for teachers and students to connect, learn, and excel together.
          </p>
        </div>
      </header>

      <main className="bg-white">
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl text-gray-800 font-bold mb-4">
                Transforming Education
              </h2>
              <p className="text-lg text-gray-600">
                EduHub provides a seamless learning experience, empowering both teachers and
                students to reach new heights. Collaborate, share resources, track grades, and
                generate reports all in one place.
              </p>
            </div>
            <img
              src="/laptop.jpg"
              alt="Laptop on a desk"
              className="w-full h-96 rounded-lg"
            />
          </div>
        </section>

        <section className="bg-blue-500 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl text-center text-white font-bold mb-8">
              Features We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl text-blue-500 font-semibold mb-4">Teachers</h3>
                <p className="text-gray-700">
                  Connect with experienced teachers who are passionate about educating and guiding
                  students towards success.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl text-blue-500 font-semibold mb-4">Students</h3>
                <p className="text-gray-700">
                  Join a vibrant community of students, collaborate on projects, and access
                  educational resources.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl text-blue-500 font-semibold mb-4">Grades</h3>
                <p className="text-gray-700">
                  Keep track of your grades and progress. Get valuable feedback from teachers to
                  improve your performance.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl text-blue-500 font-semibold mb-4">Reports</h3>
                <p className="text-gray-700">
                  Generate detailed reports to analyze student performance and identify areas for
                  improvement.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl text-blue-500 font-semibold mb-4">Interactive Learning</h3>
                <p className="text-gray-700">
                  Engage in interactive learning experiences, quizzes, and discussions that foster
                  a deeper understanding of subjects.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl text-blue-500 font-semibold mb-4">Real-time Feedback</h3>
                <p className="text-gray-700">
                  Receive real-time feedback and personalized recommendations to enhance your
                  learning journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img
              src="/images/landing-page-image-2.jpg"
              alt="Students studying"
              className="w-full h-auto rounded-lg"
            />
            <div>
              <h2 className="text-4xl md:text-5xl text-gray-800 font-bold mb-4">Join EduHub Today</h2>
              <p className="text-lg text-gray-600">
                Experience a new way of learning and teaching. Join our growing community and unlock
                endless possibilities.
              </p>
                <Link
                    href={route('dashboard')}
                >
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg mt-8">
                            Get Started
                    </button>
                </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white">
            &copy; {new Date().getFullYear()} EduHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  </Box>
);