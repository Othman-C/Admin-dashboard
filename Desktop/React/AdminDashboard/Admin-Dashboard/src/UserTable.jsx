import { useState } from "react";

function UserTable({ users, onDeleteUser, onEditUser }) {
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');

  const handleEditClick = (user) => {
    setEditId(user.id);
    setEditName(user.name);
    setEditEmail(user.email);
  };

  const handleSaveClick = () => {
    onEditUser({ id: editId, name: editName, email: editEmail });
    setEditId(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-4">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 border-b border-gray-100 text-slate-600 text-sm font-semibold">
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          {users && users.map((user) => (
            <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
              {user.id === editId ? (
                <>
                  <td className="p-3">
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="px-3 py-1.5 border border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    />
                  </td>
                  <td className="p-3">
                    <input
                      type="email"
                      value={editEmail}
                      onChange={(e) => setEditEmail(e.target.value)}
                      className="px-3 py-1.5 border border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    />
                  </td>
                  <td className="p-3 text-right space-x-2">
                    <button
                      onClick={handleSaveClick}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditId(null)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="p-4 font-medium text-gray-900">{user.name}</td>
                  <td className="p-4 text-gray-500">{user.email}</td>
                  <td className="p-4 text-right space-x-2">
                    <button
                      onClick={() => handleEditClick(user)}
                      className="bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDeleteUser(user.id)}
                      className="bg-rose-50 hover:bg-rose-100 text-rose-600 px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer"
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;