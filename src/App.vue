<script setup>
import AboutSection from '@/components/AboutSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import HeroSection from '@/components/HeroSection.vue';
import PortfolioFooter from '@/components/PortfolioFooter.vue';
import PortfolioHeader from '@/components/PortfolioHeader.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import SkillsTicker from '@/components/SkillsTicker.vue';
import StatsSection from '@/components/StatsSection.vue';
</script>

<template>
    <div class="min-h-screen overflow-x-hidden pt-14">
        <PortfolioHeader />
        <main id="top" class="page-shell border-x-2 border-border bg-background/85">
            <HeroSection />
            <StatsSection />
            <ProjectsSection />
            <AboutSection />
            <ContactSection />
        </main>
        <SkillsTicker />
        <PortfolioFooter />
    </div>
</template>
