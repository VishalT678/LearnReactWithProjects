import { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/VishalT678")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  if (!data) return <div className="text-center mt-10 text-white">Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center flex-grow py-10">
      <img
        src={data.avatar_url}
        alt={data.login}
        className="rounded-full w-32 h-32 mb-4 shadow-lg border-4 border-yellow-400"
      />
      <h2 className="text-2xl font-bold mb-2 text-white">{data.login}</h2>
      <p className="text-lg text-gray-200 mb-2">Followers: {data.followers}</p>
      <a
        href={data.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline font-semibold"
      >
        Visit Github Profile
      </a>
    </div>
  );
}

export default Github;