import backlogIcon from '../assets/Backlog.svg';
import todoIcon from '../assets/To-do.svg';
import progressIcon from '../assets/in-progress.svg';
import doneIcon from '../assets/Done.svg';
import cancelledIcon from '../assets/Cancelled.svg';

export const getStatusIcon = (status) => {
  switch (status) {
    case 'Backlog': return backlogIcon;
    case 'Todo': return todoIcon;
    case 'In progress': return progressIcon;
    case 'Done': return doneIcon;
    case 'Cancelled': return cancelledIcon;
    default: return null;
  }
};
