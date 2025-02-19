import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xmsmnhzkgvsiluyehcpr.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhtc21uaHprZ3ZzaWx1eWVoY3ByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5NDg0OTQsImV4cCI6MjA1NTUyNDQ5NH0.KWMlhNJjiZMZo0uocmjcQP4msGHek4oc85D8xfyXQXo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
