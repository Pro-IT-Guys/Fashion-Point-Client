export const getStorage = key => {
  try {
    const serializedState = localStorage.getItem(key)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const setStorage = (key, value) => {
  if (typeof window !== 'undefined') {
    if (key && value) {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      console.log('key and value are required')
    }
  }
}
