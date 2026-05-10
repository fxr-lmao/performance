/**
 * FIT File Parser & TSB (Training Stress Balance) Calculator
 * 
 * In a production zero-server environment, this would utilize a JS FIT parser 
 * (like fit-file-parser) to read binary blobs synced from the Garmin API.
 */

export interface TrainingLoad {
  date: Date;
  tss: number; // Training Stress Score
}

export class FitParserService {
  /**
   * Parses a raw binary FIT file from Garmin and extracts the TSS 
   * (or calculates it based on heart rate, power, and duration).
   */
  static async parseFitFile(binaryData: ArrayBuffer): Promise<TrainingLoad> {
    // Stub: In reality, we'd decode the FIT file messages here.
    console.log('Parsing FIT binary data (Stub)...');
    
    return {
      date: new Date(),
      tss: Math.floor(Math.random() * 100) + 20, // Simulated TSS
    };
  }

  /**
   * Calculates TSB (Training Stress Balance)
   * TSB = CTL (Chronic Training Load) - ATL (Acute Training Load)
   * CTL is typically a 42-day exponentially weighted moving average (EWMA) of TSS.
   * ATL is typically a 7-day EWMA of TSS.
   */
  static calculateTSB(historicalLoad: TrainingLoad[]): number {
    if (!historicalLoad || historicalLoad.length === 0) return 0;

    // Simplified calculation for demonstration
    // A real implementation requires daily decay arrays.
    
    // Stub ATL (last 7 days average)
    const recent = historicalLoad.slice(-7);
    const atl = recent.reduce((sum, item) => sum + item.tss, 0) / (recent.length || 1);

    // Stub CTL (last 42 days average)
    const ctl = historicalLoad.reduce((sum, item) => sum + item.tss, 0) / (historicalLoad.length || 1);

    // TSB = CTL - ATL
    // Positive TSB means fresh, negative means fatigued.
    const tsb = ctl - atl;
    
    // Normalize TSB for the Readiness Engine (0-100 scale)
    // Assuming a typical TSB ranges from -30 (very fatigued) to +20 (very fresh)
    let tsbNorm = ((tsb + 30) / 50) * 100;
    tsbNorm = Math.max(0, Math.min(100, tsbNorm)); // Clamp between 0-100

    return Math.round(tsbNorm);
  }
}
