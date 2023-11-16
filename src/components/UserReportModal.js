import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // This line is needed for accessibility reasons

const UserReportModal = ({ isOpen, onRequestClose, user }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="User Report"
    >
     <div className="flex flex-col h-full p-4">
        <h2 className="mb-4"><b>User Report</b></h2>
        {user && (
          <>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>ID: {user.id}</p>
            <p>Creation Date: {user.creationDate}</p>
          </>
        )}
        <button onClick={onRequestClose} className="mt-auto p-2 bg-blue-500 text-white rounded">Close</button>
      </div>
    </Modal>
  );
};

export default UserReportModal;
