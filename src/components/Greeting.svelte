<script lang="ts">
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greeting = "";

    if (currentHour >= 6 && currentHour < 12) {
        greeting = "Buenos días"; // 6-11
    } else if (currentHour >= 12 && currentHour < 19) {
        greeting = "Buenas tardes"; // 12-18
    } else {
        greeting = "Buenas noches"; // 19-5
    }
</script>

<h1 class="text-4xl font-bold text-white ml-2">{greeting}</h1>
