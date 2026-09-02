<script setup>
import { ArrowRight, Boxes, LayoutDashboard, ShoppingBag } from '@lucide/vue';
import { motion } from 'motion-v';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { scrollReveal, staggeredReveal } from '@/lib/motion';

const projects = [
    {
        title: 'Aplikasi E-Commerce',
        description:
            'Platform toko online modern dengan integrasi pembayaran yang mulus dan pengalaman pengguna yang responsif.',
        icon: ShoppingBag,
    },
    {
        title: 'Dasbor Analitik',
        description:
            'Aplikasi visualisasi data waktu nyata untuk memantau metrik bisnis utama dengan grafik interaktif.',
        icon: LayoutDashboard,
    },
    {
        title: 'Sistem Manajemen',
        description:
            'Aplikasi internal perusahaan untuk mengelola inventaris, sumber daya manusia, dan operasi logistik harian.',
        icon: Boxes,
    },
];
</script>

<template>
    <motion.section
        v-bind="scrollReveal"
        id="projects"
        class="scroll-mt-6 p-10 md:p-16"
        aria-labelledby="projects-title"
    >
        <h2 id="projects-title" class="section-title">Proyek terpilih</h2>
        <Separator class="my-8 h-0.5 bg-border" />
        <div class="grid gap-5 md:grid-cols-3">
            <motion.div
                v-for="(project, index) in projects"
                :key="project.title"
                v-bind="staggeredReveal(index)"
            >
                <Card class="h-full gap-0 py-0">
                    <CardHeader
                        class="min-h-32 place-content-center border-b-2 border-border bg-muted px-6 py-8 md:min-h-40"
                    >
                        <component
                            :is="project.icon"
                            class="size-10 justify-self-center text-[#3e4a3f]"
                            aria-hidden="true"
                        />
                    </CardHeader>
                    <CardContent class="flex flex-1 flex-col gap-4 px-6 pt-6 pb-5">
                        <CardTitle class="font-display text-4xl uppercase leading-[0.9]">{{
                            project.title
                        }}</CardTitle>
                        <CardDescription class="text-sm leading-6 text-muted-foreground">
                            {{ project.description }}
                        </CardDescription>
                    </CardContent>
                    <CardFooter class="px-6 pb-6">
                        <Button as-child variant="brutal" size="sm">
                            <a href="#contact"
                                >Lihat detail <ArrowRight data-icon="inline-end"
                            /></a>
                        </Button>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    </motion.section>
</template>
