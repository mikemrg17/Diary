<template>
    <div class="container">
        <h3>Recordatorios</h3>
        <div class="reminders">
            <div  v-for="reminder in allReminders" :key="reminder.id" class="reminder">
                {{reminder.title}}
            </div>
        </div> 
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: "Reminders",
        methods: {
            ...mapActions(['fetchReminders'])
        },
        computed: mapGetters(["allReminders"]),
        created(){
            this.fetchReminders();
        }
    };
</script>

<style scoped>
    *{
        color: black;
    }

    .reminders {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }

    .reminder {
        border: transparent;
        color: white;
        background: #2E4053;
        background: linear-gradient(90deg, #2E4053 0%, rgba(165,165,171,1) 100%, rgba(0,212,255,1) 100%);
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }


</style>