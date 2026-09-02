export const scrollReveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.45, ease: 'easeOut' },
};

export function staggeredReveal(index) {
    return {
        ...scrollReveal,
        transition: {
            ...scrollReveal.transition,
            delay: index * 0.08,
        },
    };
}
