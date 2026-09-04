<script setup>
import { ref } from 'vue';
import { Code2, Menu } from '@lucide/vue';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

const mobileMenuOpen = ref(false);

const navigation = [
    { label: 'Karya', href: '#projects' },
    { label: 'Tentang', href: '#about' },
    { label: 'Kontak', href: '#contact' },
];

function closeMobileMenu() {
    mobileMenuOpen.value = false;
}
</script>

<template>
    <header
        class="fixed inset-x-0 top-0 z-50 border-b-2 border-border bg-background/95 backdrop-blur-sm"
    >
        <nav
            class="page-shell flex min-h-14 items-center justify-between gap-4 px-6 py-2 md:px-12"
            aria-label="Navigasi utama"
        >
            <a
                href="#top"
                class="flex items-center gap-2 text-foreground"
                aria-label="Beranda portfolio"
            >
                <Code2 class="size-5" aria-hidden="true" />
                <span class="font-display text-3xl uppercase leading-none">Dewa Jayon</span>
            </a>

            <ul class="hidden items-center gap-7 md:flex">
                <li v-for="item in navigation" :key="item.href">
                    <a :href="item.href" class="label-caps text-foreground hover:text-primary">
                        {{ item.label }}
                    </a>
                </li>
            </ul>

            <div class="flex items-center gap-3">
                <Button as-child variant="brutal" size="sm" class="hidden sm:inline-flex">
                    <a href="#contact">Rekrut saya</a>
                </Button>

                <Sheet v-model:open="mobileMenuOpen">
                    <SheetTrigger as-child>
                        <Button
                            variant="brutal-outline"
                            size="icon"
                            class="md:hidden"
                            aria-label="Buka navigasi"
                        >
                            <Menu data-icon="inline-start" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" class="border-l-2 border-border bg-background">
                        <SheetHeader>
                            <SheetTitle class="font-display text-4xl uppercase">Menu</SheetTitle>
                        </SheetHeader>
                        <div class="flex flex-col gap-3 px-4">
                            <SheetClose v-for="item in navigation" :key="item.href" as-child>
                                <a
                                    :href="item.href"
                                    class="label-caps border-b-2 border-border py-4 text-foreground"
                                    @click="closeMobileMenu"
                                >
                                    {{ item.label }}
                                </a>
                            </SheetClose>
                            <Button as-child variant="brutal" class="mt-3 w-full">
                                <a href="#contact" @click="closeMobileMenu">Rekrut saya</a>
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    </header>
</template>
