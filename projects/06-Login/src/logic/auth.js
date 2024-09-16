const API_URL = 'http://localhost:3000/user'

export async function registerUser (userData) {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })

    if (!response.ok) {
      throw new Error('Error en el registro')
    }

    const data = await response.json()
    console.log(data)
  } catch (error) {
    throw new Error(error.message)
  }
}

export async function loginUser (userData) {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })

    if (!response.ok) {
      throw new Error('Error en el registro')
    }

    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error.message)
  }
}
