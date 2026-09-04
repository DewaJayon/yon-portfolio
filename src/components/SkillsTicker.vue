<script setup>
import { Asterisk } from '@lucide/vue';

const skills = [
    'PHP',
    'Tailwind',
    'Laravel',
    'JavaScript',
    'Node.js',
    'Vue.js',
    'MySQL',
    'Git',
    'REST API',
    'Docker',
    'Linux',
    'Inertia.js',
];
</script>

<template>
    <section class="ticker" aria-label="Keahlian teknis">
        <div class="ticker-track gap-6 py-2 text-xs">
            <template v-for="copy in 2" :key="copy">
                <template v-for="skill in skills" :key="`${copy}-${skill}`">
                    <span>{{ skill }}</span>
                    <Asterisk class="size-3" aria-hidden="true" />
                </template>
            </template>
        </div>
    </section>
</template>
