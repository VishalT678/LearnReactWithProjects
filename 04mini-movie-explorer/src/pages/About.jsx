function About() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow">
      <div className="bg-white/90 rounded-2xl shadow-2xl p-10 flex flex-col items-center max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-yellow-600 text-center">About Mini Movie Explorer</h1>
        <p className="text-lg text-gray-700 text-center">
          Mini Movie Explorer ek React project hai jisme aap movies dekh sakte hain, unki details check kar sakte hain, aur React Router DOM ke saare important concepts (routing, dynamic params, 404, etc.) practically samajh sakte hain.
          <br /><br />
          Yeh project learning aur demo purpose ke liye banaya gaya hai. Enjoy exploring!
        </p>
      </div>
    </div>
  );
}

export default About;