import React from 'react';
import addIcon from '../../assets/add.svg';
import optionIcon from '../../assets/3 dot menu.svg';

function GroupHeader({ icon, title, count }) {
  return (
    <div className="group-header">
      <img src={icon} alt={title} className="priority-icon" />
      <div>{title}</div>
      <span className="ticket-count">{count}</span>
      <button className="add-button">
        <img src={addIcon} alt="Add" />
      </button>
      <button className="option-button">
        <img src={optionIcon} alt="Options" />
      </button>
    </div>
  );
}

export default GroupHeader;
