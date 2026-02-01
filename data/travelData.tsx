import React from 'react';
import { 
  Plane, Calendar, Hotel, CheckSquare, FileText, MapPin, Clock, Sun, Coffee, Camera, 
  ShoppingBag, Utensils, Car, BedDouble, Warehouse, Users, Smile, Home, Navigation,
  Wallet, Shirt, Footprints, Pill, Briefcase, Umbrella, Palette, Bath, BookOpen, 
  Ticket, Smartphone, Moon, Fish, Bus, QrCode, Book, Battery, Store
} from 'lucide-react';
import { FlightInfo, HotelInfo, ItineraryDay, PackingItem } from '../types';

export const PARKING_DATA: Record<string, Array<{name: string, info: string, link: string}>> = {
  kokusai: [
    { name: "1. Oshiro Parking Lot", info: "Mapcode: 33 157 254*72", link: "https://maps.app.goo.gl/q5kYRoGtv7JNkFgq6" },
    { name: "2. テクニカルパーク牧志第3", info: "Mapcode: 33 157 404*26", link: "https://maps.app.goo.gl/VbqMMXBbJxCApuXc6" },
    { name: "3. 県民広場地下駐車場", info: "Mapcode: 33 126 892*54", link: "https://maps.app.goo.gl/XxrE4ryUHiVgdPym8" }
  ],
  makishi: [
    { name: "1. 新天地コイン駐車場第1", info: "200円/hr，最高600円", link: "https://maps.app.goo.gl/vYiovHwTB6TjGuaM6" },
    { name: "2. Times-Car park", info: "1,200円", link: "https://maps.app.goo.gl/spjqzPvRMsv5ZnRv5" }
  ]
};

export const FLIGHT_DATA: { outbound: FlightInfo, inbound: FlightInfo, baggage: FlightInfo } = {
  outbound: {
    type: "去程",
    date: "2026年2月5日 (週四)",
    dateShort: "02/05（四）", 
    airline: "長榮航空",
    code: "BR 112",
    fromCode: "TPE",
    fromCity: "Taipei",
    fromAirport: "桃園機場", 
    depTime: "06:55", 
    depTerminal: "第二航廈", 
    toCode: "OKA",
    toCity: "Okinawa",
    toAirport: "那霸空港", 
    arrTime: "09:15", 
    arrTerminal: "国際線", 
    duration: "1小時 20分鐘",
    checkInTime: "04:55",
    mapLink: "https://www.taoyuan-airport.com/flight_depart",
    mapName: "桃園機場出發資訊"
  },
  inbound: {
    type: "回程",
    date: "2026年2月9日 (週一)",
    dateShort: "02/09（一）", 
    airline: "長榮航空",
    code: "BR 113",
    fromCode: "OKA",
    fromCity: "Okinawa",
    fromAirport: "那霸空港", 
    depTime: "10:15", 
    depTerminal: "国際線", 
    toCode: "TPE",
    toCity: "Taipei",
    toAirport: "桃園機場", 
    arrTime: "10:45", 
    arrTerminal: "第二航廈", 
    duration: "1小時 30分鐘",
    checkInTime: "08:15",
    mapLink: "https://www.naha-airport.co.jp/flight/today/",
    mapName: "那霸空港出發資訊" 
  },
  baggage: { 
    carryOn: "1件 (7公斤)",
    checked: "1件 (23公斤)"
  }
};

export const HOTEL_DATA: HotelInfo[] = [
  {
    id: 1,
    name: "Hotel Haabesu Okinawa", 
    nights: "2/5 - 2/9 (4晚)", 
    area: "浦添市 (Urasoe)", 
    address_cn: "宮城 1-23-1, 浦添市, 沖繩縣, 日本 901-2126",
    address_local: "Miyagi 1-23-1, Urasoe, Okinawa, Japan", 
    phone: "+81 98-917-5852", 
    checkIn: "15:00 以後", 
    checkOut: "11:00 以前", 
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    roomType: "雙臥室公寓",
    bedConfig: "★Room 1：1張雙人床, ★Room 2：2張單人床", 
    parking: "附設：免費停車場",
    note: "請留意是公寓式飯店，入住時請確認鑰匙領取方式。",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Haabesu+Okinawa+Miyagi+1-23-1" 
  }
];

export const ITINERARY_DATA: Record<string, ItineraryDay> = {
  day1: {
    date: "2/5 (四)",
    highlight: "Let’s go to OKINAWA 沖繩",
    overview: [
      { title: "那霸空港", icon: Plane },
      { title: "DMM Kariyushi水族館", icon: Fish },
      { title: "iias沖繩豐崎", icon: ShoppingBag },
      { title: "瀨長島", icon: Sun }
    ],
    items: [
      { 
        time: "03:30", 
        title: "機場接送", 
        type: "transport", 
        icon: <Car size={16} />,
        details: {
          note: "【KLOOK】 Li Jia-Rong"
        }
      },
      { 
        time: "05:00", 
        title: "抵達 桃園機場 第二航廈", 
        type: "transport", 
        icon: <MapPin size={16} />,
        details: {
          note: "請確認航廈為 T2，準備辦理登機。"
        }
      },
      { time: "06:55", title: "桃園機場 出發", type: "transport", icon: <Plane size={16} /> }, 
      { time: "09:15", title: "那霸空港 抵達", type: "transport", icon: <Plane size={16} /> }, 
      { 
        time: "09:45", 
        title: "國內線 4號出口-10 A月台 OTS接駁車", 
        type: "transport", 
        icon: <Bus size={16} />,
        details: {
          note: "出國際線航廈後右轉，前往國內線航廈外的巴士月台。"
        }
      },
      { 
        time: "10:30", title: "OTS 租車取車", type: "transport", icon: <Car size={16} />,
        details: {
          parking: "OTS 臨空豐崎營業所",
          mapcode: "232 543 502*82",
          link: "https://maps.app.goo.gl/mpPUcNRJ4CkFAFnx7"
        }
      }, 
      { 
        time: "11:30", 
        tag: "午餐", 
        title: "iias沖繩豐崎-1F美食街", 
        type: "food", 
        icon: <Utensils size={16} />,
        timelineColor: "bg-pink-500", 
        details: {
          parking: "iias 沖繩豐崎停車場 (免費)",
          mapcode: "232 543 368*63",
          link: "https://maps.app.goo.gl/BmMK3oJweJ6jmTw58",
          hours: "11:00 - 22:00 (請依商場資訊為主)",
          website: "https://toyosaki.iias.jp/floor-guide",
          recommendation: "★鳥とたまごの専門店　鳥玉【玉子燒、蛋包飯、丼飯】"
        }
      }, 
      { 
        time: "12:00", 
        title: "DMM Kariyushi水族館", 
        type: "activity", 
        icon: <Camera size={16} />,
        timelineColor: "bg-pink-500", 
        details: {
          parking: "iias 沖繩豐崎停車場 (免費)",
          mapcode: "232 543 400*25",
          link: "https://goo.gl/maps/exampleDMM",
          hours: "10:00 - 21:00 (請依官網資訊為主)",
          website: "https://tc.kariyushi-aquarium.com/floor/",
          websiteName: "官方網站（場館地圖）",
          scheduleLink: "https://tc.kariyushi-aquarium.com/time-schedule/",
          note: "餵食體驗整理券領取：內部活動售票處（2F）"
        }
      }, 
      { 
        time: "14:00", 
        title: "iias沖繩豐崎 (購物中心)", 
        type: "shopping", 
        icon: <ShoppingBag size={16} />,
        timelineColor: "bg-pink-500", 
        details: {
          hours: "10:00 - 21:00 (請依官網資訊為主)",
          website: "https://toyosaki.iias.jp/floor-guide",
        }
      }, 
      { 
        time: "16:00", title: "海ぶどう農園海ん道", type: "activity", icon: <Utensils size={16} />,
        details: {
          parking: "園區專用停車場",
          mapcode: "232 487 084*22",
          link: "https://maps.app.goo.gl/M8uZq5xU8sZAwaRF9"
        }
      },
      { 
        time: "17:30", title: "瀨長島", type: "activity", icon: <Sun size={16} />,
        details: {
          parking: "瀨長島一般停車場 (假日易滿)",
          mapcode: "33 002 602*22",
          link: "https://maps.app.goo.gl/WsM6fZWp6omrLm6u6"
        }
      },
      { 
        time: "19:00", 
        tag: "晚餐",
        title: "第一牧志公設市場", 
        type: "food", 
        icon: <Utensils size={16} />,
        timelineColor: "bg-pink-500",
        details: {
          hours: "08:00 - 22:00",
          link: "https://www.google.com/maps/search/?api=1&query=Makishi+Public+Market",
          parkingKey: "makishi", 
          parkingLabel: "附近其他停車場"
        }
      },
      { 
        time: "21:00", title: "前往 Hotel Haabesu Okinawa", type: "hotel", icon: <Hotel size={16} />,
        details: {
          parking: "飯店專屬免費停車場",
          mapcode: "33 341 123*55",
          link: "https://maps.app.goo.gl/FSCYxa2NFwPghtnd7"
        }
      } 
    ]
  },
  day2: {
    date: "2/6 (五)",
    highlight: "釣魚體驗",
    overview: [
      { title: "釣魚", icon: Fish },
      { title: "波上宮", icon: Camera },
      { title: "港川外人住宅", icon: Home },
      { title: "AEON 永夢樂", icon: ShoppingBag }
    ],
    items: [
      { 
        time: "08:00", 
        tag: "早餐",
        title: "McDonald's【牧港店】", 
        type: "food", 
        icon: <Coffee size={16} />,
        details: {
          parking: "附設免費停車場",
          mapcode: "33 341 535*66", 
          link: "https://www.google.com/maps/search/?api=1&query=McDonald's+Makiminato+Okinawa", 
          note: "推薦：鬆餅堡 (McGriddles)、薯餅",
          menuLink: "https://www.mcdonalds.co.jp/en/menu/morning/" 
        }
      },
      { 
        time: "09:00", 
        title: "宜野灣碼頭-【釣魚體驗】", 
        type: "activity", 
        icon: <Sun size={16} />,
        details: {
          parking: "宜野灣港多目的廣場停車場 (收費)",
          mapcode: "33 402 149*78", 
          link: "https://maps.app.goo.gl/yS3uXVjSoxqiw3aY8", 
          note: "集合時間：09:40（開始時間：09:45）\n預約者：Li Jia-Rong\n準備物品：帽子、飲料",
          otherLinks: [
            { label: "Tropical Beach Parking Lot", url: "https://maps.app.goo.gl/6G2dd7nHcKmHzaVu6" },
            { label: "獅子丸集合點", url: "https://maps.app.goo.gl/9ShV4TcTacvy247E8" }
          ]
        }
      },
      { 
        time: "12:30", 
        title: "波上宮", 
        type: "activity", 
        icon: <Camera size={16} />,
        details: {
          parking: "波上宮停車場 (20台)",
          mapcode: "33 185 023*00",
          link: "https://maps.app.goo.gl/JdkC9WXkynEVBK5Z6", 
          hours: "全天開放 (社務所 09:00-17:00)",
          hasWorshipGuide: true 
        }
      },
      { 
        time: "14:00", title: "港川外人住宅", type: "food", icon: <Coffee size={16} />,
        details: {
          parking: "各店家專用或 coin parking",
          mapcode: "33 341 002*28",
          link: "https://maps.app.goo.gl/5577r7KrcxHt84c59", 
          website: "http://okisho.com/foreigner-house/",
          hasRecommendedShops: true 
        }
      },
      { 
        time: "16:00", title: "AEON MALL Okinawa Rycom", type: "shopping", icon: <ShoppingBag size={16} />,
        details: {
          parking: "商場免費停車場 (4000台)",
          mapcode: "33 530 406*45",
          link: "https://maps.app.goo.gl/XoRuJzYMrDvSAzBJ9", 
          hours: "10:00 - 22:00 (部分店家不同)",
          website: "https://tw.aeonmall.global/catalog/floormap/okinawarycom/tw/index.html#page=1",
          couponLink: "https://tw.aeonmall.global/coupons/discount?mall=mall52&couponid=22",
          note: "外國旅客專屬優惠券：憑護照到 1F 的旅遊諮詢處 (Tourist Information) 領取。"
        }
      },
      { 
        time: "19:00", title: "那霸市第一牧志公設市場", type: "food", icon: <Utensils size={16} />,
        details: {
          parking: "周邊付費停車場 (建議停國際通附近)",
          mapcode: "33 157 324*55",
          link: "https://goo.gl/maps/exampleMakishi"
        }
      },
      { 
        time: "20:30", 
        title: "MaxValu 【牧志店】", 
        type: "shopping", 
        icon: <ShoppingBag size={16} />,
        details: {
          hours: "24小時營業",
          mapcode: "33 158 693*76",
          link: "https://maps.app.goo.gl/MfVTvFe1xDZYwgpe7"
        }
      },
      { 
        time: "21:30", title: "Hotel Haabesu Okinawa", type: "hotel", icon: <Hotel size={16} />,
        details: {
          parking: "飯店專屬免費停車場",
          mapcode: "33 341 123*55",
          link: "https://maps.app.goo.gl/FSCYxa2NFwPghtnd7" 
        }
      }
    ]
  },
  day3: {
    date: "2/7 (六)",
    highlight: "北部海景觀光", 
    overview: [
      { title: "古宇利大橋", icon: Camera },
      { title: "今歸仁城跡", icon: MapPin },
      { title: "美國村", icon: Sun }
    ],
    items: [
      { 
        time: "08:30", 
        tag: "早餐",
        title: "A&W 【牧港店】", 
        type: "food", 
        icon: <Coffee size={16} />,
        details: {
          parking: "附設免費停車場",
          mapcode: "33 342 552*66",
          link: "https://maps.app.goo.gl/fKzF4uyAWeaEjRFw7",
          hours: "24小時營業",
          recommendation: "★Root Beer (無限續杯)、Mozza Burger、Curly Fries"
        }
      },
      { 
        time: "10:30", title: "古宇利大橋", type: "activity", icon: <Camera size={16} />,
        details: { parking: "南端免費停車場", mapcode: "485 601 893*52", link: "https://maps.app.goo.gl/RDGVt6MQctHcctCA9" }
      },
      { 
        time: "12:00", 
        tag: "午餐",
        title: "Kurumaebi Kitchen TAMAYA", 
        type: "food", 
        icon: <Utensils size={16} />,
        details: {
          hours: "11:30 - 19:00 (L.O. 17:30)",
          mapcode: "485 600 203*07",
          parking: "附設免費停車場",
          link: "https://maps.app.goo.gl/VdES3CEiJtnSAtqr9",
          recommendation: "★TAMAYA套餐 (刺身、天婦羅、鹽烤)、炸蝦蓋飯"
        }
      },
      { 
        time: "13:30", title: "今歸仁城跡", type: "activity", icon: <MapPin size={16} />,
        details: {
          parking: "P1-P4 免費停車場",
          mapcode: "553 081 414*41",
          hours: "08:00 - 18:00 (最後入場 17:30)",
          link: "https://maps.app.goo.gl/DdjqvwzFe4rrWELZ7"
        }
      },
      { 
        time: "15:30", title: "萬座毛 (象鼻岩)", type: "activity", icon: <Camera size={16} />,
        details: {
          parking: "新設施專用停車場 (免費)",
          mapcode: "206 312 039*17",
          hours: "08:00 - 19:00",
          link: "https://maps.app.goo.gl/zmgTq3rpSJQD1ddm8"
        }
      },
      { 
        time: "17:00", title: "美國村", type: "activity", icon: <Sun size={16} />,
        details: { parking: "Depo Island D Parking (免費)", mapcode: "33 525 598*63", link: "https://maps.app.goo.gl/9VpyEaUwDKYjgSWM9" }
      },
      { 
        time: "19:00", 
        tag: "晚餐",
        title: "琉球之牛【北谷店】", 
        type: "food", 
        icon: <Utensils size={16} />,
        details: {
          parking: "美國村公共停車場",
          mapcode: "33 525 890*14",
          hours: "17:00 - 22:30",
          link: "https://maps.app.goo.gl/YZDn6mtbdn7ma2oh7",
          recommendation: "★頂級縣產和牛套餐、牛舌"
        }
      },
      { 
        time: "20:30", title: "Hotel Haabesu Okinawa", type: "hotel", icon: <Hotel size={16} />,
        details: { parking: "飯店專屬免費停車場", mapcode: "33 341 123*55", link: "https://goo.gl/maps/exampleHotel" }
      }
    ]
  },
  day4: {
    date: "2/8 (日)",
    highlight: "南部市區觀光",
    overview: [
      { title: "玉泉洞", icon: MapPin },
      { title: "Parco City", icon: ShoppingBag },
      { title: "國際通", icon: ShoppingBag }
    ],
    items: [
      {
        time: "08:00", 
        tag: "早餐",
        title: "ChouChou 豬肉蛋飯糰 【本店】", 
        type: "food", 
        icon: <Utensils size={16} />,
        details: {
          parking: "Oshiro Parking Lot",
          parkingLink: "https://maps.app.goo.gl/aPNUDnr1jg5ce3LeA", 
          mapcode: "33 157 254*72",
          hours: "07:00 - 19:00",
          link: "https://maps.app.goo.gl/DW38oLrjr6tbHZws7",
          website: "https://chouchou-porktamago.com/menu01/",
          recommendation: "★炸蝦塔塔醬飯糰、博多明太子飯糰"
        }
      },
      { 
        time: "09:30", title: "玉泉洞 & 王國村", type: "activity", icon: <MapPin size={16} />,
        details: { parking: "園區免費大停車場", mapcode: "232 495 330*28", link: "https://maps.app.goo.gl/cDqhQkTJmvCw9C3ZA" }
      },
      { 
        time: "15:30", 
        title: "SAN-A浦添西海岸 PARCO CITY", 
        type: "shopping", 
        icon: <ShoppingBag size={16} />,
        details: { 
            hours: "10:00 - 22:00",
            mapcode: "33 308 838*85",
            parking: "免費停車場 (約4000台)",
            link: "https://maps.app.goo.gl/hMrg2YqjHxJKMLQa8",
            website: "https://www.parcocity.jp.t.ahn.hp.transer.com/floorguide/map/",
            note: "店鋪內無法退稅的發票，總金額滿￥5,000日圓可以到“1F免稅櫃台退稅”"
        }
      },
      { 
        time: "18:00", title: "國際通", type: "shopping", icon: <ShoppingBag size={16} />,
        details: {
          hasParkingInfo: true,
          parkingKey: "kokusai",
          parkingLabel: "附近其他停車場", 
          hours: "10:00 - 22:00 (依店家不同)",
          link: "https://www.google.com/maps/search/?api=1&query=Kokusai+Dori+Okinawa"
        }
      },
      { 
        time: "19:30", 
        tag: "晚餐",
        title: "沖縄料理居酒屋 ぶった 【国際通店】", 
        type: "food", 
        icon: <Utensils size={16} />,
        details: {
          hours: "17:00 - 00:00",
          link: "https://www.google.com/maps/search/?api=1&query=Okinawa+Izakaya+Butta+Kokusai",
          recommendation: "★阿古豬涮涮鍋、海葡萄、炒苦瓜"
        }
      },
      { 
        time: "21:00", 
        title: "唐吉訶德 【那霸壺川店】", type: "shopping", icon: <ShoppingBag size={16} />,
        details: {
          parking: "附設停車場 (消費可折抵)",
          mapcode: "33 126 359*33",
          hours: "09:00 - 03:00",
          link: "https://maps.app.goo.gl/WDebALKEvYqJXX527", 
          note: "退稅櫃台在2F" 
        }
      },
      { 
        time: "22:30", title: "Hotel Haabesu Okinawa", type: "hotel", icon: <Hotel size={16} />,
        details: { parking: "飯店專屬免費停車場", mapcode: "33 341 123*55", link: "https://maps.app.goo.gl/FSCYxa2NFwPghtnd7" }
      }
    ]
  },
  day5: {
    date: "2/9 (一)",
    highlight: "Home Sweet Home",
    overview: [
      { title: "桃園機場", icon: Plane }
    ],
    items: [
      { time: "08:00", title: "飯店退房", type: "hotel", icon: <Hotel size={16} /> }, 
      { 
        time: "08:00", 
        title: "OTS 租車還車", 
        type: "transport", 
        icon: <Car size={16} />,
        details: { 
            mapcode: "232 543 533*52", 
            link: "https://maps.app.goo.gl/se4nTr5CdN8eA9Ec7", 
            parking: "OTS 臨空豐崎營業所 (還車處)" 
        } 
      }, 
      { time: "10:15", title: "搭機返台 (長榮BR113)", type: "transport", icon: <Plane size={16} /> } 
    ]
  }
};

export const INITIAL_PARENTS_LIST: PackingItem[] = [
  { id: 1, name: '護照', category: '隨身物品', icon: Book }, 
  { id: 3, name: '日幣現金', category: '隨身物品', icon: Wallet },
  { id: 4, name: 'Visit Japan Web QR Code', category: '隨身物品', icon: QrCode },
  { id: 6, name: '行動電源', category: '隨身物品', icon: Battery, warning: '不可以放托運行李裡！！' }, 
  { id: 2, name: '台幣現金', category: '生活', icon: Wallet }, 
  { id: 13, name: '太陽眼鏡', category: '生活', icon: Sun }, 
  { id: 14, name: '口罩', category: '生活', icon: Smile }, 
  { id: 15, name: '衛生紙', category: '生活', icon: Briefcase }, 
  { id: 16, name: '摺疊傘', category: '生活', icon: Umbrella }, 
  { id: 5, name: '手機 & 充電器', category: '雜物', icon: Camera },
  { id: 7, name: 'eSIM / 網卡', category: '雜物', icon: Smartphone },
  { id: 17, name: '個人藥物', category: '雜物', icon: Pill, warning: '處方藥物要留處方籤，放在隨身行李！！' }, 
  { id: 18, name: '盥洗用品', category: '雜物', icon: Bath }, 
  { id: 19, name: '塑膠袋', category: '雜物', icon: ShoppingBag }, 
  { id: 20, name: '假牙護理組', category: '雜物', icon: Smile }, 
  { id: 10, name: '舒適步行鞋', category: '衣物', icon: Footprints },
  { id: 60, name: '睡衣', category: '衣物', icon: Moon },
  { id: 61, name: '襪子', category: '衣物', icon: Footprints },
  { id: 62, name: '內衣褲', category: '衣物', icon: Shirt },
  { id: 63, name: '4套衣服', category: '衣物', icon: Shirt },
  { id: 64, name: '保暖外套', category: '衣物', icon: Shirt },
];

export const INITIAL_KIDS_LIST: PackingItem[] = [
  { id: 21, name: '護照', category: '隨身物品', icon: Book }, 
  { id: 22, name: '台幣 & 日幣零用錢', category: '隨身物品', icon: Wallet },
  { id: 35, name: 'Visit Japan Web QR Code', category: '隨身物品', icon: QrCode }, 
  { id: 24, name: '行動電源', category: '隨身物品', icon: Battery, warning: '不可以放托運行李裡！！' }, 
  { id: 41, name: '駕照日文譯本', category: '文件', icon: BookOpen },
  { id: 42, name: '汽車駕照', category: '文件', icon: Book },
  { id: 43, name: '護照影本', category: '文件', icon: FileText },
  { id: 44, name: '優惠券', category: '文件', icon: Ticket },
  { id: 27, name: '化妝品', category: '生活', icon: Palette },
  { id: 29, name: '面膜/保養品', category: '生活', icon: Bath },
  { id: 220, name: '台幣現金', category: '生活', icon: Wallet }, 
  { id: 350, name: '太陽眼鏡', category: '生活', icon: Sun },
  { id: 36, name: '口罩', category: '生活', icon: Smile }, 
  { id: 37, name: '衛生紙', category: '生活', icon: Briefcase }, 
  { id: 38, name: '摺疊傘', category: '生活', icon: Umbrella }, 
  { id: 23, name: '手機 & 充電器', category: '雜物', icon: Camera }, 
  { id: 51, name: '網卡', category: '雜物', icon: Smartphone }, 
  { id: 25, name: '耳機', category: '雜物', icon: Camera }, 
  { id: 26, name: '自拍桿', category: '雜物', icon: Camera }, 
  { id: 60, name: '個人藥物', category: '雜物', icon: Pill }, 
  { id: 61, name: '盥洗用品', category: '雜物', icon: Bath }, 
  { id: 62, name: '塑膠袋', category: '雜物', icon: ShoppingBag }, 
  { id: 27, name: '化妝包', category: '雜物', icon: Palette }, 
  { id: 29, name: '保養品/面膜', category: '雜物', icon: Bath }, 
  { id: 30, name: '時尚服飾', category: '衣物', icon: Shirt }, 
  { id: 31, name: '薄外套', category: '衣物', icon: Shirt },
  { id: 63, name: '睡衣', category: '衣物', icon: Moon },
  { id: 64, name: '襪子', category: '衣物', icon: Footprints },
  { id: 65, name: '內衣褲', category: '衣物', icon: Shirt },
  { id: 66, name: '4套衣服', category: '衣物', icon: Shirt },
  { id: 67, name: '保暖外套', category: '衣物', icon: Shirt },
  { id: 51, name: 'Joytel-SIM卡', category: '行前準備', icon: Smartphone },
  { id: 52, name: 'OTS租車', category: '行前準備', icon: Car },
  { id: 53, name: '機場接送預約', category: '行前準備', icon: Car },
  { id: 54, name: 'Visit Japan Web QR Code申請', category: '行前準備', icon: QrCode },
];