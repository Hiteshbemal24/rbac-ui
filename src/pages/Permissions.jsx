import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';  // Import toast
import 'react-toastify/dist/ReactToastify.css';  // Import the toast styles
import Modal from '../components/Modal';
import Table from '../components/Table';
import '../App.css';

const Permissions = () => {
  const [permissions, setPermissions] = useState([
    { id: 1, name: 'View' },
    { id: 2, name: 'Edit' },
    { id: 3, name: 'Delete' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPermission, setNewPermission] = useState('');

  const addPermission = () => {
    if (newPermission.trim() === '') {
      toast.error('Permission name cannot be empty!');
      return;
    }

    // Add new permission to the list
    setPermissions([...permissions, { id: permissions.length + 1, name: newPermission }]);
    setNewPermission('');  // Clear input field
    setIsModalOpen(false);  // Close modal
    toast.success('Permission added successfully!');  // Show success toast
  };

  const deletePermission = (id) => {
    // Filter out the permission with the given id
    const updatedPermissions = permissions.filter(permission => permission.id !== id);
    setPermissions(updatedPermissions);  // Update permissions array
    toast.success('Permission deleted successfully!');  // Show success toast
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Permissions</h1>
        <button
          className="add-user flex justify-center items-center ml-44 w-[131px] h-[46px] bg-blue-900 text-[#FFFFFF] mt-4 rounded-[104px] text-center"
          onClick={() => setIsModalOpen(true)}
        >
          <span className="mr-2 mb-2 text-center text-[18px]">+</span>
          Add Permission
        </button>
      </div>
      <Table
        headers={['ID', 'Permission Name', 'Actions']}
        data={permissions}
        actions={[
          ({ row }) => (
            <button
              className="text-red-700 bg-red-100 rounded border-[1px] px-3 border-red-300 hover:bg-red-300 hover:text-white"
              onClick={() => deletePermission(row.id)}  // Call delete function
            >
              Delete
            </button>
          ),
        ]}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add Permission"
      >
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Permission Name</label>
          <input
            type="text"
            value={newPermission}
            onChange={(e) => setNewPermission(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={addPermission}
        >
          Save Permission
        </button>
      </Modal>
      
    </div>
  );
};

export default Permissions;
