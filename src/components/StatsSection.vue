<script setup>
import { motion } from 'motion-v';
import { projects } from '@/data/projects';
import { scrollReveal, staggeredReveal } from '@/lib/motion';

const stats = [
    { value: projects.length, label: 'Proyek terpilih' },
    {
        value: projects.filter((project) => project.category === 'Proyek Pribadi').length,
        label: 'Proyek pribadi',
    },
    {
        value: projects.filter((project) => project.category === 'SaaS Startup').length,
        label: 'Startup SaaS',
    },
    {
        value: projects.filter((project) => project.link).length,
        label: 'Demo online',
        inverse: true,
    },
];
</script>

<template>
    <motion.section
        v-bind="scrollReveal"
        class="grid border-b-2 border-border sm:grid-cols-2 lg:grid-cols-4"
        aria-label="Pencapaian"
    >
        <motion.article
            v-for="(stat, index) in stats"
            :key="stat.label"
            v-bind="staggeredReveal(index)"
            class="min-h-25 border-b-2 border-border p-5 last:border-b-0 sm:border-r-2 sm:last:border-r-0 lg:border-b-0"
            :class="stat.inverse ? 'bg-foreground text-background' : 'bg-background'"
        >
            <p
                class="font-display text-5xl leading-none md:text-6xl"
                :class="stat.inverse ? 'text-accent' : 'text-foreground'"
            >
                {{ stat.value }}
            </p>
            <p
                class="label-caps mt-2"
                :class="stat.inverse ? 'text-muted' : 'text-muted-foreground'"
            >
                {{ stat.label }}
            </p>
        </motion.article>
    </motion.section>
</template>
