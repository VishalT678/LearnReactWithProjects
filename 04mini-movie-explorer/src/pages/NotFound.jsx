import {Link} from "react-router-dom";

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
            <p className="text-xl text-gray-700 mb-6">Page Not Found</p>
            <Link
            to="/"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full shadow transition"
            >Go Home
            </Link>
        </div>
    )
}

export default NotFound;