<script setup>
import { ArrowUpRight } from '@lucide/vue';
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
import { projects } from '@/data/projects';
import { scrollReveal, staggeredReveal } from '@/lib/motion';
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
        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <motion.div
                v-for="(project, index) in projects"
                :key="project.slug"
                v-bind="staggeredReveal(index)"
            >
                <Card class="h-full gap-0 py-0">
                    <CardHeader class="border-b-2 border-border bg-muted p-0">
                        <img
                            :src="project.image"
                            :alt="project.imageAlt"
                            class="aspect-video w-full object-cover"
                        />
                    </CardHeader>
                    <CardContent class="flex flex-1 flex-col gap-4 px-6 pt-6 pb-5">
                        <p class="text-xs font-bold tracking-[0.14em] text-[#3e4a3f] uppercase">
                            {{ project.category }}
                        </p>
                        <CardTitle class="font-display text-4xl uppercase leading-[0.9]">{{
                            project.title
                        }}</CardTitle>
                        <CardDescription class="text-sm leading-6 text-muted-foreground">
                            {{ project.description }}
                        </CardDescription>
                    </CardContent>
                    <CardFooter class="px-6 pb-6">
                        <Button v-if="project.link" as-child variant="brutal" size="sm">
                            <a :href="project.link" target="_blank" rel="noreferrer">
                                Kunjungi proyek <ArrowUpRight data-icon="inline-end" />
                            </a>
                        </Button>
                        <p v-else class="text-sm font-medium text-muted-foreground">
                            Link segera hadir
                        </p>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    </motion.section>
</template>
