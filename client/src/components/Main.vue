<template>
    <div>
        <header class="navbar-text" id="header">
            <div class="row">
                <h3 id="reminders">Recordatorios</h3>
                <router-link to="/addReminder">
                    <button class="col-1" id="addReminderButton"><i class="fas fa-plus"></i></button>
                </router-link>
            </div>
        </header>
        <div>
            <Reminders />
        </div>
    </div>
</template>

<script>
    import Reminders from './Reminders';

    export default {
        name: "Main",
        components: {
            Reminders
        }   
    }
</script>

<style scoped>
    #header {
        background: #2E4053;
        color: white;
        padding: 1%;
        width: auto;
    }

    #reminders{
        text-align: left;
    }

    #addReminderButton{
        width: 36px;
        margin-left: 1370px;
        background: transparent;
        border: transparent;
        border-radius: 70px;
        color: white;
        text-align: left;
    }
</style>