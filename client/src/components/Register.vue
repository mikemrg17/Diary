<template>
    <div class="container align-middle" id="mainContainer">
        <div class="vCenter">
            <h3>Registrarse</h3>
            <div class="container-fluid h-100">
                <div class="row justify-content-center align-items-center h-100">
                    <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                        <form>
                            <div class="form-group">
                                <span class="input-group-addon"><i class="fas fa-user"></i></span>
                                <input id="userField" class="form-control form-control-lg" placeholder="Usuario..." type="text">
                            </div>
                            <div class="form-group">
                                <input id="passwordField" class="form-control form-control-lg" placeholder="Contraseña..." type="text">
                            </div>
                            <div class="form-group">
                                <router-link to="/main">
                                    <button id="registerButton" class="btn btn-dark col-sm-5 border-secondary" type="Input">Registrarse</button>
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
export default {
    name: "Register"
}
</script>
<style scoped>
    #mainContainer{
        transform: translate(0%, 100%);
    }

    .vCenter{
        align-items: center;
    }

    #userField{
        margin-top: 20px;
    }

    #passwordField{
        margin-top: 10px;
    }

    #form{
        align-content: center;
    }

    #registerButton{
        margin: 10px;
    }
</style>