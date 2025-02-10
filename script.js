const translations = {
  ta: {
    title: "தமிழ் காலண்டர்",
    upcomingDatesTitle: "வரவிருக்கும் முக்கிய தேதிகள்",
    footerText: "© 2025 தமிழ் காலண்டர். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    holidays: [
      { name: "பொங்கல் – அறுவடை திருவிழா", date: getPongalDate(new Date().getFullYear()) },
      { name: "புத்தாண்டு – தமிழ் புத்தாண்டு", date: getPuthanduDate(new Date().getFullYear()) },
      { name: "நட்டயாஞ்சலி – நடராஜருக்காக அர்ப்பணிக்கப்பட்டது", date: getNatyanjaliDate(new Date().getFullYear()) },
      { name: "தைப்பூசம் – திருவள்ளுவர் பிறந்தநாள்", date: getThaipusamDate(new Date().getFullYear()) },
      { name: "திருவையாறு திருவிழா – தியாகராஜருக்கு அஞ்சலி", date: getThiruvaiyaruDate(new Date().getFullYear()) },
      { name: "கார்த்திகை தீபம் – விளக்குகளின் திருவிழா", date: getKarthigaiDeepamDate(new Date().getFullYear()) },
      { name: "மகாமகம் திருவிழா – தனித்துவமான பன்னிரண்டு ஆண்டுகள்", date: getMahamahamDate(new Date().getFullYear()) },
      { name: "தீபாவளி", date: getDiwaliDate(new Date().getFullYear()) },
      { name: "புத்தாண்டு", date: getPuthanduDate(new Date().getFullYear()) }
    ]
  },
  en: {
    title: "Tamil Calendar",
    upcomingDatesTitle: "Upcoming Important Dates",
    footerText: "© 2025 Tamil Calendar. All rights reserved.",
    holidays: [
      { name: "Pongal – The Harvest Festival", date: getPongalDate(new Date().getFullYear()) },
      { name: "Puthandu – Tamil New Year's Day", date: getPuthanduDate(new Date().getFullYear()) },
      { name: "Natyanjali Dance Festival – Dedicated to Nataraja", date: getNatyanjaliDate(new Date().getFullYear()) },
      { name: "Thaipusam – The Birthday of Lord Subramaniam", date: getThaipusamDate(new Date().getFullYear()) },
      { name: "Thiruvaiyaru Festival – A Tribute to Thyagaraja", date: getThiruvaiyaruDate(new Date().getFullYear()) },
      { name: "Karthigai Deepam – The Festival of Lights", date: getKarthigaiDeepamDate(new Date().getFullYear()) },
      { name: "Mahamaham Festival – A Unique Duodecennial Festival", date: getMahamahamDate(new Date().getFullYear()) },
      { name: "Diwali", date: getDiwaliDate(new Date().getFullYear()) },
      { name: "Tamil New Year", date: getPuthanduDate(new Date().getFullYear()) }
    ]
  }
};

function changeLanguage() {
  const language = document.getElementById('language').value;
  const calendarIframe = document.getElementById('calendar-iframe');
  const translation = translations[language];

  document.getElementById('title').innerText = translation.title;
  document.getElementById('upcoming-dates-title').innerText = translation.upcomingDatesTitle;
  document.getElementById('footer-text').innerText = translation.footerText;
  calendarIframe.src = language === 'ta' ? "https://www.tamildailycalendar.com/tamil_daily_calendar.php" : "https://www.tamildailycalendar.com/english_daily_calendar.php";

  displayUpcomingHolidays(language);
}

function getPongalDate(year) {
  return new Date(year, 0, 14); // January 14
}

function getPuthanduDate(year) {
  return new Date(year, 3, 14); // April 14
}

function getNatyanjaliDate(year) {
  return new Date(year, 1, 25); // February 25
}

function getThaipusamDate(year) {
  return new Date(year, 0, 28); // January 28
}

function getThiruvaiyaruDate(year) {
  return new Date(year, 0, 6); // January 6
}

function getKarthigaiDeepamDate(year) {
  return new Date(year, 10, 24); // November 24
}

function getMahamahamDate(year) {
  if (year === 2028) {
    return new Date(2028, 1, 17); // February 17, 2028
  } else {
    return null;
  }
}

function getDiwaliDate(year) {
  return new Date(year, 9, 29); // October 29
}

function getUpcomingHolidays(holidays) {
  const now = new Date();
  return holidays.filter(holiday => holiday.date > now).sort((a, b) => a.date - b.date).slice(0, 3);
}

function createCountdownButton(holiday) {
  const button = document.createElement("button");
  const now = new Date();
  const timeDiff = holiday.date - now;
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  button.innerHTML = `<b>${holiday.name}</b> - ${daysLeft} days left`;
  return button;
}

function displayUpcomingHolidays(language) {
  const translation = translations[language];
  const upcomingHolidays = getUpcomingHolidays(translation.holidays);
  const countdownButtonsContainer = document.querySelector(".countdown-buttons");
  countdownButtonsContainer.innerHTML = '';
  upcomingHolidays.forEach(holiday => {
    const button = createCountdownButton(holiday);
    countdownButtonsContainer.appendChild(button);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayUpcomingHolidays('ta');
});
