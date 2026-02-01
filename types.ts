import { ReactNode } from 'react';

export interface ParkingLocation {
  name: string;
  info: string;
  link: string;
}

export interface FlightInfo {
  type?: string;
  date?: string;
  dateShort?: string;
  airline?: string;
  code?: string;
  fromCode?: string;
  fromCity?: string;
  fromAirport?: string;
  depTime?: string;
  depTerminal?: string;
  toCode?: string;
  toCity?: string;
  toAirport?: string;
  arrTime?: string;
  arrTerminal?: string;
  duration?: string;
  checkInTime?: string;
  mapLink?: string;
  mapName?: string;
  carryOn?: string;
  checked?: string;
}

export interface HotelInfo {
  id: number;
  name: string;
  nights: string;
  area: string;
  address_cn: string;
  address_local: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  image: string;
  roomType: string;
  bedConfig: string;
  parking: string;
  note: string;
  mapLink: string;
}

export interface ItineraryDetails {
  parking?: string;
  mapcode?: string;
  link?: string;
  parkingLink?: string;
  parkingKey?: string;
  parkingLabel?: string;
  hours?: string;
  website?: string;
  websiteName?: string;
  scheduleLink?: string;
  note?: string;
  menuLink?: string;
  couponLink?: string;
  recommendation?: string;
  hasWorshipGuide?: boolean;
  hasRecommendedShops?: boolean;
  hasParkingInfo?: boolean;
  otherLinks?: Array<{ label: string; url: string }>;
}

export interface ItineraryItem {
  time: string;
  title: string;
  type: 'transport' | 'food' | 'activity' | 'shopping' | 'hotel';
  icon: ReactNode;
  tag?: string;
  timelineColor?: string;
  details?: ItineraryDetails;
}

export interface ItineraryDay {
  date: string;
  highlight: string;
  overview?: Array<{ title: string; icon: any }>;
  items: ItineraryItem[];
}

export interface PackingItem {
  id: number;
  name: string;
  category: string;
  icon: any;
  warning?: string;
  checked?: boolean;
}

export interface Note {
  id: number;
  text: string;
  date: string;
}

export type PackingTeam = 'parents' | 'kids' | null;