/**
 * Academic Calendar Integration (ICS / Local Calendar Stub)
 */

export interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  isMajorExam: boolean;
}

export class CalendarService {
  /**
   * Fetches upcoming calendar events.
   * In a zero-server app, this would use expo-calendar to read local device calendars
   * or a local ICS parser to read an imported school schedule.
   */
  static async getUpcomingEvents(): Promise<CalendarEvent[]> {
    // Stub: Simulate fetching events. 
    // We'll mock a major exam happening in 48 hours to trigger the 72h rule.
    const now = new Date();
    const examDate = new Date(now.getTime() + 48 * 60 * 60 * 1000); // 48 hours from now

    return [
      {
        id: 'exam-1',
        title: 'CÉGEP - Physics Midterm',
        date: examDate,
        isMajorExam: true,
      },
      {
        id: 'assignment-1',
        title: 'Cadet Theory - Navigation Module',
        date: new Date(now.getTime() + 120 * 60 * 60 * 1000), // 5 days from now
        isMajorExam: false,
      }
    ];
  }
}
