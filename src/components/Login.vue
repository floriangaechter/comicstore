<template>
  <div class="login">
    <section class="hero is-fullheight is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-4 is-offset-4">
              <h1 class="title">
                Login
              </h1>
              <div class="box">
                <label class="label">Email</label>
                <p class="control">
                  <input class="input" type="text" placeholder="jsmith@example.org">
                </p>
                <label class="label">Password</label>
                <p class="control">
                  <input class="input" type="password" placeholder="●●●●●●●">
                </p>
                <hr>
                <p class="control">
                  <button class="button is-primary">Login</button>
                </p>
              </div>
              <p class="has-text-centered">
                <router-link to="register">Register an Account</router-link>
                |
                <router-link to="password">Forgot password</router-link>
                |
                <router-link to="help">Need help?</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hero.is-dark.is-bold {
    background-color: #F62459;
    background-image: linear-gradient(rgba(25, 181, 254, 0.6),rgba(246, 36, 89, 0.6)),linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(../assets/comicbooks.jpg);
    background-size: cover;
  }
</style>
