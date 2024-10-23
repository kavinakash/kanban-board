import React from 'react';
import { getPriorityIcon } from '../../utils/priorityUtils';
import { getStatusIcon } from '../../utils/statusUtils';

function TicketCard({ ticket, user, showStatusIcon }) {
  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        {user && (
          <div className="user-avatar">
            {user.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="ticket-title">
          {showStatusIcon && (
            <img src={getStatusIcon(ticket.status)} alt="Status" className="status-icon" />
          )}
        {ticket.title}
      </div>
      <div className="ticket-tags">
        <img src={getPriorityIcon(ticket.priority, 'TicketCard')} alt="Priority" className="priority-icon" />
        <div className="tag-container">
          <div className="circle-icon"></div>
          <span className="tag">
            {ticket.tag}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
