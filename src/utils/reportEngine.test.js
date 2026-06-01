const { getReports } = require('./reportEngine');

jest.setTimeout(10000);

describe('Pruebas E2E CityFix', () => {

  test('Debe obtener reportes reales desde Supabase', async () => {

    const reports = await getReports();

    console.log('Datos recibidos:', reports);

    expect(Array.isArray(reports)).toBe(true);

    expect(reports.length).toBeGreaterThan(0);

    expect(reports[0]).toHaveProperty('id');
    expect(reports[0]).toHaveProperty('title');
    expect(reports[0]).toHaveProperty('category');
    expect(reports[0]).toHaveProperty('votes');

  });

});