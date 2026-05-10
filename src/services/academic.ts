import { CalendarService } from './calendar';

export class AcademicService {
  /**
   * Checks if there is a major exam within the next 72 hours.
   * If true, this triggers the "72h Exam Rule" to protect cognitive resources.
   */
  static async isExamWithin72h(): Promise<{ isActive: boolean; examTitle?: string }> {
    const events = await CalendarService.getUpcomingEvents();
    
    if (!events || events.length === 0) {
      return { isActive: false };
    }

    const now = new Date().getTime();
    const limit72h = now + (72 * 60 * 60 * 1000);

    const upcomingExam = events.find(
      (event) => event.isMajorExam && event.date.getTime() <= limit72h && event.date.getTime() >= now
    );

    if (upcomingExam) {
      return { isActive: true, examTitle: upcomingExam.title };
    }

    return { isActive: false };
  }
}
