import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import App from '../src/App.vue';

function mountApp() {
    return mount(App, {
        attachTo: document.body,
    });
}

describe('App', () => {
    afterEach(() => {
        document.body.innerHTML = '';
    });

    it('renders the portfolio sections from the supplied design', () => {
        const wrapper = mountApp();

        expect(wrapper.get('h1').text()).toContain('Membangun');
        expect(wrapper.get('#projects').get('h2').text()).toBe('Proyek terpilih');
        expect(wrapper.get('#about').get('h2').text()).toBe('Tentang saya');
        expect(wrapper.get('#contact').get('h2').text()).toBe('Hubungi saya');
        expect(wrapper.findAll('[data-slot="card"]')).toHaveLength(4);
    });

    it('renders all project cards with a contact detail action', () => {
        const wrapper = mountApp();
        const projects = wrapper.get('#projects');

        expect(projects.text()).toContain('Aplikasi E-Commerce');
        expect(projects.text()).toContain('Dasbor Analitik');
        expect(projects.text()).toContain('Sistem Manajemen');
        expect(projects.findAll('a[href="#contact"]')).toHaveLength(3);
    });

    it('connects navigation and call-to-action links to page sections', () => {
        const wrapper = mountApp();
        const links = wrapper.findAll('a').map((link) => link.attributes('href'));

        expect(wrapper.get('header').classes()).toContain('fixed');
        expect(links).toContain('#projects');
        expect(links).toContain('#about');
        expect(links).toContain('#contact');
        expect(wrapper.get('a[href="mailto:hello@kreatif.dev"]').text()).toContain(
            'hello@kreatif.dev',
        );
    });

    it('opens the mobile navigation sheet', async () => {
        const wrapper = mountApp();

        await wrapper.get('button[aria-label="Buka navigasi"]').trigger('click');
        await nextTick();

        expect(document.body.textContent).toContain('Menu');
        expect(document.body.textContent).toContain('Karya');
    });
});
