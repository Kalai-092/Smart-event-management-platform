import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import EventList from "./components/EventList";
import EventRegistration from "./components/EventRegistration";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  const [user, setUser] = useState(null);

  // Dummy events data
  const [events, setEvents] = useState([
    { id: 1, name: "Tech Talk", date: "2026-01-10" },
    { id: 2, name: "Coding Workshop", date: "2026-01-15" },
    { id: 3, name: "AI Seminar", date: "2026-01-20" }
  ]);

  // Dummy registrations data
  const [registrations, setRegistrations] = useState([]);

  return (
    <Router>
      <Switch>
        {/* Login Page */}
        <Route exact path="/" render={() => <Login setUser={setUser} />} />

        {/* Event List Page */}
        <Route
          path="/events"
          render={() =>
            user ? <EventList events={events} /> : <Redirect to="/" />
          }
        />

        {/* Event Registration Page */}
        <Route
          path="/register/:id"
          render={(props) =>
            user ? (
              <EventRegistration
                {...props}
                events={events}
                registrations={registrations}
                setRegistrations={setRegistrations}
              />
            ) : (
              <Redirect to="/" />
            )
          }
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin"
          render={() =>
            user ? (
              <AdminDashboard
                events={events}
                setEvents={setEvents}
                registrations={registrations}
              />
            ) : (
              <Redirect to="/" />
            )
          }
        />

        {/* Catch-all route */}
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
}
export default App;
