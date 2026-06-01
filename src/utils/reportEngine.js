const SUPABASE_URL = 'https://cuyihfpfrsroiwrisrro.supabase.co';

const SUPABASE_KEY = 'sb_publishable_nH0AgSqN7MSZJ6Lhs7E7_w_CK5J0jTS';

async function getReports() {

  try {

    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/reports`,
      {
        method: 'GET',

        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();

    return data;

  } catch (error) {

    console.error(
      'Error obteniendo reportes:',
      error.message
    );

    throw error;
  }
}

module.exports = {
  getReports
};