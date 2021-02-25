<template>
    <div class="container align-middle" id="mainContainer">
        <div class="vCenter">
            <h3>Bienvenido a tu agenda</h3>
            <div class="row d-flex justify-content-center">
              <router-link to="/register">
                    <button 
                        class="btn btn-light col-sm-2 border-secondary" 
                        id="registerButton"
                        @click="register">
                        Registrarse
                    </button>
              </router-link>
              <router-link to="/logIn">
                    <button @click="login" class="btn btn-dark col-sm-2" id="logInButton">Iniciar Sesión</button>
              </router-link>    
            </div>
        </div>
    </div>   
</template>

<script>
    export default {
        name: "Home",
        methods: {
            register(){
                console.log("Register button pressed");
            },
            login(){
                console.log("Log In button pressed");
            }
        }
    }
</script>

<style scoped>
  #registerButton, #logInButton{
    margin: 5px;
  }

  .vCenter{
    align-items: center;
  }

  #mainContainer{
    transform: translate(0%, 200%);
  }
</style>
