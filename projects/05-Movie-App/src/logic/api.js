export async function api () {
  try {
    const response = await fetch()
    const data = await response.json()

    return data
  } catch (err) {
    console.log(err)
    return err
  }
}
