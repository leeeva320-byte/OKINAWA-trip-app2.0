import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Clock, ExternalLink, Utensils, Ticket, Info, Smile, BookOpen, Store, Car, Navigation } from 'lucide-react';
import { ITINERARY_DATA } from '../data/travelData';
import { WorshipGuideModal, RecommendedShopsModal, ParkingInfoModal } from '../components/Modals';

interface ItineraryViewProps {
  selectedDay: string;
  setSelectedDay: (day: string) => void;
  expandedItems: Record<string, boolean>;
  toggleItineraryItem: (day: string, index: number) => void;
}

const ItineraryView: React.FC<ItineraryViewProps> = ({ selectedDay, setSelectedDay, expandedItems, toggleItineraryItem }) => {
  const days = Object.keys(ITINERARY_DATA);
  const [showWorshipModal, setShowWorshipModal] = useState(false);
  const [showShopsModal, setShowShopsModal] = useState(false);
  const [parkingModalKey, setParkingModalKey] = useState<string | null>(null);

  return (
    <div className="pb-24 animate-in fade-in duration-300">
      {showWorshipModal && <WorshipGuideModal onClose={() => setShowWorshipModal(false)} />}
      {showShopsModal && <RecommendedShopsModal onClose={() => setShowShopsModal(false)} />}
      {parkingModalKey && <ParkingInfoModal onClose={() => setParkingModalKey(null)} locationKey={parkingModalKey} />}
      
      <div className="fixed top-12 left-0 right-0 mx-auto max-w-md z-40 bg-gray-50/95 backdrop-blur-sm px-4 py-3 border-b border-gray-200 shadow-sm">
        <div className="flex justify-between items-center gap-2">
          {days.map((day, idx) => {
            const isActive = selectedDay === day;
            const dayNum = idx + 1;
            const dateStr = ITINERARY_DATA[day].date.split(' ')[0]; 

            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`flex-1 flex flex-col items-center justify-center h-14 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105 z-10' 
                    : 'bg-white text-gray-400 border border-gray-100 opacity-80'
                }`}
              >
                {isActive ? (
                  <span className="text-xs font-black tracking-wider animate-in fade-in zoom-in duration-300">
                    Day {dayNum}
                  </span>
                ) : (
                  <span className="text-xs font-bold tracking-tight animate-in fade-in duration-300">
                    {dateStr}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="pt-24 px-5 space-y-4 mt-2">
        {ITINERARY_DATA[selectedDay].items.map((item, index) => {
          const isExpanded = expandedItems[`${selectedDay}-${index}`];
          const hasDetails = item.details;
          const dotColor = item.timelineColor || (index === 0 ? 'bg-blue-500' : 'bg-gray-300');
          const nextItem = ITINERARY_DATA[selectedDay].items[index + 1];
          const isConnectedGroup = item.timelineColor && nextItem && nextItem.timelineColor === item.timelineColor;
          const lineColor = isConnectedGroup ? item.timelineColor : 'bg-gray-200';

          return (
            <div key={index} className="flex gap-4 group">
              <div className="flex flex-col items-center"><div className={`w-3 h-3 rounded-full mt-4 ring-4 ring-gray-50 ${dotColor}`}></div>{index !== ITINERARY_DATA[selectedDay].items.length - 1 && <div className={`w-0.5 flex-1 my-1 ${lineColor}`}></div>}</div>
              <div className={`flex-1 bg-white rounded-xl shadow-sm border transition-all duration-200 overflow-hidden ${isExpanded ? 'border-blue-200 ring-2 ring-blue-50' : 'border-gray-100 hover:border-blue-100'}`}>
                <div onClick={() => hasDetails && toggleItineraryItem(selectedDay, index)} className={`p-4 cursor-pointer relative ${!hasDetails ? 'cursor-default' : ''}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2"><span className="font-bold text-blue-600 font-mono text-sm bg-blue-50 px-2 py-0.5 rounded">{item.time}</span>{item.tag && <span className="text-xs font-bold text-white bg-orange-400 px-2 py-0.5 rounded-full">{item.tag}</span>}</div>
                    <span className={`p-1.5 rounded-lg ${item.type === 'food' ? 'bg-orange-100 text-orange-500' : item.type === 'transport' ? 'bg-gray-100 text-gray-500' : item.type === 'hotel' ? 'bg-indigo-100 text-indigo-500' : item.type === 'shopping' ? 'bg-pink-100 text-pink-500' : 'bg-blue-100 text-blue-500'}`}>{item.icon}</span>
                  </div>
                  <div className="flex justify-between items-center"><h3 className="font-bold text-gray-800">{item.title}</h3>{hasDetails && <div className="text-gray-300">{isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</div>}</div>
                </div>
                {isExpanded && hasDetails && (
                  <div className="bg-gray-50 px-4 py-3 border-t border-gray-100 text-sm space-y-3 animate-in slide-in-from-top-2 duration-200">
                    {item.details?.hours && <div className="flex items-start"><Clock size={18} className="mr-3 text-blue-500 min-w-[18px] pt-0.5" /><div className="text-gray-700 font-medium"><div className="text-xs text-gray-400 mb-0.5">營業時間</div>{item.details.hours}</div></div>}
                    
                    {item.details?.website && <a href={item.details.website} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors bg-blue-100 px-3 py-1 rounded-full active:scale-[0.98] w-full justify-center"><ExternalLink size={12} className="mr-1" /> {item.details.websiteName || "官方網站"}</a>}
                    
                    {item.details?.menuLink && <a href={item.details.menuLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full py-2.5 bg-yellow-500 text-white rounded-lg font-bold text-xs hover:bg-yellow-600 transition-colors active:scale-[0.98] mt-2"><Utensils size={14} className="mr-1.5" /> 早餐菜單</a>}

                    {item.details?.scheduleLink && <a href={item.details.scheduleLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs font-medium text-purple-600 hover:text-purple-800 transition-colors bg-purple-100 px-3 py-1 rounded-full active:scale-[0.98] w-full justify-center mt-2"><Clock size={12} className="mr-1" /> 活動時間表</a>}
                    
                    {item.details?.couponLink && (
                        <a href={item.details.couponLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full py-2.5 bg-rose-500 text-white rounded-lg font-bold text-xs hover:bg-rose-600 transition-colors active:scale-[0.98] mt-2">
                        <Ticket size={14} className="mr-1.5" /> 🎫 外國旅客專屬優惠券
                        </a>
                    )}
                    
                    {item.details?.parking && (
                      <div className="flex items-start mt-2">
                        <div className="w-5 shrink-0 pt-0.5 text-gray-400">🅿️</div>
                        <div className="text-gray-700 font-medium flex-1">
                          <div className="text-xs text-gray-400 mb-0.5">停車場</div>
                          <div className="flex items-center justify-between">
                            <span>{item.details.parking}</span>
                            {item.details.parkingLink && (
                              <a 
                                href={item.details.parkingLink} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="flex items-center text-[10px] bg-blue-500 text-white px-2 py-1 rounded-md ml-2 active:scale-95 transition-transform"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Navigation size={10} className="mr-1" /> 導航
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                    {item.details?.mapcode && <div className="flex items-start"><div className="w-5 shrink-0 pt-0.5 text-gray-400">🔢</div><div className="text-gray-700 font-medium"><div className="text-xs text-gray-400 mb-0.5">Mapcode</div><span className="font-mono bg-white px-1.5 py-0.5 rounded border border-gray-200 select-all">{item.details.mapcode}</span></div></div>}
                    
                    {item.details?.note && <div className="flex items-start bg-blue-50 p-3 rounded-lg border border-blue-200 mt-2"><Info size={18} className="mr-3 text-blue-600 min-w-[18px] pt-0.5" /><div className="flex-1"><div className="text-xs text-blue-600 font-bold mb-0.5">註記</div><div className="text-blue-800 font-medium whitespace-pre-line">{item.details.note}</div></div></div>}
                    
                    {item.details?.otherLinks && (
                      <div className="flex gap-2 mt-2">
                        {item.details.otherLinks.map((link, i) => (
                          <a key={i} href={link.url} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center py-2 bg-gray-100 text-gray-600 rounded-lg text-xs font-bold hover:bg-gray-200 transition-colors active:scale-[0.98]">
                            <Navigation size={12} className="mr-1.5" /> {link.label}
                          </a>
                        ))}
                      </div>
                    )}

                    {item.details?.recommendation && <div className="flex items-start bg-yellow-50 p-3 rounded-lg border border-yellow-200 mt-2"><Smile size={18} className="mr-3 text-yellow-600 min-w-[18px] pt-0.5" /><div className="flex-1"><div className="text-xs text-yellow-600 font-bold mb-0.5">美食推薦</div><div className="text-yellow-800 font-medium">{item.details.recommendation}</div></div></div>}
                    {item.details?.hasWorshipGuide && <button onClick={(e) => { e.stopPropagation(); setShowWorshipModal(true); }} className="flex items-center justify-center w-full py-2.5 bg-purple-600 text-white rounded-lg font-bold text-xs hover:bg-purple-700 transition-colors active:scale-[0.98] mt-2"><BookOpen size={14} className="mr-1.5" /> ⛩️ 參拜方式教學</button>}
                    {item.details?.hasRecommendedShops && <button onClick={(e) => { e.stopPropagation(); setShowShopsModal(true); }} className="flex items-center justify-center w-full py-2.5 bg-orange-500 text-white rounded-lg font-bold text-xs hover:bg-orange-600 transition-colors active:scale-[0.98] mt-2"><Store size={14} className="mr-1.5" /> 🏘️ 推薦商店</button>}
                    
                    {item.details?.parkingKey && (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setParkingModalKey(item.details!.parkingKey!);
                          }}
                          className="flex items-center justify-center w-full py-2.5 bg-blue-500 text-white rounded-lg font-bold text-xs hover:bg-blue-600 transition-colors active:scale-[0.98] mt-2"
                        >
                          <Car size={14} className="mr-1.5" /> 🚗 {item.details.parkingLabel || "停車場資訊"}
                        </button>
                    )}
                    
                    {item.details?.link && <a href={item.details.link} target="_blank" rel="noreferrer" className="flex items-center justify-center w-full py-2.5 bg-blue-600 text-white rounded-lg font-bold text-xs hover:bg-blue-700 transition-colors active:scale-[0.98] mt-4"><Navigation size={14} className="mr-1.5" /> Google Map 導航前往</a>}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItineraryView;