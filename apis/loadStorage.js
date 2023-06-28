export const getStorage = key => {
  return localStorage.getItem(key)
}

export const setStorage = (key, value) => {
  if (key && value) {
    localStorage.setItem(key, value)
  } else {
    console.log('key and value are required')
  }
}