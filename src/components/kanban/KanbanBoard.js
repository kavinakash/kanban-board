import React from 'react';
import StatusGroup from './StatusGroup';
import UserGroup from './UserGroup';
import PriorityGroup from './PriorityGroup';
import { getPriorityLabel } from '../../utils/priorityUtils';

function KanbanBoard({ tickets, users, grouping, sorting }) {
  const sortTickets = (ticketsToSort) => {
    return [...ticketsToSort].sort((a, b) => {
      if (sorting === 'priority') {
        return b.priority - a.priority;
      }
      return a.title.localeCompare(b.title);
    });
  };

  return (
    <div className="kanban-board">
      {grouping === 'status' && (
        <StatusGroup tickets={tickets} users={users} sortTickets={sortTickets} />
      )}
      {grouping === 'user' && (
        <UserGroup tickets={tickets} users={users} sortTickets={sortTickets} />
      )}
      {grouping === 'priority' && (
        <PriorityGroup tickets={tickets} users={users} sortTickets={sortTickets} getPriorityLabel={getPriorityLabel} />
      )}
    </div>
  );
}

export default KanbanBoard;
