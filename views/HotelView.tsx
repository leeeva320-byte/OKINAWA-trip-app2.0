import React from 'react';
import { Hotel, Calendar, Clock, MapPin, Copy, ExternalLink, BedDouble, Warehouse } from 'lucide-react';
import { HOTEL_DATA } from '../data/travelData';

const copyToClipboard = (text: string) => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).catch(() => {});
  }
};

const HotelView: React.FC = () => (
  <div className="px-5 py-6 pb-24 space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-300">
    <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center"><Hotel className="mr-2 text-blue-500" /> 住宿資訊</h2>
    {HOTEL_DATA.map(hotel => (
      <div key={hotel.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        <div className="h-48 relative">
          <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
            <span className="text-white text-xs font-bold bg-blue-600 px-2 py-1 rounded-md mb-2 inline-block">{hotel.area}</span>
            <h3 className="text-white font-bold text-xl leading-tight">{hotel.name}</h3>
          </div>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex items-center text-gray-700 text-sm bg-gray-50 p-3 rounded-lg"><Calendar size={18} className="mr-3 text-blue-500" /><div className="font-medium">{hotel.nights}</div></div>
          <div className="space-y-3">
            <div className="flex items-start text-sm"><Clock size={18} className="mr-3 text-blue-500 min-w-[18px]" /><div className="min-w-[3rem] text-gray-400">電話</div><div className="text-gray-800 font-medium font-mono">{hotel.phone}</div></div>
            <div className="flex items-start text-sm"><MapPin size={18} className="mr-3 text-blue-500 min-w-[18px] mt-0.5" /><div className="min-w-[3rem] text-gray-400 mt-0.5">地址</div><div className="flex-1"><div className="text-gray-800 leading-relaxed font-medium mb-1">{hotel.address_cn}</div><div className="text-gray-500 text-xs leading-relaxed italic mb-2 cursor-pointer hover:text-blue-600 transition-colors" onClick={() => copyToClipboard(hotel.address_local)}>{hotel.address_local} <span className="text-gray-300 ml-1 text-[10px]">(複製)</span></div><div className="flex space-x-3 mt-2"><button className="flex items-center text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-3 py-1 rounded-full active:scale-[0.98]" onClick={() => copyToClipboard(hotel.address_cn)}><Copy size={12} className="mr-1" /> 複製地址</button><a href={hotel.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs font-medium text-green-600 hover:text-green-800 transition-colors bg-green-50 px-3 py-1 rounded-full active:scale-[0.98]"><ExternalLink size={12} className="mr-1" /> Google Map</a></div></div></div>
          </div>
          <div className="border-t border-gray-100 my-2"></div>
          <div className="space-y-3">
            <div className="flex items-start text-sm"><BedDouble size={18} className="mr-3 text-blue-500 min-w-[18px]" /><div className="min-w-[3rem] text-gray-400">房型</div><div className="text-gray-800 font-medium flex-1">{hotel.roomType}</div></div>
            <div className="flex items-start text-sm -mt-2"><div className="min-w-[18px] mr-3"></div><div className="min-w-[3rem] text-gray-400"></div><div className="flex-1 text-gray-800 font-medium"><div className="space-y-1 bg-gray-50 p-2 rounded-lg">{hotel.bedConfig.split(', ').map((config, index) => (<div key={index} className="text-sm text-gray-700 leading-relaxed">{config}</div>))}</div></div></div>
            <div className="flex items-start text-sm"><Warehouse size={18} className="mr-3 text-blue-500 min-w-[18px]" /><div className="min-w-[3rem] text-gray-400">停車</div><div className="text-gray-800 font-medium flex-1">{hotel.parking}</div></div>
          </div>
          <div className="border-t border-gray-100 my-2"></div>
          <div className="grid grid-cols-2 gap-4"><div className="text-center bg-gray-50 p-3 rounded-xl"><span className="block text-[10px] text-gray-400 mb-1 uppercase tracking-wide">Check-In</span><span className="font-bold text-gray-800">{hotel.checkIn}</span></div><div className="text-center bg-gray-50 p-3 rounded-xl"><span className="block text-[10px] text-gray-400 mb-1 uppercase tracking-wide">Check-Out</span><span className="font-bold text-gray-800">{hotel.checkOut}</span></div></div>
          {hotel.note && (<div className="text-xs text-orange-600 bg-orange-50 px-3 py-3 rounded-lg border border-orange-100 leading-relaxed">💡 <strong>溫馨提醒：</strong>{hotel.note}</div>)}
        </div>
      </div>
    ))}
  </div>
);

export default HotelView;