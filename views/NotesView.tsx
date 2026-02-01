import React from 'react';
import { FileText, ExternalLink, Smile, Ticket, Trash2, Plus } from 'lucide-react';
import { Note } from '../types';

interface NotesViewProps {
  notes: Note[];
  deleteNote: (id: number) => void;
  newNote: string;
  setNewNote: (note: string) => void;
  addNote: () => void;
}

const NotesView: React.FC<NotesViewProps> = ({ notes, deleteNote, newNote, setNewNote, addNote }) => (
  <div className="px-5 py-6 pb-24 min-h-screen bg-gray-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
    <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center"><FileText className="mr-2 text-blue-500" /> 旅途小記</h2>
    
    <div className="bg-indigo-50 p-4 rounded-xl shadow-sm border border-indigo-100 mb-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-indigo-200 text-indigo-700 text-[10px] font-bold px-2 py-1 rounded-bl-lg">置頂</div>
        <h3 className="font-bold text-indigo-900 text-sm mb-1">Visit Japan Web</h3>
        <p className="text-indigo-700 text-xs mb-3">入境手續預先登錄</p>
        <a href="https://www.vjw.digital.go.jp/main/#/vjwplo001" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full py-2 bg-white text-indigo-600 rounded-lg font-bold text-xs shadow-sm active:scale-[0.98]"><ExternalLink size={14} className="mr-1.5" /> 前往網站</a>
    </div>

    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-4 relative group">
        <div className="flex items-center mb-3">
             <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 mr-3"><Smile size={18} /></div>
             <div><h3 className="text-gray-800 font-bold text-base">2月的沖繩攻略</h3><div className="text-[10px] text-gray-400">2026/02/01</div></div>
        </div>
        <div className="space-y-3 mb-4">
             <div className="flex items-start"><div className="min-w-[4px] h-4 bg-blue-400 rounded-full mt-1 mr-2"></div><p className="text-gray-600 text-sm leading-relaxed"><span className="font-bold text-gray-700">氣候：</span>東北季風強，建議帶<span className="text-blue-500 font-bold">防風外套</span>。</p></div>
             <div className="flex items-start"><div className="min-w-[4px] h-4 bg-pink-400 rounded-full mt-1 mr-2"></div><p className="text-gray-600 text-sm leading-relaxed"><span className="font-bold text-gray-700">活動：</span>正值櫻花季 🌸，建議查詢八重岳花況。</p></div>
        </div>
        <a href="https://visitokinawajapan.com/zh-hant/plan-your-trip/when-to-visit-climate-seasons/okinawa-february/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full py-2.5 bg-blue-50 text-blue-600 rounded-xl font-bold text-xs hover:bg-blue-100 transition-colors active:scale-[0.98]"><ExternalLink size={14} className="mr-1.5" /> 閱讀完整攻略</a>
    </div>

    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative group mb-4">
        <div className="flex items-center mb-3">
             <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 mr-3">
                <Ticket size={18} />
             </div>
             <div>
                <h3 className="text-gray-800 font-bold text-base">OKINAWA Fun PASS</h3>
                <div className="text-[10px] text-gray-400">推薦票券</div>
             </div>
        </div>
        
        <div className="space-y-3 mb-4">
             <div className="flex items-start">
                <div className="min-w-[4px] h-4 bg-orange-400 rounded-full mt-1 mr-2"></div>
                <p className="text-gray-600 text-sm leading-relaxed">
                   <span className="font-bold text-gray-700">組合：</span>超值3合1
                </p>
             </div>
        </div>

        <a 
          href="https://okinawa.funpass.app/#productList"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full py-2.5 bg-orange-50 text-orange-600 rounded-xl font-bold text-xs hover:bg-orange-100 transition-colors active:scale-[0.98]"
        >
          <ExternalLink size={14} className="mr-1.5" /> 前往購買
        </a>
    </div>

    <div className="space-y-4 mb-6">
      {notes.map(note => (
        <div key={note.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative group">
          <p className="text-gray-800 text-sm leading-relaxed mb-2">{note.text}</p>
          <div className="text-[10px] text-gray-400 text-right">{note.date}</div>
          <button onClick={() => deleteNote(note.id)} className="absolute top-2 right-2 text-gray-300 hover:text-red-400 p-2 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={16} /></button>
        </div>
      ))}
    </div>
    <div className="bg-white rounded-xl p-2 shadow-sm border border-gray-200 flex items-center sticky bottom-20">
      <input type="text" placeholder="新增筆記..." value={newNote} onChange={(e) => setNewNote(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && addNote()} className="flex-1 bg-transparent border-none outline-none px-3 text-sm h-10" />
      <button onClick={addNote} className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center active:scale-95 transition-transform"><Plus size={20} /></button>
    </div>
  </div>
);

export default NotesView;