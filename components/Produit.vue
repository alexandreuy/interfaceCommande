<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ nom }} </h5>
            <p class="card-text">Prix : {{ prix }} € </p>
            <p v-if="role === 'alaune'" class="card-text">Note : {{ note }}/5 </p>
            <button v-if="role === 'commander' " @click="$emit('commande', {nom, prix})" class="btn btn-success"> Commander </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Produit",
    props: ["nom", "prix", "role", "note", "quantite"]
}
</script>
