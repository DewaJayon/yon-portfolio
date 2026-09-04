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
        expect(wrapper.findAll('[data-slot="card"]')).toHaveLength(8);
    });

    it('renders all project cards with their portfolio details', () => {
        const wrapper = mountApp();
        const projects = wrapper.get('#projects');

        expect(projects.text()).toContain('Daftar Ku');
        expect(projects.text()).toContain('E-Catalog Gajah Bali');
        expect(projects.text()).toContain('Virtual Tour Desa Selat');
        expect(projects.findAll('img')).toHaveLength(7);
    });

    it('connects navigation and call-to-action links to page sections', () => {
        const wrapper = mountApp();
        const links = wrapper.findAll('a').map((link) => link.attributes('href'));

        expect(wrapper.get('header').classes()).toContain('fixed');
        expect(links).toContain('#projects');
        expect(links).toContain('#about');
        expect(links).toContain('#contact');
        expect(wrapper.get('a[href="mailto:dewajayon3@gmail.com"]').text()).toContain(
            'dewajayon3@gmai.com',
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
