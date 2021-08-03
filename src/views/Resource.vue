<template>
  <div class="resource w-7 h-7 relative">
    <a :title="resource">
      <img v-if="image" :src="image" :alt="resource" />
      <div class="text-xs" v-else>{{ resource }}</div>
      <span
        class="absolute right-0 bottom-0 text-xs bg-white rounded-md"
        v-if="num !== undefined"
        >{{ num }}</span
      >
    </a>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "vue";

import { resources } from "@/Resource";

export default defineComponent({
  name: "Resource",
  props: {
    resource: {
      type: String,
      required: true,
    },
    num: Number,
  },
  setup(props) {
    const image = computed(
      () => resources.find((re) => re.name === props.resource)?.image
    );
    console.log(image.value);
    return {
      image,
    };
  },
});
</script>
