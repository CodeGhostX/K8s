import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [fullName, setFullName] = useState("");
  const [users, setUsers] = useState([]);

  const getBackendData = async () => {
    try {
      const result = await axios.get("http://localhost:3000");
      setUsers(result.data.allUsers);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAddUser = async () => {
    if (!fullName.trim()) return;
    try {
      await axios.post("http://localhost:3000", { fullName });
      setFullName("");
      getBackendData();
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  useEffect(() => {
    getBackendData();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>List of all users</h1>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Enter full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <button onClick={handleAddUser} style={{ marginLeft: "0.5rem" }}>
          Add
        </button>
      </div>

      <h2>All Users:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.fullName}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
