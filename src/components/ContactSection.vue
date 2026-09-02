<script setup>
import { Mail, MapPin, Send } from '@lucide/vue';
import { motion } from 'motion-v';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { scrollReveal } from '@/lib/motion';
</script>

<template>
    <motion.section
        v-bind="scrollReveal"
        id="contact"
        class="scroll-mt-6 border-t-2 border-border p-10 md:p-16"
        aria-labelledby="contact-title"
    >
        <h2 id="contact-title" class="section-title">Hubungi saya</h2>
        <Card class="mt-8 gap-0 bg-muted py-0 md:flex-row md:items-center md:justify-between">
            <CardContent class="flex flex-col gap-6 px-5 py-6 md:px-7 md:py-8">
                <div class="flex items-start gap-3">
                    <Mail class="mt-1 size-5 shrink-0 text-foreground" aria-hidden="true" />
                    <div>
                        <p class="label-caps text-muted-foreground">Email</p>
                        <a
                            class="mt-1 block font-display text-2xl uppercase leading-none text-foreground hover:text-primary md:text-3xl"
                            href="mailto:hello@kreatif.dev"
                        >
                            hello@kreatif.dev
                        </a>
                    </div>
                </div>
                <div class="flex items-start gap-3">
                    <MapPin class="mt-1 size-5 shrink-0 text-foreground" aria-hidden="true" />
                    <div>
                        <p class="label-caps text-muted-foreground">Lokasi</p>
                        <p class="mt-1 text-base text-foreground">Jakarta, Indonesia</p>
                    </div>
                </div>
            </CardContent>
            <CardFooter class="px-5 pb-6 md:px-7 md:pb-0 md:pl-0">
                <Button as-child variant="brutal" size="lg" class="w-full md:w-auto">
                    <a href="mailto:hello@kreatif.dev">
                        Kirim pesan
                        <Send data-icon="inline-end" />
                    </a>
                </Button>
            </CardFooter>
        </Card>
    </motion.section>
</template>
