import React from "react";

function AdminDashboard({ events, setEvents, registrations }) {
  const handleDelete = (id) => {
    setEvents(events.filter(e => e.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">Admin Dashboard</h1>

      <h2 className="text-2xl font-semibold mb-4">Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {events.map(event => (
          <div key={event.id} className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
            <p className="text-gray-500 mb-4">Date: {event.date}</p>
            <button onClick={() => handleDelete(event.id)} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">Delete</button>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Registrations</h2>
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Event</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((r, idx) => (
            <tr key={idx} className="text-center">
              <td className="py-2 px-4 border-b">{r.name}</td>
              <td className="py-2 px-4 border-b">{r.email}</td>
              <td className="py-2 px-4 border-b">{r.event}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
