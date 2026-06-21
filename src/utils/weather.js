export function getWeatherIcon(code) {
  if (code === 0 || code === 1) return '☀️'
  if (code === 2) return '⛅'
  if (code === 3) return '☁️'
  if (code >= 45 && code <= 48) return '🌫️'
  if (code >= 51 && code <= 55) return '🌧️'
  if (code >= 61 && code <= 65) return '🌧️'
  if (code >= 71 && code <= 75) return '❄️'
  if (code >= 80 && code <= 82) return '🌦️'
  if (code >= 95 && code <= 99) return '⛈️'
  return '🌤️'
}
