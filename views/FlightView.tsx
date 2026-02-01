import React, { useState } from 'react';
import { Plane, ChevronDown, ChevronUp, Clock, ExternalLink, ShoppingBag } from 'lucide-react';
import { FLIGHT_DATA } from '../data/travelData';
import { FlightInfo } from '../types';

const FlightCard: React.FC<{ title: string; data: FlightInfo }> = ({ title, data }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div 
      className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden mb-6 font-sans cursor-pointer transition-all active:scale-[0.99]"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="bg-[#5596b6] px-5 py-3 flex justify-between items-center text-white">
        <div className="font-bold text-lg tracking-wide">長榮航空# {data.code}</div>
        <div className="flex items-center gap-2">
          <div className="text-lg tracking-wide">{data.dateShort}</div>
          {isExpanded ? <ChevronUp size={20} className="text-white/80" /> : <ChevronDown size={20} className="text-white/80" />}
        </div>
      </div>

      <div className="p-5 grid grid-cols-3 gap-2 relative">
        <div className="flex flex-col text-left z-10">
          <span className="text-4xl font-bold text-gray-700 leading-none mb-1">{data.depTime}</span>
          <span className="text-2xl font-black text-gray-800">{data.fromCode}</span>
          <span className="text-sm font-bold text-gray-600 mt-0.5 truncate">{data.fromAirport}</span>
          <div className="w-8 h-0.5 bg-gray-300 my-2"></div>
          <span className="text-xs text-gray-600">{data.fromCity}</span>
          <span className="text-sm font-bold text-gray-700 mt-0.5">{data.depTerminal}</span>
        </div>

        <div className="flex flex-col items-center justify-center z-10">
          <Plane className="text-gray-300 fill-current rotate-45 w-12 h-12" />
        </div>

        <div className="flex flex-col text-right z-10">
          <span className="text-4xl font-bold text-gray-700 leading-none mb-1">{data.arrTime}</span>
          <span className="text-2xl font-black text-gray-800">{data.toCode}</span>
          <span className="text-sm font-bold text-gray-600 mt-0.5 truncate">{data.toAirport}</span>
          <div className="w-8 h-0.5 bg-gray-300 my-2 ml-auto"></div>
          <span className="text-xs text-gray-600">{data.toCity}</span>
          <span className="text-sm font-bold text-gray-700 mt-0.5">{data.arrTerminal}</span>
        </div>
      </div>

      {isExpanded && (
        <div className="animate-in slide-in-from-top-1 duration-200">
          <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 text-gray-600 text-sm font-medium flex items-center">
            <Clock size={14} className="mr-2 text-gray-400" />
            飛行時長：{data.duration}
          </div>

          <div className="px-5 py-3 bg-white border-t border-gray-100 flex justify-between items-center">
            <div className="flex items-center text-xs text-orange-500 bg-orange-50 px-2 py-1 rounded">
              <span className="font-bold mr-1">建議報到:</span>
              {data.checkInTime}
            </div>
            <a 
              href={data.mapLink} 
              target="_blank" 
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()} 
              className="text-blue-600 text-xs font-bold flex items-center hover:underline bg-blue-50 px-2 py-1 rounded"
            >
              <ExternalLink size={12} className="mr-1.5" />
              {data.mapName}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

const FlightView: React.FC = () => (
  <div className="px-5 py-6 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-300">
    <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center"><Plane className="mr-2 text-blue-500" /> 航班資訊</h2>
    <FlightCard title="去程 OUTBOUND" data={FLIGHT_DATA.outbound} />
    <FlightCard title="回程 INBOUND" data={FLIGHT_DATA.inbound} />
    <div className="mt-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
      <h3 className="text-blue-800 font-bold mb-3 flex items-center text-base"><ShoppingBag size={18} className="mr-2 text-blue-500" /> 行李額度 (長榮航空)</h3>
      <div className="flex justify-around text-center border-t border-gray-100 pt-3">
        <div className="flex-1 border-r border-gray-100 pr-2"><div className="text-xs text-gray-400 mb-1">隨身行李 (手提)</div><div className="font-bold text-gray-800 text-lg">{FLIGHT_DATA.baggage.carryOn}</div></div>
        <div className="flex-1 pl-2"><div className="text-xs text-gray-400 mb-1">托運行李 (單件上限)</div><div className="font-bold text-gray-800 text-lg">{FLIGHT_DATA.baggage.checked}</div></div>
      </div>
    </div>
    <div className="mt-4 bg-blue-50 p-4 rounded-xl border border-blue-100">
      <h3 className="text-blue-800 font-bold mb-2 flex items-center text-sm"><Clock size={16} className="mr-2" /> 提醒</h3>
      <p className="text-blue-600 text-xs leading-relaxed">請於起飛前 2 小時抵達機場辦理登機手續。2月份沖繩平均氣溫約 15-20度，早晚偏涼建議帶薄外套。</p>
    </div>
  </div>
);

export default FlightView;