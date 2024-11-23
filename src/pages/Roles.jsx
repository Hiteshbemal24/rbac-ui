import React, { useState } from 'react';
import { toast } from 'react-toastify';

import Modal from '../components/Modal';
import Table from '../components/Table';
import '../App.css';

const Roles = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', permissions: ['All Access'] },
    { id: 2, name: 'Editor', permissions: ['Edit', 'View'] },
    { id: 3, name: 'Viewer', permissions: ['View Only'] },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);  // Track if we are editing an existing role
  const [newRole, setNewRole] = useState({ id: null, name: '', permissions: [] });
  const [customPermission, setCustomPermission] = useState('');

  const handlePermissionChange = (permission) => {
    if (newRole.permissions.includes(permission)) {
      setNewRole({
        ...newRole,
        permissions: newRole.permissions.filter((perm) => perm !== permission),
      });
    } else {
      setNewRole({ ...newRole, permissions: [...newRole.permissions, permission] });
    }
  };

  const addCustomPermission = () => {
    if (customPermission.trim()) {
      setNewRole({ ...newRole, permissions: [...newRole.permissions, customPermission.trim()] });
      setCustomPermission('');
    } else {
      toast.error('Permission cannot be empty!');
    }
  };

  const addOrEditRole = () => {
    if (!newRole.name.trim()) {
      toast.error('Role name is required!');
      return;
    }
    if (newRole.permissions.length === 0) {
      toast.error('At least one permission is required!');
      return;
    }

    if (isEditing) {
      // Edit existing role
      setRoles(roles.map(role => role.id === newRole.id ? newRole : role));
      toast.success('Role updated successfully!');
    } else {
      // Add new role
      setRoles([...roles, { id: roles.length + 1, ...newRole }]);
      toast.success('Role added successfully!');
    }

    setNewRole({ id: null, name: '', permissions: [] });
    setIsModalOpen(false);
    setIsEditing(false);
  };

  const editRole = (role) => {
    setNewRole(role);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const deleteRole = (roleId) => {
    setRoles(roles.filter((role) => role.id !== roleId));
    toast.success('Role deleted successfully!');
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Roles</h1>
        <button
          className="add-user flex justify-center items-center ml-44 w-[131px] h-[46px] bg-blue-900 text-[#FFFFFF] mt-4 rounded-[104px] text-center"
          onClick={() => setIsModalOpen(true)}
        >
          <span className="mr-2 mb-2 text-center text-[18px]">+</span>
          Add Role
        </button>
      </div>
      <Table
        headers={['ID', 'Role Name', 'Permissions']}
        data={roles.map((role) => ({
          ...role,
          permissions: Array.isArray(role.permissions) ? role.permissions.join(', ') : '', 
        }))}
        actions={[
          ({ row }) => (
            <>
              <button
                onClick={() => editRole(row)}
                className="text-blue-700 bg-blue-100 rounded border-[1px] px-6 border-blue-300 hover:bg-blue-300 hover:text-white"
              >
                Edit
              </button>
              <button
                onClick={() => deleteRole(row.id)}
                className="text-red-700 bg-red-100 rounded border-[1px] px-3 border-red-300 hover:bg-red-300 hover:text-white"
              >
                Delete
              </button>
            </>
          ),
        ]}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={isEditing ? 'Edit Role' : 'Add Role'}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Role Name</label>
          <input
            type="text"
            value={newRole.name}
            onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter role name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Permissions</label>
          <div className="flex flex-wrap gap-2">
            {['Read', 'Write', 'Delete'].map((permission) => (
              <label key={permission} className="flex items-center">
                <input
                  type="checkbox"
                  checked={newRole.permissions.includes(permission)}
                  onChange={() => handlePermissionChange(permission)}
                  className="mr-2"
                />
                {permission}
              </label>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Add Custom Permission</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={customPermission}
              onChange={(e) => setCustomPermission(e.target.value)}
              className="w-full px-4 py-2 border rounded"
              placeholder="Enter custom permission"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={addCustomPermission}
            >
              Add
            </button>
          </div>
        </div>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={addOrEditRole}
        >
          {isEditing ? 'Save Changes' : 'Save Role'}
        </button>
      </Modal>
    </div>
  );
};

export default Roles;
