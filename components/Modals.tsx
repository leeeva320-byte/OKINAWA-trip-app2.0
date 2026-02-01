import React from 'react';
import { X, BookOpen, Store, Car, Navigation } from 'lucide-react';
import { PARKING_DATA } from '../data/travelData';

export const WorshipGuideModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden flex flex-col max-h-[85vh]">
      <div className="bg-red-500 px-5 py-4 flex justify-between items-center text-white shrink-0">
        <h3 className="text-lg font-bold flex items-center">
          <BookOpen size={20} className="mr-2" /> 參拜方式教學
        </h3>
        <button onClick={onClose} className="p-1 rounded-full hover:bg-white/20 transition-colors">
          <X size={24} />
        </button>
      </div>
      
      <div className="p-5 overflow-y-auto space-y-6">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">1</div>
          <div>
            <h4 className="font-bold text-gray-800 mb-1">鳥居 (Torii)</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              進出鳥居前，請先<span className="font-bold text-red-500">一鞠躬</span>。參道中央是神明的通道，請靠邊走。
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">2</div>
          <div>
            <h4 className="font-bold text-gray-800 mb-1">手水舍 (Temizuya)</h4>
            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
              <li>右手拿勺洗左手。</li>
              <li>左手拿勺洗右手。</li>
              <li>右手拿勺倒水在左手掌，漱口 (勿直接就口)。</li>
              <li>洗左手。</li>
              <li>直立勺子清洗勺柄。</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">3</div>
          <div>
            <h4 className="font-bold text-gray-800 mb-1">二禮二拍手一禮</h4>
            <div className="text-sm text-gray-600 space-y-2 bg-gray-50 p-3 rounded-lg border border-gray-100">
              <div>
                <span className="font-bold text-gray-800 block">🔔 搖鈴 & 賽錢</span>
                輕輕投入香油錢 (5円尤佳)，搖鈴喚醒神明。
              </div>
              <div className="border-t border-gray-200 pt-2">
                <span className="font-bold text-gray-800 block">🙇 二禮</span>
                深深鞠躬兩次。
              </div>
              <div className="border-t border-gray-200 pt-2">
                <span className="font-bold text-gray-800 block">👏 二拍手</span>
                雙手合十，右手稍微向下拉，拍手兩次。許願。
              </div>
              <div className="border-t border-gray-200 pt-2">
                <span className="font-bold text-gray-800 block">🙇 一禮</span>
                最後深深鞠躬一次。
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-100 bg-gray-50 shrink-0">
        <button 
          onClick={onClose}
          className="w-full py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition-colors active:scale-[0.98]"
        >
          我記住了！
        </button>
      </div>
    </div>
  </div>
);

export const RecommendedShopsModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden flex flex-col max-h-[85vh]">
      <div className="bg-orange-500 px-5 py-4 flex justify-between items-center text-white shrink-0">
        <h3 className="text-lg font-bold flex items-center"><Store size={20} className="mr-2" /> 港川外人住宅推薦</h3>
        <button onClick={onClose} className="p-1 rounded-full hover:bg-white/20 transition-colors"><X size={24} /></button>
      </div>
      <div className="p-5 overflow-y-auto space-y-4">
        <div className="bg-orange-50 p-4 rounded-xl border border-orange-100"><h4 className="font-bold text-orange-800 mb-1">1. oHacorte (オハコルテ)</h4><p className="text-sm text-gray-600 mb-2">沖繩必吃水果塔名店，裝潢超可愛，適合拍照。</p><span className="text-xs bg-white px-2 py-1 rounded border border-orange-200 text-orange-600">必吃：綜合水果塔</span></div>
        <div className="bg-orange-50 p-4 rounded-xl border border-orange-100"><h4 className="font-bold text-orange-800 mb-1">2. ippe coppe</h4><p className="text-sm text-gray-600 mb-2">天然酵母麵包專賣店，吐司與司康非常有名。</p><span className="text-xs bg-white px-2 py-1 rounded border border-orange-200 text-orange-600">必買：司康、吐司</span></div>
        <div className="bg-orange-50 p-4 rounded-xl border border-orange-100"><h4 className="font-bold text-orange-800 mb-1">3. OKINAWA CERRADO COFFEE</h4><p className="text-sm text-gray-600 mb-2">自家烘焙咖啡豆專賣店，喜歡手沖咖啡不能錯過。</p><span className="text-xs bg-white px-2 py-1 rounded border border-orange-200 text-orange-600">推薦：手沖咖啡</span></div>
      </div>
      <div className="p-4 border-t border-gray-100 bg-gray-50 shrink-0">
        <button onClick={onClose} className="w-full py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-colors active:scale-[0.98]">關閉</button>
      </div>
    </div>
  </div>
);

export const ParkingInfoModal: React.FC<{ onClose: () => void, locationKey: string }> = ({ onClose, locationKey }) => {
  const data = PARKING_DATA[locationKey] || [];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden flex flex-col max-h-[85vh]">
        <div className="bg-blue-600 px-5 py-4 flex justify-between items-center text-white shrink-0">
            <h3 className="text-lg font-bold flex items-center">
            <Car size={20} className="mr-2" /> 停車場資訊
            </h3>
            <button onClick={onClose} className="p-1 rounded-full hover:bg-white/20 transition-colors">
            <X size={24} />
            </button>
        </div>
        <div className="p-5 overflow-y-auto space-y-4">
            {data.map((lot, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-800 mb-1">{lot.name}</h4>
                    <div className="text-sm text-gray-600 mb-2">
                        {lot.info}
                    </div>
                    <a href={lot.link} target="_blank" rel="noreferrer" className="flex items-center text-xs font-bold text-blue-600 hover:text-blue-800">
                        <Navigation size={12} className="mr-1" /> Google Map 導航
                    </a>
                </div>
            ))}
        </div>
        <div className="p-4 border-t border-gray-100 bg-gray-50 shrink-0">
            <button onClick={onClose} className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors active:scale-[0.98]">關閉</button>
        </div>
        </div>
    </div>
  );
};