import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.PROJECT_SUPABASE_URL || "", process.env.PROJECT_SUPABASE_KEY || "");


export default supabase;
