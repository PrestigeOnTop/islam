import {
  PrayerTimes,
  Coordinates,
  CalculationMethod,
  Madhab
} from "adhan";

// إحداثيات سلا – المغرب
const coordinates = new Coordinates(34.0531, -6.7985);

export function getTodayPrayerTimes(date = new Date()) {
  const params = CalculationMethod.Morocco();
  params.madhab = Madhab.Maliki;

  const prayerTimes = new PrayerTimes(coordinates, date, params);

  return {
    fajr: prayerTimes.fajr,
    dhuhr: prayerTimes.dhuhr,
    asr: prayerTimes.asr,
    maghrib: prayerTimes.maghrib,
    isha: prayerTimes.isha,
  };
}

export function formatTime(date) {
  return date.toLocaleTimeString("ar-MA", {
    hour: "2-digit",
    minute: "2-digit",
  });
}