let defaultCity = '锡林郭勒盟'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  alert(e)
}

export default {
  city: defaultCity
}
