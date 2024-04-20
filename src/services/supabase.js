import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vqzzeqlvvzgqzkflzduw.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxenplcWx2dnpncXprZmx6ZHV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5ODQxMjUsImV4cCI6MjAyODU2MDEyNX0.4uAwhMI0EYcVz2Q3DHvgxd65E2XmDvh9B-BBlEFtYLE";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
