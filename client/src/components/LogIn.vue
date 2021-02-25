<template>
    <div class="container align-middle" id="mainContainer">
        <div class="vCenter">
            <h3>Iniciar sesión</h3>
            <div class="container-fluid h-100">
                <div class="row justify-content-center align-items-center h-100">
                    <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                        <form>
                            <div class="row d-flex justify-content-center">
                                <i class="fas fa-user"></i>
                                <div class="form-group">
                                    <input id="userField" class="form-control form-control-lg" placeholder="Usuario..." type="text">
                                </div>
                            </div>
                            <div class="row d-flex justify-content-center">
                                <i class="fas fa-lock"></i>
                                <div class="form-group">
                                    <input id="passwordField" class="form-control form-control-lg" placeholder="Contraseña..." type="text">
                                </div>
                            </div>
                            <div class="form-group">
                                <router-link to="/main">
                                    <button id="logInButton" class="btn btn-dark col-sm-5 border-secondary">Iniciar sesión</button>
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
    //import Main from './Main';
    export default {
        name: "LogIn"
    }
</script>

<style scoped>
    #mainContainer{
        transform: translate(0%, 100%);
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