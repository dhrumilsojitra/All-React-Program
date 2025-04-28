import { useState } from "react";

function DataTable() {
  const employees = [
    {
      name: "Olivia Martin",
      age: 26,
      city: "San Diego",
      salary: 62000,
      post: "Frontend Developer",
    },
    {
      name: "Liam Johnson",
      age: 31,
      city: "Denver",
      salary: 71000,
      post: "Cloud Engineer",
    },
    {
      name: "Emma Brown",
      age: 29,
      city: "Atlanta",
      salary: 69000,
      post: "Business Analyst",
    },
    {
      name: "Noah Smith",
      age: 34,
      city: "Phoenix",
      salary: 75000,
      post: "DevOps Engineer",
    },
    {
      name: "Ava Davis",
      age: 24,
      city: "Portland",
      salary: 58000,
      post: "Graphic Designer",
    },
    {
      name: "William Garcia",
      age: 39,
      city: "Philadelphia",
      salary: 80000,
      post: "Solutions Architect",
    },
    {
      name: "Sophia Martinez",
      age: 27,
      city: "Orlando",
      salary: 67000,
      post: "Content Strategist",
    },
    {
      name: "James Robinson",
      age: 36,
      city: "Charlotte",
      salary: 72000,
      post: "Full Stack Developer",
    },
    {
      name: "Isabella Clark",
      age: 30,
      city: "Nashville",
      salary: 64000,
      post: "SEO Specialist",
    },
    {
      name: "Lucas Rodriguez",
      age: 41,
      city: "Detroit",
      salary: 79000,
      post: "IT Manager",
    },
  ];

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState({
    key: "name",
    direction: "asc",
  });

  const filteredData = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.age.toString().includes(search.toLowerCase()) ||
      e.city.toLowerCase().includes(search.toLowerCase()) ||
      e.post.toLowerCase().includes(search.toLowerCase()) ||
      e.salary.toString().includes(search.toLowerCase())
  );

  const handleSort = (key) => {
    let direction = "asc";
    if (sort.key === key && sort.direction === "asc") {
      direction = "desc";
    }
    setSort({ key, direction });
  };

  const sortedData = filteredData.sort((a, b) => {
    if (a[sort.key] < b[sort.key]) {
      return sort.direction === "asc" ? 1 : -1;
    }

    if (a[sort.key] > b[sort.key]) {
      return sort.direction === "asc" ? -1 : 1;
    }

    return 0;
  });

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search by Name, Age, City, Post, or Salary..."
        className="border border-gray-400 p-2 mb-4 w-full rounded-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-md shadow-md">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-2 px-4">Sr No</th>
              <th className="py-2 px-4">
                <button onClick={() => handleSort("name")}>Name</button>
              </th>
              <th className="py-2 px-4">
                <button onClick={() => handleSort("age")}>Age</button>
              </th>
              <th className="py-2 px-4">
                <button onClick={() => handleSort("city")}>City</button>
              </th>
              <th className="py-2 px-4">
                <button onClick={() => handleSort("post")}>Post</button>
              </th>
              <th className="py-2 px-4">
                <button onClick={() => handleSort("salary")}>Salary</button>
              </th>
            </tr>
          </thead>

          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((ele, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="border px-4 py-2 text-center">{index + 1}</td>
                  <td className="border px-4 py-2">{ele.name}</td>
                  <td className="border px-4 py-2 text-center">{ele.age}</td>
                  <td className="border px-4 py-2">{ele.city}</td>
                  <td className="border px-4 py-2">{ele.post}</td>
                  <td className="border px-4 py-2 text-right">
                    ${ele.salary.toLocaleString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-6">
                  No matching records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
