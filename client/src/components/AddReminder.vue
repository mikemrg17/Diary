<template>
    <div class="container align-middle" id="mainContainer">
        <div class="vCenter">
            <h3>Nuevo recordatorio</h3>
            <div class="container-fluid h-100">
                <div class="row justify-content-center align-items-center h-100">
                    <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                        <form @submit="onSubmit">
                            <div class="row d-flex justify-content-center">
                                <h4>Título:</h4>
                                <div class="form-group">
                                    <input v-model="title" id="userField" class="form-control form-control-lg" placeholder="Titulo..." type="text">
                                </div>
                            </div>
                            <div class="row d-flex justify-content-center">
                                <h4>Fecha</h4>
                                <div class="form-group">
                                    <input v-model="date" id="passwordField" class="form-control form-control-lg" type="date">
                                </div>
                            </div>
                            <div class="row d-flex justify-content-center">
                                <div class="form-check">
                                    <label class="form-check-label" for="exampleCheck1">Prioridad</label>
                                    <input v-model="priority" type="checkbox" class="form-check-input" id="exampleCheck1">
                                </div>
                            </div>
                            <div class="row d-flex justify-content-center">
                                <h4>Descripción:</h4>
                                <div class="form-group">
                                    <input v-model="description" id="passwordField" class="form-control form-control-lg" placeholder="Detalles..." type="text">
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="submit" id="logInButton" class="btn btn-dark col-sm-5 border-secondary" value="Agregar">
                            </div>
                            <div class="form-group">
                                <router-link to="/main">
                                    <button id="logInButton" class="btn btn-dark col-sm-5 border-secondary">Guardar</button>
                                </router-link>   
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>   
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    
    export default {
        name: "AddReminder",
        data(){
            return {
                title: '',
                date: '',
                priority: false,
                description: ''
            }
        },
        methods: {
            ...mapActions(['addReminder']),
            onSubmit(e){
                e.preventDefault();
                this.addReminder(this.title, this.date, this.priority, this.description);
            }
        },
        computed: mapGetters(['lastReminderId']),
        
    }
</script>

<style scoped>
    #mainContainer{
        transform: translate(0%, 40%);
    }

    .vCenter{
        align-items: center;
    }

    #passwordField{
        margin-top: 10px;
    }

    #form{
        align-content: center;
    }

    #logInButton{
        margin: 10px;
    }
    i {
        margin: 10px;
    }

</style>