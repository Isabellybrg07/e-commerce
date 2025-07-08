import type { Meta, StoryObj } from "@storybook/react-vite";
import Car from ".";



const meta = {

    title: 'Docs/Car',
    component: Car,
    tags: ['autodocs'],
    args: {},
    parameters: { layout: 'centered' },
} satisfies Meta<typeof Car>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        product: {
            title: 'modelo',
            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL841pfh6XKMr4TQbvPF1gr9gyqOwgKangYg&s',
            price: 15.00,

        },
        rotate: false,
    },
};