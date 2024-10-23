import React from 'react';
import TicketCard from './TicketCard';
import GroupHeader from '../common/GroupHeader';
import { getStatusIcon } from '../../utils/statusUtils';

function StatusGroup({ tickets, users, sortTickets }) {
  const groups = {};

  tickets.forEach(ticket => {
    if (!groups[ticket.status]) {
      groups[ticket.status] = [];
    }
    groups[ticket.status].push(ticket);
  });

  const statusOrder = ['Backlog', 'Todo', 'In progress', 'Done', 'Cancelled'];

  return (
    <>
      {statusOrder.map(status => (
        groups[status] && (
          <div key={status} className="group-column">
            <GroupHeader
              icon={getStatusIcon(status)}
              title={status}
              count={groups[status].length}
            />
            <div className="tickets-container">
              {sortTickets(groups[status]).map(ticket => (
                <TicketCard 
                  key={ticket.id}
                  ticket={ticket}
                  user={users.find(u => u.id === ticket.userId)}
                />
              ))}
            </div>
          </div>
        )
      ))}
    </>
  );
}

export default StatusGroup;
