// Cliente Centralizado de Conexión a Supabase - CATI USGP
const SUPABASE_URL = "https://ldnqspgbnvqvprvdxaub.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_h4gikz8ypO56Zc3r5umgvw_e8evug4g";

// Inicialización del cliente global disponible en la ventana del navegador
const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

<<<<<<< HEAD
window.supabaseClient = _supabase;
=======
window.supabaseClient = _supabase;
>>>>>>> bd73542f783d5cdbcd5a37b11c3bb5e479c47063
