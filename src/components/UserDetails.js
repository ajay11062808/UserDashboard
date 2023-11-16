import React, { useMemo, useState, useEffect } from 'react';
import { useTable, useFilters } from 'react-table';
import { fetchUsers } from '../services/api';
import UserReportModal from './UserReportModal';

const UserDetails = () => {
  const [data, setData] = useState([]);
  const [filterInput, setFilterInput] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const users = await fetchUsers();
      setData(users);
    };

    getUsers();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: 'Username',
        accessor: 'username',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
      },
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Creation Date',
        accessor: 'creationDate',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable({ columns, data }, useFilters);

  // Update the input value and our global filter state
  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setFilter('username', value);
    setFilterInput(value);
  };
  const handleRowClick = user => {
    setSelectedUser(user);
  };

  return (
    <>
      <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={"Search by username"}
        className="p-2 border rounded mb-4 pl-8"
        style={{paddingRight:'150px'}}
      />
      <table {...getTableProps()} className="w-full text-left border-collapse">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="bg-blue-500 text-white">
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="p-2">{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="align-baseline">
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} onClick={() => handleRowClick(row.original)} className="hover:bg-blue-100 cursor-pointer">
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()} className="p-2 border">{cell.render('Cell')}</td>
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <UserReportModal
        isOpen={selectedUser !== null}
        onRequestClose={() => setSelectedUser(null)}
        user={selectedUser}
      />
    </>
  );
};

export default UserDetails;
