<script setup lang="ts">
    import Footer from "../footer/Footer.vue";
    import "./SideBar.scss";
</script>

<template>
    <div class="sidebar">
        <div class="sidebar--user-container">
            <img
                class="sidebar--profile-photo"
                src="../../../public/user-profile-yannick.png"
                alt="Afbeelding gebruiker" />
            Yannick Schuurman<i class="fa-solid fa-caret-down"></i>
        </div>
        <ul>
            <li class="sidebar--menuItem active">
                <p>Home</p>
            </li>
            <li class="sidebar--menuItem">
                <p>Klanten</p>
            </li>
            <li class="sidebar--menuItem">
                <p>Taken</p>
            </li>
            <li class="sidebar--menuItem">
                <p>Instellingen</p>
            </li>
        </ul>
        <Footer />
    </div>
</template>
