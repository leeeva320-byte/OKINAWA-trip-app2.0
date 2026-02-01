import React from 'react';
import { Home, MapPin, ChevronRight } from 'lucide-react';
import { ITINERARY_DATA } from '../data/travelData';

interface HomeViewProps {
  goToItineraryDay: (dayKey: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ goToItineraryDay }) => (
  <div className="px-5 py-6 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-300">
    <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
      <Home className="mr-2 text-blue-500" /> 行程總覽
    </h2>
    <div className="space-y-4">
      {Object.entries(ITINERARY_DATA).map(([key, dayData], index) => (
        <div 
          key={key}
          onClick={() => goToItineraryDay(key)}
          className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all active:scale-[0.99] group"
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-3">
               <div className="bg-blue-100 text-blue-600 font-black px-2.5 py-1 rounded-lg text-sm">Day {index + 1}</div>
               <span className="text-sm text-gray-500 font-bold tracking-wide">{dayData.date}</span>
            </div>
            <ChevronRight size={20} className="text-gray-300 group-hover:text-blue-500 transition-colors" />
          </div>
          <h3 className="text-xl font-black text-gray-800 mb-4 pl-1">{dayData.highlight}</h3>
          
          {dayData.overview ? (
            <div className="pl-2 relative space-y-0">
               <div className="absolute left-[11px] top-2 bottom-4 w-0.5 bg-gray-100"></div>
               {dayData.overview.map((item, idx) => {
                 const Icon = item.icon || MapPin;
                 return (
                   <div key={idx} className="flex items-center relative pb-4 last:pb-0">
                     <div className="w-6 h-6 rounded-full bg-white border-2 border-blue-100 flex items-center justify-center relative z-10 shrink-0 mr-3">
                       <Icon size={12} className="text-blue-500" />
                     </div>
                     <span className="text-sm font-medium text-gray-700">{item.title}</span>
                   </div>
                 );
               })}
            </div>
          ) : (
             <div className="text-sm text-gray-400">點擊查看詳細行程</div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default HomeView;