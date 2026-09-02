import { mount } from '@vue/test-utils';
import AboutSection from '../src/components/AboutSection.vue';
import ContactSection from '../src/components/ContactSection.vue';
import HeroSection from '../src/components/HeroSection.vue';
import ProjectsSection from '../src/components/ProjectsSection.vue';
import StatsSection from '../src/components/StatsSection.vue';
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
        expect(wrapper.get('a[href="#projects"]').text()).toContain('Lihat karya saya');
        expect(wrapper.get('[role="img"]').attributes('aria-label')).toBe('Ilustrasi terminal');
    });

    it('renders all four portfolio statistics with the code metric emphasized', () => {
        const wrapper = mount(StatsSection);
        const stats = wrapper.findAll('article');

        expect(stats).toHaveLength(4);
        expect(stats.map((stat) => stat.text())).toEqual(
            expect.arrayContaining([
                '15+Proyek selesai',
                '5+Tahun pengalaman',
                '20+Klien puas',
                '100k+Baris kode',
            ]),
        );
        expect(stats[3].classes()).toContain('bg-foreground');
    });

    it('renders the three reference projects as shadcn cards', () => {
        const wrapper = mount(ProjectsSection);

        expect(wrapper.findAll('[data-slot="card"]')).toHaveLength(3);
        expect(wrapper.text()).toContain('Aplikasi E-Commerce');
        expect(wrapper.text()).toContain('Dasbor Analitik');
        expect(wrapper.text()).toContain('Sistem Manajemen');
        expect(wrapper.findAll('a[href="#contact"]')).toHaveLength(3);
    });

    it('renders the about values and direct contact method', () => {
        const about = mount(AboutSection);
        const contact = mount(ContactSection);

        expect(about.text()).toContain('Kinerja maksimal');
        expect(about.text()).toContain('Desain fungsional');
        expect(contact.get('a[href="mailto:hello@kreatif.dev"]').text()).toContain(
            'hello@kreatif.dev',
        );
        expect(contact.findAll('a[href="mailto:hello@kreatif.dev"]')).toHaveLength(2);
    });
});
