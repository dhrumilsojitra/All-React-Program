import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Navigation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    const item = items.find((item) => item.id === parseInt(id));
    if (item) {
      setName(item.name);
    }
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const items = JSON.parse(localStorage.getItem("items")) || [];
    const updatedItems = items.map((item) =>
      item.id === parseInt(id) ? { ...item, name } : item
    );
    localStorage.setItem("items", JSON.stringify(updatedItems));
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Item</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Update name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Navigation;
