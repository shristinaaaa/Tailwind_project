function App() {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-6">

      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl text-center">

        <div className="w-24 h-24 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-white text-4xl font-bold">
            S
          </span>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Shristina
        </h1>

        <h2 className="text-lg text-pink-600 font-medium mb-4">
          BSc CSIT Student
        </h2>

        <p className="text-gray-600 mb-6">
          Learning web development and building beautiful websites with React and Tailwind CSS.
        </p>

        <button className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold">
          View My Profile
        </button>

      </div>

    </div>
  )
}

export default App