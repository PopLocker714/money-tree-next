import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.PROJECT_SUPABASE_URL || "", process.env.PROJECT_SUPABASE_KEY || "");

console.log(supabase.auth);


export default supabase;
