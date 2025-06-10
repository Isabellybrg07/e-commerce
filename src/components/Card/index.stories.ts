import type { Meta, StoryObj } from "@storybook/react-vite";
import Card from ".";



const meta = {

    title: 'Docs/Card',
    component: Card,
    tags: ['autodocs'],
    args: {},
    parameters: { layout: 'centered' },
} satisfies Meta<typeof Card>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        product: {
            title: 'modelo',
            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL841pfh6XKMr4TQbvPF1gr9gyqOwgKangYg&s',
            price: 15.00,

        },
        rotate: true,
    },
};