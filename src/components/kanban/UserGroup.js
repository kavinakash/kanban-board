import React from 'react';
import TicketCard from './TicketCard';
import addIcon from '../../assets/add.svg';
import optionIcon from '../../assets/3 dot menu.svg';

function UserGroup({ tickets, users, sortTickets }) {
  const groups = {};

  tickets.forEach(ticket => {
    const user = users.find(u => u.id === ticket.userId);
    const userName = user ? user.name : 'Unassigned';
    if (!groups[userName]) {
      groups[userName] = [];
    }
    groups[userName].push(ticket);
  });

  return (
    <>
      {Object.entries(groups).map(([userName, groupTickets]) => (
        <div key={userName} className="group-column">
          <div className="group-header">
            <div className="user-avatar">{userName.charAt(0)}</div>
            <div>{userName}</div>
            <span className="ticket-count">{groupTickets.length}</span>
            <button className="add-button">
              <img src={addIcon} alt="Add" />
            </button>
            <button className="option-button">
              <img src={optionIcon} alt="Options" />
            </button>
          </div>
          <div className="tickets-container">
            {sortTickets(groupTickets).map(ticket => (
              <TicketCard 
                key={ticket.id}
                ticket={ticket}
                user={users.find(u => u.id === ticket.userId)}
                showStatusIcon={true} // Ensure status icon is shown
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default UserGroup;
