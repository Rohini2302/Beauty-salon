import React, { useState } from "react";
import axios from 'axios';  // Import axios

const ReservationForm = ({ closeForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [selection, setSelection] = useState(""); // For the dropdown selection
  const [submitted, setSubmitted] = useState(false); // To track submission status

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reservationData = { name, email, date, package: selection };

    try {
      // Send data to the backend
      const response = await axios.post('http://localhost:5000/api/reservations', reservationData);

      // If successful, log the response and set submission status
      console.log(response.data);
      setSubmitted(true);

      // Close the form after submission
      setTimeout(() => closeForm(), 2000); // Close form after 2 seconds to show the confirmation message
    } catch (error) {
      console.error("There was an error submitting the reservation:", error);
      alert("Failed to submit the reservation");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 backdrop-blur-lg z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {submitted ? (
          // Display success message after form is submitted
          <div className="text-center">
            <h2 className="text-xl font-semibold text-green-600">Your reservation has been submitted!</h2>
            <p className="mt-4 text-sm text-gray-600">We will confirm your reservation shortly.</p>
          </div>
        ) : (
          // Form content displayed if not yet submitted
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl mb-4">Make a Reservation</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Dropdown Menu */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Choose a Package</label>
              <select
                value={selection}
                onChange={(e) => setSelection(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>Select a package</option>
                <option value="haircut">Haircut</option>
                <option value="spa">Spa</option>
                <option value="makeup">Makeup</option>
                <option value="nailArt">Nail Art</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Reservation Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={closeForm}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Close
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ReservationForm;
