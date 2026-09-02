<script setup>
import { cn } from "@/lib/utils";

const props = defineProps({
  class: {
    type: [Boolean, null, String, Object, Array],
    required: false,
    skipCheck: true,
  },
});
</script>

<template>
  <div
    data-slot="card"
    :class="
      cn(
        'bg-card text-card-foreground flex flex-col rounded-none border-2 border-border py-6 shadow-[4px_4px_0_var(--border)]',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
