import React, { useState } from 'react';
import { Calendar, Plane, Hotel, CheckSquare, FileText } from 'lucide-react';
import TabButton from './components/TabButton';
import HomeView from './views/HomeView';
import ItineraryView from './views/ItineraryView';
import FlightView from './views/FlightView';
import HotelView from './views/HotelView';
import PackingView from './views/PackingView';
import NotesView from './views/NotesView';
import { INITIAL_PARENTS_LIST, INITIAL_KIDS_LIST } from './data/travelData';
import { PackingItem, Note, PackingTeam } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedDay, setSelectedDay] = useState('day1');
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [notes, setNotes] = useState<Note[]>([]); 
  const [newNote, setNewNote] = useState("");

  const [packingLists, setPackingLists] = useState<Record<string, PackingItem[]>>({
    parents: INITIAL_PARENTS_LIST.map(i => ({...i, checked: false})),
    kids: INITIAL_KIDS_LIST.map(i => ({...i, checked: false}))
  });
  const [packingTeam, setPackingTeam] = useState<PackingTeam>(null); 

  const togglePackItem = (listType: string, id: number) => {
    setPackingLists(prev => ({
      ...prev,
      [listType]: prev[listType].map(item => 
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    }));
  };

  const addNote = () => {
    if (!newNote.trim()) return;
    const note = {
      id: Date.now(),
      text: newNote,
      date: new Date().toLocaleDateString()
    };
    setNotes([note, ...notes]);
    setNewNote("");
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const goToItineraryDay = (dayKey: string) => {
    setSelectedDay(dayKey);
    setActiveTab('itinerary');
  };

  const toggleItineraryItem = (day: string, index: number) => {
    const key = `${day}-${index}`;
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setPackingTeam(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-gray-900 bg-gray-50 min-h-screen mx-auto max-w-md shadow-2xl overflow-hidden relative selection:bg-blue-100">
      <div 
        className="h-12 bg-white/95 backdrop-blur-md fixed top-0 w-full z-50 flex justify-between items-center px-6 border-b border-gray-100 cursor-pointer max-w-md"
        onClick={() => { setActiveTab('home'); setPackingTeam(null); }}
      >
        <span className="text-sm font-bold text-gray-800 flex items-center">
          Okinawa 2026 🏖️
        </span>
        <div className="flex space-x-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 pt-12">
        {activeTab === 'home' && <HomeView goToItineraryDay={goToItineraryDay} />}
        {activeTab === 'itinerary' && <ItineraryView selectedDay={selectedDay} setSelectedDay={setSelectedDay} expandedItems={expandedItems} toggleItineraryItem={toggleItineraryItem} />}
        {activeTab === 'flight' && <FlightView />}
        {activeTab === 'hotel' && <HotelView />}
        {activeTab === 'packing' && <PackingView packingLists={packingLists} togglePackItem={togglePackItem} setPackingTeam={setPackingTeam} packingTeam={packingTeam} />}
        {activeTab === 'notes' && <NotesView notes={notes} deleteNote={deleteNote} newNote={newNote} setNewNote={setNewNote} addNote={addNote} />}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-2 pb-safe-bottom z-50 flex justify-around items-end h-[60px] pb-2 safe-area-bottom max-w-md mx-auto">
        <TabButton id="itinerary" icon={<Calendar />} label="行程" onClick={() => handleTabChange('itinerary')} isActive={activeTab === 'itinerary'} />
        <TabButton id="flight" icon={<Plane />} label="航班" onClick={() => handleTabChange('flight')} isActive={activeTab === 'flight'} />
        <TabButton id="hotel" icon={<Hotel />} label="住宿" onClick={() => handleTabChange('hotel')} isActive={activeTab === 'hotel'} />
        <TabButton id="packing" icon={<CheckSquare />} label="打包" onClick={() => setActiveTab('packing')} isActive={activeTab === 'packing'} />
        <TabButton id="notes" icon={<FileText />} label="小記" onClick={() => handleTabChange('notes')} isActive={activeTab === 'notes'} />
      </div>
    </div>
  );
}