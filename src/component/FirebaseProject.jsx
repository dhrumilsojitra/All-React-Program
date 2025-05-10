import React, { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from './firebase';

const FirebaseProject = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');
  const [editingId, setEditingId] = useState(null);

  const itemsCollection = collection(db, 'items');

  const fetchItems = async () => {
    const data = await getDocs(itemsCollection);
    setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleAdd = async () => {
    if (!input) return;
    await addDoc(itemsCollection, { name: input });
    setInput('');
    fetchItems();
  };

  const handleUpdate = async (id) => {
    const itemDoc = doc(db, 'items', id);
    await updateDoc(itemDoc, { name: input });
    setInput('');
    setEditingId(null);
    fetchItems();
  };

  const handleDelete = async (id) => {
    const itemDoc = doc(db, 'items', id);
    await deleteDoc(itemDoc);
    fetchItems();
  };

  return (
    <div>
      <h2>Firebase CRUD Project</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={() => (editingId ? handleUpdate(editingId) : handleAdd())}>
        {editingId ? 'Update' : 'Add'}
      </button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}{' '}
            <button onClick={() => {
              setInput(item.name);
              setEditingId(item.id);
            }}>
              Edit
            </button>{' '}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FirebaseProject;