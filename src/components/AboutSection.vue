<script setup>
import { Layers, Server } from '@lucide/vue';
import { motion } from 'motion-v';
import { Separator } from '@/components/ui/separator';
import { scrollReveal } from '@/lib/motion';

const values = [
    {
        title: 'Backend andal',
        description:
            'Merancang API, basis data, dan logika bisnis yang aman serta mudah dikembangkan.',
        icon: Server,
    },
    {
        title: 'Solusi end-to-end',
        description: 'Menghubungkan frontend dan backend menjadi pengalaman aplikasi yang utuh.',
        icon: Layers,
    },
];
</script>

<template>
    <motion.section
        v-bind="scrollReveal"
        id="about"
        class="scroll-mt-6 border-t-2 border-border p-10 md:p-16"
        aria-labelledby="about-title"
    >
        <h2 id="about-title" class="section-title">Tentang saya</h2>
        <div class="mt-10 grid gap-12 md:grid-cols-2 md:gap-16">
            <article>
                <h3 class="font-display text-3xl uppercase leading-none text-foreground">
                    Filosofi saya
                </h3>
                <p
                    class="mt-5 max-w-xl text-sm leading-6 text-muted-foreground md:text-base md:leading-7"
                >
                    Saya adalah full-stack web developer yang membangun aplikasi dari antarmuka
                    hingga layanan backend. Dengan Laravel dan Node.js sebagai fokus utama, saya
                    merancang API, mengelola basis data, dan memastikan setiap fitur bekerja secara
                    andal.
                </p>
            </article>
            <article>
                <h3 class="font-display text-3xl uppercase leading-none text-foreground">
                    Nilai inti
                </h3>
                <ul class="mt-5 flex flex-col gap-4">
                    <li v-for="value in values" :key="value.title">
                        <div class="flex gap-3">
                            <component
                                :is="value.icon"
                                class="size-5 shrink-0 text-accent"
                                aria-hidden="true"
                            />
                            <div>
                                <h4 class="label-caps text-foreground">
                                    {{ value.title }}
                                </h4>
                                <p class="mt-1 text-sm leading-6 text-muted-foreground">
                                    {{ value.description }}
                                </p>
                            </div>
                        </div>
                        <Separator class="mt-3 h-0.5 bg-border" />
                    </li>
                </ul>
            </article>
        </div>
    </motion.section>
</template>
