import { createClient } from "@supabase/supabase-js";

export const supabase= createClient (
    "https://juaaqytnvpqeyxlulpzb.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1YWFxeXRudnBxZXl4bHVscHpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0MDU1MjMsImV4cCI6MjAzNTk4MTUyM30.KCRoQ4U3dVtyiaBXeX3pjD5qdLhtVXEN7DJLqg8JcV4"
)