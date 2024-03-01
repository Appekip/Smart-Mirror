export const weekDays: string[] = [
    'Maanantai', 
    'Tiistai', 
    'Keskiviikko', 
    'Torstai', 
    'Perjantai', 
    'Lauantai',
    'Sunnuntai'
  ];
  
  export const months: string[] = [
    'Tammikuu', 
    'Helmikuu', 
    'Maaliskuu', 
    'Huhtikuu', 
    'Toukokuu', 
    'Kesäkuu', 
    'Heinäkuu', 
    'Elokuu', 
    'Syyskuu', 
    'Lokakuu', 
    'Marraskuu', 
    'Joulukuu'
  ];
  
  export function getCurrentDateTimeInfo(): { day: string, month: string, date: number, hours: string, minutes: string, seconds: number } {
    const dateTime: Date = new Date();
    const day: string = weekDays[dateTime.getDay()];
    const month: string = months[dateTime.getMonth()];
    const date: number = dateTime.getDate();
    const hours: string = dateTime.getHours().toString().padStart(2, '0');
    const minutes: string = dateTime.getMinutes().toString().padStart(2, '0');
    const seconds: number = dateTime.getSeconds();
    
    return { day, month, date, hours, minutes, seconds };
  }
  