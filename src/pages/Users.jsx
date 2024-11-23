import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Modal from '../components/Modal';
import Table from '../components/Table';
import StatusIcon from '../components/StatusIcon';
import '../App.css';

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Hitesh', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Raj', role: 'Editor', status: 'Inactive' },
    { id: 3, name: 'Batman', role: 'Admin', status: 'Active' },
    { id: 4, name: 'Superman', role: 'Viewer', status: 'Inactive' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [newUserName, setNewUserName] = useState('');
  const [newUserRole, setNewUserRole] = useState('Viewer');
  const [newUserStatus, setNewUserStatus] = useState('Active');

  const openAddModal = () => {
    setIsModalOpen(true);
    setIsEditing(false);
    setNewUserName('');
    setNewUserRole('Viewer');
    setNewUserStatus('Active');
  };

  const openEditModal = (user) => {
    setIsModalOpen(true);
    setIsEditing(true);
    setCurrentUser(user);
    setNewUserName(user.name);
    setNewUserRole(user.role);
    setNewUserStatus(user.status);
  };

  const addUser = () => {
    if (newUserName.trim() === '') {
      toast.error('Name is required');
      return;
    }
    setUsers([
      ...users,
      { id: users.length + 1, name: newUserName, role: newUserRole, status: newUserStatus },
    ]);
    toast.success('User added successfully!');
    setIsModalOpen(false);
  };

  const editUser = () => {
    if (newUserName.trim() === '') {
      toast.error('Name is required');
      return;
    }
    setUsers(
      users.map((user) =>
        user.id === currentUser.id
          ? { ...user, name: newUserName, role: newUserRole, status: newUserStatus }
          : user
      )
    );
    toast.info('User updated successfully!');
    setIsModalOpen(false);
    setCurrentUser(null);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    toast.warn('User deleted successfully!');
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <button
          className="add-user flex justify-center items-center ml-44 w-[131px] h-[46px] bg-blue-900 text-[#FFFFFF] mt-4 rounded-[104px] text-center"
          onClick={openAddModal}
        >
          <span className="mr-2 mb-2 text-center text-[18px]">+</span>
          Add User
        </button>
      </div>
      <Table
        headers={['ID', 'Name', 'Role', 'Status']}
        data={users.map((user) => ({
          ...user,
          status: (
            <div className="flex items-center">
              <StatusIcon status={user.status} />
              <span className="ml-2">{user.status}</span>
            </div>
          ),
        }))}
        actions={[
          ({ row }) => (
            <button
              className="text-blue-700 bg-blue-100 rounded border-[1px] px-6 border-blue-300 hover:bg-blue-300 hover:text-white"
              onClick={() => openEditModal(row)}
            >
              Edit
            </button>
          ),
          ({ row }) => (
            <button
              className="text-red-700 bg-red-100 rounded border-[1px] px-3 border-red-300 hover:bg-red-300 hover:text-white"
              onClick={() => deleteUser(row.id)}
            >
              Delete
            </button>
          ),
        ]}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={isEditing ? 'Edit User' : 'Add User'}
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="border rounded px-3 py-2 w-full"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            placeholder="Enter user name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <select
            className="border rounded px-3 py-2 w-full"
            value={newUserRole}
            onChange={(e) => setNewUserRole(e.target.value)}
          >
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            className="border rounded px-3 py-2 w-full"
            value={newUserStatus}
            onChange={(e) => setNewUserStatus(e.target.value)}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={isEditing ? editUser : addUser}
        >
          {isEditing ? 'Update User' : 'Save User'}
        </button>
      </Modal>
    </div>
  );
};

export default Users;
