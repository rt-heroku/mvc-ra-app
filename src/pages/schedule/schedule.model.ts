export class EventModel {
  subject: string;
  location: string;
  short_description: string;
  description: string;
  date: EventDate;
  cost: string;
  age: string;
}

export class ScheduleModel {
  mine: Array<EventModel> = [];
  today: Array<EventModel> = [];
  upcoming: Array<EventModel> = [];
}

export class EventDate {
  day: string;
  month: string;
  month_name: string;
  time: string;
  full: string;
  ampm: string;
}

