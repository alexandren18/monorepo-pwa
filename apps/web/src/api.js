// apps/web/src/api.js
export async function getHello() {
  const url = `${import.meta.env.VITE_API_URL}/api/hello`;

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error("Erro na API:", error);
    return { ok: false, msg: "Erro ao conectar na API" };
  }
}
