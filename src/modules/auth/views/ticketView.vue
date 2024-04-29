<template>
    <div class="container">
        <template v-for="(value, key) in ticket.datos.ticket" :key="key">
            <template v-if="typeof value === 'object'">
                <template v-for=" (nestedValue, nestedKey) in value" :key="nestedKey">
                    <p>
                        <span style="font-weight: bold;"> {{ nestedKey }}: </span> {{ nestedValue }}
                    </p>
                </template>
            </template>
            <template v-else-if="key == 'asientos'">
                <p>
                    <span style="font-weight: bold;"> Asientos: </span> {{ nestedValue }}
                </p>
            </template>
            <template v-else>
                <p>
                    <span style="font-weight: bold;">{{ key }}:</span> {{ value }}
                </p>
            </template>

        </template>
    </div>
</template>


<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState('authStore', {
            ticket: 'ticket'
        })
    },
}
</script>

<style scoped>

</style>