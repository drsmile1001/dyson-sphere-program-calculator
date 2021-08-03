<template>
  <div>
    <img v-if="image" class="w-10" :src="image" :alt="resource" />
    <div v-else>{{ resource }}</div>
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
