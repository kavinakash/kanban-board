import React from 'react';
import TicketCard from './TicketCard';
import GroupHeader from '../common/GroupHeader';
import { getPriorityLabel, getPriorityIcon } from '../../utils/priorityUtils';

function PriorityGroup({ tickets, users, sortTickets }) {
  const groups = {};

  tickets.forEach(ticket => {
    const priorityLabel = getPriorityLabel(ticket.priority);
    if (!groups[priorityLabel]) {
      groups[priorityLabel] = [];
    }
    groups[priorityLabel].push(ticket);
  });

  const priorityOrder = [0, 4, 1, 2, 3]; // Order by numeric priority

  return (
    <>
      {priorityOrder.map(priority => {
        const priorityLabel = getPriorityLabel(priority);
        return (
          groups[priorityLabel] && (
            <div key={priorityLabel} className="group-column">
              <GroupHeader
                icon={getPriorityIcon(priority)} // Pass numeric priority
                title={priorityLabel}
                count={groups[priorityLabel].length}
              />
              <div className="tickets-container">
                {sortTickets(groups[priorityLabel]).map(ticket => (
                  <TicketCard 
                    key={ticket.id}
                    ticket={ticket}
                    user={users.find(u => u.id === ticket.userId)}
                    showStatusIcon={true} // Ensure status icon is shown
                  />
                ))}
              </div>
            </div>
          )
        );
      })}
    </>
  );
}

export default PriorityGroup;
