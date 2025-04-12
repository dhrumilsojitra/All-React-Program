import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DetailPage() {
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
  }, []);

  const deleteItem = (index) => {
    const updated = [...items];
    updated.splice(index, 1);
    setItems(updated);
    localStorage.setItem("items", JSON.stringify(updated));
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditName(items[index].name);
    setEditEmail(items[index].email);
  };

  const saveEdit = () => {
    const updated = [...items];
    updated[editIndex] = { name: editName, email: editEmail };
    setItems(updated);
    localStorage.setItem("items", JSON.stringify(updated));
    setEditIndex(null);
    setEditName("");
    setEditEmail("");
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditName("");
    setEditEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">User List</h2>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded p-4">
        {items.length === 0 ? (
          <p className="text-center text-gray-500">No data found.</p>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3">
                    {editIndex === index ? (
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="border px-2 py-1 w-full"
                      />
                    ) : (
                      item.name
                    )}
                  </td>
                  <td className="p-3">
                    {editIndex === index ? (
                      <input
                        type="email"
                        value={editEmail}
                        onChange={(e) => setEditEmail(e.target.value)}
                        className="border px-2 py-1 w-full"
                      />
                    ) : (
                      item.email
                    )}
                  </td>
                  <td className="p-3 space-x-2">
                    {editIndex === index ? (
                      <>
                        <button
                          onClick={saveEdit}
                          className="bg-green-500 text-white px-2 py-1 rounded"
                        >
                          Save
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="bg-gray-400 text-white px-2 py-1 rounded"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => startEdit(index)}
                          className="bg-yellow-500 text-white px-2 py-1 rounded"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteItem(index)}
                          className="bg-red-600 text-white px-2 py-1 rounded"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="mt-4 text-center">
          <Link to="/" className="text-blue-600 hover:underline">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}
