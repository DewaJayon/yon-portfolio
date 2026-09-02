<script setup>
import { ArrowRight, Terminal } from '@lucide/vue';
import { motion } from 'motion-v';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { scrollReveal } from '@/lib/motion';
</script>

<template>
    <motion.section
        v-bind="scrollReveal"
        class="grid border-b-2 border-border md:min-h-[440px] md:grid-cols-2"
        aria-labelledby="hero-title"
    >
        <div
            class="flex flex-col justify-center border-b-2 border-border p-10 md:border-r-2 md:border-b-0 md:px-16 md:py-18"
        >
            <Badge variant="brutal" class="mb-6 self-start">
                <span class="size-1.5 bg-foreground" aria-hidden="true" />
                Tersedia untuk pekerjaan
            </Badge>
            <h1 id="hero-title" class="display-title mb-5 text-foreground">
                <span class="block">Membangun</span>
                <span class="display-title-outline block">Pengalaman</span>
                <span class="display-title-outline block">Digital</span>
                <span class="block">Melalui kode.</span>
            </h1>
            <p class="max-w-xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                Seorang pengembang kreatif yang berfokus pada aplikasi web berkinerja tinggi dan
                desain UI/UX yang ramping. Menjembatani kesenjangan antara estetika dan rekayasa.
            </p>
            <div class="mt-8 flex">
                <Button as-child variant="brutal" size="lg">
                    <a href="#projects">
                        Lihat karya saya
                        <ArrowRight data-icon="inline-end" />
                    </a>
                </Button>
            </div>
        </div>

        <div class="flex min-h-80 items-center justify-center bg-muted p-8 md:min-h-full md:p-14">
            <div
                class="relative aspect-[1.2/1] w-full max-w-md border-4 border-border bg-card shadow-[6px_6px_0_var(--border)]"
                aria-label="Ilustrasi terminal"
                role="img"
            >
                <div class="absolute top-2.5 left-2.5 flex gap-1.5" aria-hidden="true">
                    <span class="size-2.5 border border-border bg-destructive" />
                    <span class="size-2.5 border border-border bg-accent" />
                    <span class="size-2.5 border border-border bg-background" />
                </div>
                <div
                    class="terminal-glyph absolute inset-0 m-auto flex size-20 items-center justify-center border-8 border-[#3e4a3f] bg-background sm:size-24"
                >
                    <Terminal class="size-11 text-[#3e4a3f] sm:size-14" aria-hidden="true" />
                </div>
            </div>
        </div>
    </motion.section>
</template>
