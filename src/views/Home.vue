<template>
  <h2>經過時間</h2>
  <input v-model.number="processTimes" type="number" />
  <h2>配方</h2>
  <table>
    <thead>
      <tr>
        <th>名稱</th>
        <th>輸入</th>
        <th>輸出</th>
        <th>費時</th>
        <th>套用數量</th>
        <th>動作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(recipe, i) in recipes" :key="i">
        <td>{{ recipe.name }}</td>
        <td>
          <span v-for="r in recipe.inputs" :key="r">
            {{ r.resource }} x {{ r.amount }}
          </span>
        </td>
        <td>
          <span v-for="r in recipe.outputs" :key="r">
            {{ r.resource }} x {{ r.amount }}
          </span>
        </td>
        <td>{{ recipe.processTimes }}</td>
        <td>
          <input type="number" v-model.number="recipe.apply" />
        </td>
        <td>
          <button @click="slow(recipe)">抑制輸出</button>
        </td>
      </tr>
    </tbody>
  </table>
  <h2>資源變動</h2>
  <table>
    <thead>
      <tr>
        <th>資源</th>
        <th>變動量</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(change, i) in changes" :key="i">
        <td>
          {{ change.resource }}
        </td>
        <td>
          {{ change.changes }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "vue";

interface Recipe {
  name: string;
  inputs: {
    resource: string;
    amount: number;
  }[];
  outputs: {
    resource: string;
    amount: number;
  }[];
  processTimes: number;
}

type RecipeApply = Recipe & {
  apply: number;
};

const recipes: Recipe[] = [
  {
    name: "鐵塊（冶煉）",
    inputs: [{ resource: "鐵礦", amount: 1 }],
    outputs: [{ resource: "鐵塊", amount: 1 }],
    processTimes: 1,
  },
  {
    name: "銅塊（冶煉）",
    inputs: [{ resource: "銅礦", amount: 1 }],
    outputs: [{ resource: "銅塊", amount: 1 }],
    processTimes: 1,
  },
  {
    name: "磁鐵（冶煉）",
    inputs: [{ resource: "鐵礦", amount: 1 }],
    outputs: [{ resource: "磁鐵", amount: 1 }],
    processTimes: 1.5,
  },
  {
    name: "石材（冶煉）",
    inputs: [{ resource: "石礦", amount: 1 }],
    outputs: [{ resource: "石材", amount: 1 }],
    processTimes: 1,
  },
  {
    name: "電路板（製造）",
    inputs: [
      { resource: "鐵塊", amount: 2 },
      { resource: "銅塊", amount: 1 },
    ],
    outputs: [{ resource: "電路板", amount: 2 }],
    processTimes: 1,
  },
  {
    name: "磁線圈（製造）",
    inputs: [
      { resource: "磁鐵", amount: 2 },
      { resource: "銅塊", amount: 1 },
    ],
    outputs: [{ resource: "磁線圈", amount: 2 }],
    processTimes: 1,
  },
  {
    name: "電弧熔爐（製造）",
    inputs: [
      { resource: "鐵塊", amount: 4 },
      { resource: "石材", amount: 2 },
      { resource: "電路板", amount: 4 },
      { resource: "磁線圈", amount: 2 },
    ],
    outputs: [{ resource: "電弧熔爐", amount: 1 }],
    processTimes: 3,
  },
];

export default defineComponent({
  name: "Home",
  setup() {
    const state = reactive({
      recipes: [] as RecipeApply[],
      processTimes: 1,
    });

    const changes = computed(() => {
      const resourceChanges = new Map<string, number>();
      state.recipes.forEach((r) => {
        if (!r.apply) return;
        r.inputs.forEach((i) => {
          const change = (state.processTimes / r.processTimes) * i.amount;
          resourceChanges.set(
            i.resource,
            (resourceChanges.get(i.resource) ?? 0) - change * r.apply
          );
        });
        r.outputs.forEach((o) => {
          const change = (state.processTimes / r.processTimes) * o.amount;
          resourceChanges.set(
            o.resource,
            (resourceChanges.get(o.resource) ?? 0) + change * r.apply
          );
        });
      });

      return Array.from(resourceChanges.entries()).map(
        ([resource, changes]) => ({
          resource,
          changes,
        })
      );
    });

    recipes
      .map((r) =>
        Object.assign(r, {
          apply: 0,
        })
      )
      .forEach((r) => {
        state.recipes.push(r);
      });

    function slow(r: RecipeApply) {
      const output = r.outputs[0];
      const change = changes.value.find((c) => c.resource === output.resource);
      console.log(change);

      if (change === undefined) return;
      const slowAmout = change.changes / (output.amount * state.processTimes);
      console.log(slowAmout);
      r.apply -= slowAmout;
    }

    return {
      ...toRefs(state),
      changes,
      slow,
    };
  },
});
</script>
