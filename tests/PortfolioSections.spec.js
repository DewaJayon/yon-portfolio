import { mount } from '@vue/test-utils';
import AboutSection from '../src/components/AboutSection.vue';
import ContactSection from '../src/components/ContactSection.vue';
import HeroSection from '../src/components/HeroSection.vue';
import PortfolioFooter from '../src/components/PortfolioFooter.vue';
import ProjectsSection from '../src/components/ProjectsSection.vue';
import StatsSection from '../src/components/StatsSection.vue';
import { projects } from '../src/data/projects';
import { scrollReveal, staggeredReveal } from '../src/lib/motion';

describe('portfolio sections', () => {
    it('uses restrained one-time scroll reveal settings', () => {
        expect(scrollReveal.initial).toEqual({ opacity: 0, y: 20 });
        expect(scrollReveal.whileInView).toEqual({ opacity: 1, y: 0 });
        expect(scrollReveal.viewport).toEqual({ once: true, amount: 0.2 });
        expect(staggeredReveal(2).transition.delay).toBe(0.16);
    });

    it('renders the hero message, availability state, and projects CTA', () => {
        const wrapper = mount(HeroSection);

        expect(wrapper.get('h1').text()).toContain('Pengalaman');
        expect(wrapper.text()).toContain('Tersedia untuk pekerjaan');
        expect(wrapper.text()).toContain('Full-stack web developer');
        expect(wrapper.text()).toContain('Laravel dan Node.js');
        expect(wrapper.get('a[href="#projects"]').text()).toContain('Lihat karya saya');
        expect(wrapper.get('img').attributes('src')).toBe('/me.jpg');
        expect(wrapper.get('img').attributes('alt')).toBe('Foto Dewa Jayon');
    });

    it('renders statistics derived from the project portfolio', () => {
        const wrapper = mount(StatsSection);
        const stats = wrapper.findAll('article');

        expect(stats).toHaveLength(4);
        expect(stats.map((stat) => stat.text())).toEqual(
            expect.arrayContaining([
                '7Proyek terpilih',
                '2Proyek pribadi',
                '1Startup SaaS',
                '7Demo online',
            ]),
        );
        expect(stats[3].classes()).toContain('bg-foreground');
    });

    it('renders every project with its image, category, and link state', () => {
        const wrapper = mount(ProjectsSection);

        expect(wrapper.findAll('[data-slot="card"]')).toHaveLength(projects.length);
        expect(wrapper.text()).toContain('E-Absensi SMP');
        expect(wrapper.text()).toContain('StockEase');
        expect(wrapper.findAll('img')).toHaveLength(projects.length);
        expect(wrapper.findAll('a[target="_blank"]')).toHaveLength(
            projects.filter((project) => project.link).length,
        );
        expect(
            wrapper.findAll('p').filter((item) => item.text() === 'Link segera hadir'),
        ).toHaveLength(projects.filter((project) => !project.link).length);
    });

    it('renders the about values and direct contact method', () => {
        const about = mount(AboutSection);
        const contact = mount(ContactSection);

        expect(about.text()).toContain('Laravel dan Node.js');
        expect(about.text()).toContain('Backend andal');
        expect(about.text()).toContain('Solusi end-to-end');
        expect(contact.get('a[href="mailto:dewajayon3@gmail.com"]').text()).toContain(
            'dewajayon3@gmai.com',
        );
        expect(contact.findAll('a[href="mailto:dewajayon3@gmail.com"]')).toHaveLength(2);
    });

    it('renders the Vite and Vue footer with only the GitHub profile link', () => {
        const wrapper = mount(PortfolioFooter);

        expect(wrapper.text()).toContain('© 2026 Dewa Jayon');
        expect(wrapper.text()).toContain('Dibangun dengan Vite + Vue');
        expect(wrapper.findAll('a')).toHaveLength(1);
        expect(wrapper.get('a').attributes('href')).toBe('https://github.com/DewaJayon');
    });
});
