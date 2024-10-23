import React, { useState } from 'react';
import './App.css';
import DisplayButton from './components/common/DisplayButton';
import KanbanBoard from './components/kanban/KanbanBoard';
import LoadingIndicator from './components/common/LoadingIndicator';
import useDataFetcher from './hooks/useDataFetcher';

function App() {
  const { data, loading } = useDataFetcher('https://api.quicksell.co/v1/internal/frontend-assignment');
  const [grouping, setGrouping] = useState(() => {
    const savedGrouping = sessionStorage.getItem('grouping');
    return savedGrouping || 'status';
  });
  const [sorting, setSorting] = useState(() => {
    const savedSorting = sessionStorage.getItem('sorting');
    return savedSorting || 'priority';
  });

  const handleGroupingChange = (newGrouping) => {
    setGrouping(newGrouping);
    sessionStorage.setItem('grouping', newGrouping);
  };

  const handleSortingChange = (newSorting) => {
    setSorting(newSorting);
    sessionStorage.setItem('sorting', newSorting);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <DisplayButton
          grouping={grouping}
          sorting={sorting}
          onGroupingChange={handleGroupingChange}
          onSortingChange={handleSortingChange}
        />
      </nav>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <KanbanBoard
          tickets={data.tickets}
          users={data.users}
          grouping={grouping}
          sorting={sorting}
        />
      )}
    </div>
  );
}

export default App;
