import lowPriorityIcon from '../assets/Img - Low Priority.svg';
import mediumPriorityIcon from '../assets/Img - Medium Priority.svg';
import highPriorityIcon from '../assets/Img - High Priority.svg';
import urgentPriorityIcon from '../assets/SVG - Urgent Priority colour.svg';
import urgentPriorityGreyIcon from '../assets/SVG - Urgent Priority grey.svg';
import noPriorityIcon from '../assets/No-priority.svg';

export const getPriorityLabel = (priority) => {
  const labels = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No priority'
  };
  return labels[priority];
};

export const getPriorityIcon = (priority, calledFrom = '') => {
  switch (priority) {
    case 0: return noPriorityIcon;
    case 1: return lowPriorityIcon;
    case 2: return mediumPriorityIcon;
    case 3: return highPriorityIcon;
    case 4: return calledFrom === 'TicketCard' ? urgentPriorityGreyIcon : urgentPriorityIcon;
    default: return noPriorityIcon;
  }
};
