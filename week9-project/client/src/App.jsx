import React, { useReducer, useEffect, useState } from 'react';
import AddEventForm from './components/AddEventForm';
import EventList from './components/EventList';
import SearchEvent from './components/SearchEvent';
import LikedEvent from './components/LIkedEvent';
import { EventContext } from "./Helper/Context";
import BackToHomepage from './components/BackToHomepage';
import './App.css'

const eventReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EVENTS':
      return action.payload;
    case 'ADD_EVENT':
      return [...state, action.payload];
    case 'DELETE_EVENT':
      return state.filter(event => event.id !== action.payload);
    case 'UPDATE_EVENT':
      return state.map(event => event.id === action.payload.id ? action.payload : event);
    case 'TOGGLE_FAVORITE':
      return state.map(event => event.id === action.payload ? { ...event, is_favorited: !event.is_favorited } : event);
    case 'SEARCH_EVENT':
      return action.payload;
    case 'LIKED_EVENT':
      return action.payload;
    default:
      return state;
  }
};

const App = () => {
  const [events, dispatch] = useReducer(eventReducer, []);
  const [gameState, setGameState] = useState("menu");

  useEffect(() => {
    // Fetch initial list of events from the backend
    const fetchEvents = async () => {
      const response = await fetch('http://localhost:8080/events');
      const data = await response.json();
      dispatch({ type: 'SET_EVENTS', payload: data });
    };
    fetchEvents();
  }, []);

  return (
    <div className='app'>
      <h1>Event Management</h1>
      <EventContext.Provider
        value={{ gameState, setGameState}}
      >
        {gameState === 'menu' && <AddEventForm dispatch={dispatch} />}
        {gameState === 'menu' && <EventList events={events} dispatch={dispatch} />}
        {gameState === 'menu' && <SearchEvent dispatch={dispatch} />}
        {gameState === 'menu' && <LikedEvent dispatch={dispatch} />}

        {gameState === 'searchpage' && <EventList events={events} dispatch={dispatch} /> }
        {gameState === 'searchpage' && <BackToHomepage dispatch={dispatch} /> }

        {gameState === 'likedevent' && <EventList events={events} dispatch={dispatch} /> }
        {gameState === 'likedevent' && <BackToHomepage dispatch={dispatch} /> }
      </EventContext.Provider>
    </div>
  );
};


export default App;