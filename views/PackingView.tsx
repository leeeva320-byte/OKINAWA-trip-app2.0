import React, { useState } from 'react';
import { CheckSquare, Users, Smile, ArrowLeft, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { PackingItem, PackingTeam } from '../types';

interface PackingViewProps {
  packingLists: Record<string, PackingItem[]>;
  togglePackItem: (listType: string, id: number) => void;
  setPackingTeam: (team: PackingTeam) => void;
  packingTeam: PackingTeam;
}

const PackingItemCard: React.FC<{ item: PackingItem, onToggle: (id: number) => void }> = ({ item, onToggle }) => {
  const Icon = item.icon || CheckSquare;
  const isWarningChecked = item.checked && item.warning;

  return (
    <div 
      onClick={() => onToggle(item.id)}
      className={`flex flex-col p-5 rounded-xl border-2 shadow-sm cursor-pointer transition-all duration-200 ${
        item.checked 
          ? (isWarningChecked ? 'bg-red-50 border-red-300 text-red-800' : 'bg-green-50 border-green-200 text-gray-400')
          : 'bg-white border-gray-100 hover:border-blue-300 hover:shadow-md'
      }`}
    >
      <div className="flex items-center">
        <div className={`w-8 h-8 rounded-full border-2 mr-4 flex items-center justify-center shrink-0 transition-colors ${
          item.checked 
            ? (isWarningChecked ? 'bg-red-500 border-red-500' : 'bg-green-500 border-green-500') 
            : 'border-gray-300 bg-white'
        }`}>
          {item.checked && <Check size={18} className="text-white" />}
        </div>
        <div className="flex items-center min-w-0 flex-1">
          <Icon size={24} className={`mr-4 shrink-0 ${item.checked ? (isWarningChecked ? 'text-red-500 opacity-100' : 'opacity-50 text-gray-500') : 'text-blue-500 opacity-90'}`} />
          <span className={`text-lg font-bold truncate ${item.checked ? (isWarningChecked ? 'text-red-800' : 'line-through text-gray-500') : 'text-gray-800'}`}>{item.name}</span>
        </div>
      </div>
      
      {item.checked && item.warning && (
        <div className="mt-2 ml-12 text-red-600 text-sm font-bold flex items-center animate-pulse">
          ⚠️ {item.warning}
        </div>
      )}
    </div>
  );
};

const CollapsibleCategory: React.FC<{ category: string, items: PackingItem[], onToggleItem: (id: number) => void }> = ({ category, items, onToggleItem }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const completedCount = items.filter(i => i.checked).length;
  const totalCount = items.length;
  const isAllCompleted = totalCount > 0 && completedCount === totalCount;

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-4">
      <div 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="flex items-center justify-between px-5 py-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors select-none"
      >
        <div className="flex items-center space-x-3">
          <h3 className="text-base font-bold text-gray-800 uppercase tracking-wider">{category}</h3>
          {isAllCompleted ? (
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold flex items-center">
              <Check size={12} className="mr-1" /> 完成
            </span>
          ) : (
            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full font-mono">
              {completedCount}/{totalCount}
            </span>
          )}
        </div>
        <div className="text-gray-400">
          {isCollapsed ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </div>
      </div>

      {!isCollapsed && (
        <div className="p-3 space-y-3 animate-in slide-in-from-top-2 duration-200">
          {items.map(item => (
            <PackingItemCard key={item.id} item={item} onToggle={onToggleItem} />
          ))}
        </div>
      )}
    </div>
  );
};

const PackingView: React.FC<PackingViewProps> = ({ packingLists, togglePackItem, setPackingTeam, packingTeam }) => {
  if (!packingTeam) {
    return (
      <div className="px-5 py-6 pb-24 min-h-screen bg-gray-50 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
          <CheckSquare className="mr-2 text-blue-500" /> 行李打包小分隊
        </h2>
        <div className="grid gap-6 flex-1">
          <button 
            onClick={() => setPackingTeam('parents')}
            className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center space-y-4 hover:border-blue-200 hover:shadow-md transition-all active:scale-[0.98]"
          >
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
              <Users size={40} />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-800">爸爸＆媽媽 小分隊</h3>
              <p className="text-xs text-gray-400 mt-1">文件、證件、重要物品</p>
            </div>
          </button>

          <button 
            onClick={() => setPackingTeam('kids')}
            className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center space-y-4 hover:border-pink-200 hover:shadow-md transition-all active:scale-[0.98]"
          >
            <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center text-pink-500">
              <Smile size={40} />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-800">姊姊＆妹妹 小分隊</h3>
              <p className="text-xs text-gray-400 mt-1">衣物、個人用品</p>
            </div>
          </button>
        </div>
      </div>
    );
  }

  const currentList = packingLists[packingTeam];
  const teamCategories = [...new Set(currentList.map(item => item.category))];
  const title = packingTeam === 'parents' ? '爸爸＆媽媽' : '姊姊＆妹妹';
  const progress = Math.round((currentList.filter(i => i.checked).length / currentList.length) * 100);

  return (
    <div className="flex flex-col h-[calc(100vh-110px)] overflow-hidden bg-gray-50 animate-in slide-in-from-right duration-200">
      <div className="bg-white/80 backdrop-blur-md px-5 pt-6 pb-4 border-b border-gray-100 shrink-0 z-20">
        <div className="flex items-center mb-4">
          <button 
            onClick={() => setPackingTeam(null)}
            className="mr-3 p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={24} className="text-gray-600" />
          </button>
          <div>
            <h2 className="text-lg font-bold text-gray-800">{title} 清單</h2>
            <span className={`text-xs font-bold ${packingTeam === 'parents' ? 'text-blue-500' : 'text-pink-500'}`}>
              {progress}% 完成
            </span>
          </div>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-500 ease-out ${packingTeam === 'parents' ? 'bg-blue-500' : 'bg-pink-500'}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-5 py-4 space-y-4 pb-40"> 
        {teamCategories.map(cat => (
           <div key={cat} className="space-y-1">
             <CollapsibleCategory 
               category={cat} 
               items={currentList.filter(item => item.category === cat)} 
               onToggleItem={(id) => togglePackItem(packingTeam, id)} 
             />
           </div>
        ))}
      </div>
    </div>
  );
};

export default PackingView;