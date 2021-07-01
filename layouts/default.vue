<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <nuxt-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/commandes"> Commandes </nuxt-link>
                    </li>
                </ul>
            </div>
        </nav>
        
        <div class="container">
          <nuxt />
        </div>

    </div>
</template>

<style>

</style>
