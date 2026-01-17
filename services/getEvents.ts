export async function getEvents() {
  try {
    const url = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${url}/api/events`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching events:', error);

    return [];
  }
}
