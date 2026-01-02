import React from "react";
import { useHistory } from "react-router-dom";

function EventList({ events }) {
  const history = useHistory();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map(event => (
          <div
            key={event.id}
            className="bg-white p-6 rounded-xl shadow hover:scale-105 transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
            <p className="text-gray-500 mb-4">Date: {event.date}</p>
            <button
              onClick={() => history.push(`/register/${event.id}`)}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              Register
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventList;
