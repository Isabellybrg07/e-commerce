import type { Meta, StoryObj } from "@storybook/react-vite";
import ProductCard from ".";



const meta = {

    title: 'Docs/ProductCard',
    component: ProductCard,
    tags: ['autodocs'],
    args: {},
    parameters: { layout: 'centered' },
} satisfies Meta<typeof ProductCard>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        product: {
            title: 'modelo',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL841pfh6XKMr4TQbvPF1gr9gyqOwgKangYg&s',
            price: 15.00,

        },
        
    },
};