import CardModal from "../app/components/card/CardModal";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Card/Modal",
  component: CardModal,
  parameters: {},
} satisfies Meta<typeof CardModal>;

export default meta;
type Story = StoryObj<typeof meta>;

let open = false;

export const CardModalStory: Story = {
  args: {
    open: true,
  },
};
