const SUPABASE_URL = 'https://cvpnauqokinnpwanskbe.supabase.co';

const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2cG5hdXFva2lubnB3YW5za2JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwNDMsImV4cCI6MTk4MzY4NDA0M30.A8Io_J4_NWTx-iVGngaqEBOxKmW8AGDymaSwiRF2Q0Q';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchFirstData() {
    const response = await client.from('firstdata').select('*').limit(10);
    return response.data;
}
export async function fetchSecondData() {
    const response = await client.from('seconddata').select('*').limit(10);
    // console.log(response);
    return response.data;
}
export async function fetchThirdData() {
    const response = await client.from('thirddata').select('*').limit(10);
    return response.data;
}
export async function fetchForthData() {
    const response = await client.from('forthdata').select('*').limit(10);
    return response.data;
}
