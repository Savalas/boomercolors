export async function getAllCards() {
    const response = await fetch('/api/cards');
    return await response.json();
}