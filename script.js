const supabaseClient = supabase.createClient(
    "https://gtgashnbbwfixcqikiiv.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0Z2FzaG5iYndmaXhjcWlraWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0Nzg5MDgsImV4cCI6MjA5NDA1NDkwOH0.qeDrOgaQm0y9VR3sLc4AxGzDzkAsrgSUlTbj7cn85LY"
);

async function addTask() {

    const input = document.getElementById("taskInput");

    await supabaseClient
        .from("tasks")
        .insert([
            {
                title: input.value,
                progress: 0
            }
        ]);

    loadTasks();
}

async function loadTasks() {

    const { data } = await supabaseClient
        .from("tasks")
        .select("*");

    console.log(data);
}