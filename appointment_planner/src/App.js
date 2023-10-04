import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

// { name: "name1", contact: "345", date: "01.01.2001", time: "12:00" },
// { name: "name2", contact: "642", date: "01.01.2002", time: "19:00" },
// { name: "name3", contact: "792", date: "01.01.2003", time: "14:00" },

// { name: "name1", phoneNumber: 111, email: "email@gmail.com" },
// { name: "name2", phoneNumber: 222, email: "test@gmail.com" },
// { name: "name3", phoneNumber: 333, email: "main@yahoo.com" },

function App() {
  const [appointment, setAppointment] = useState([]);
  const [contact, setContact] = useState([
    { name: "John", phoneNumber: "123-456-7890", email: "john@example.com" },
    { name: "Jane", phoneNumber: "987-654-3210", email: "jane@example.com" },
  ]);

  /*
  Define state variables for 
  contacts and appointments 
  */
  const addContact = (name, phoneNumber, email) => {
    const newContact = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
    };

    setContact((prevContacts) => [...prevContacts, newContact]);
  };

  const addAppointment = (name, contact, date, time) => {
    const newAppointment = {
      name: name,
      contact: contact,
      date: date,
      time: time,
    };

    setAppointment((prevAppointments) => [...prevAppointments, newAppointment]);
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={<ContactsPage contact={contact} addContact={addContact} />}
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              appointment={appointment}
              contacts={contact}
              addAppointment={addAppointment}
            />
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
