import { projects } from '../src/data/projects';

describe('project data', () => {
    it('contains the complete project portfolio with images and optional links', () => {
        expect(projects).toHaveLength(7);
        expect(projects.map((project) => project.slug)).toEqual([
            'daftar-ku',
            'e-absensi-smp',
            'e-catalog-gajah-bali',
            'kawanime',
            'stockease',
            'sokasik',
            'virtual-tour-desa-selat',
        ]);

        for (const project of projects) {
            expect(project.title).toBeTruthy();
            expect(project.category).toBeTruthy();
            expect(project.description).toBeTruthy();
            expect(project.image).toMatch(/^\/img-project\/.+\.png$/);
            expect(project.imageAlt).toBeTruthy();
            expect(project.link === null || typeof project.link === 'string').toBe(true);
        }
    });
});
